<?php
/**
 * Add mate field to comments
 * @since 4.0
 */
add_action('graphql_register_types', 'register_comment_mate_type');

function register_comment_mate_type()
{
    register_graphql_object_type('CommentMate', [
        'description' => __("Get the comment mate.", 'sakura'),
        'fields' => [
            'name' => [
                'type' => 'String',
                'description' => __('The name of the comment author', 'sakura'),
            ],
            'avatar' => [
                'type' => 'String',
                'description' => __('The avatar of the comment author', 'sakura'),
            ],
            'url' => [
                'type' => 'String',
                'description' => __('The url of the comment author', 'sakura'),
            ],
            'ua' => [
                'type' => 'String',
                'description' => __('The user agent of the comment author', 'sakura'),
            ],
            'location' => [
                'type' => 'String',
                'description' => __('The IP location of the comment author', 'sakura'),
            ],
            'level' => [
                'type' => 'Integer',
                'description' => __('The level (by comment) of the comment author', 'sakura'),
            ],
            'role' => [
                'type' => 'Integer',
                'description' => __('The user role in wordpress of the comment author', 'sakura'),
            ],
            'like' => [
                'type' => 'Integer',
                'description' => __('The like count of the comment', 'sakura'),
            ],
            'dislike' => [
                'type' => 'Integer',
                'description' => __('The dislike count of the comment', 'sakura'),
            ],
            'child' => [
                'type' => 'String',
                'description' => __('The children ID of the comment', 'sakura'),
            ],
            'childPre' => [
                'type' => 'String',
                'description' => __('The the first 3 children to show', 'sakura'),
            ],
        ],
    ]);
}

add_action('graphql_register_types', 'register_comment_mate_field');

function register_comment_mate_field()
{
    register_graphql_field('Comment', 'mate', [
        'description' => __('The comment mate', 'sakura'),
        'type' => 'CommentMate',
        'resolve' => function (\WPGraphQL\Model\Comment $comment, $args, $depth) {
            $comment_ID = $comment->commentId;
            $comment_child = new CommentChild($comment_ID);
            return [
                'name' => get_comment_author($comment_ID),
                'avatar' => get_avatar_url($comment->commentAuthorEmail),
                'url' => get_comment_author_url($comment_ID),
                'ua' => 'Chrome 70 Windows 10',
                'location' => 'Shanghai, China',
                'level' => 6,
                'role' => 9,
                'like' => 100,
                'dislike' => 10,
                // CURRENTLY WPGRAPHQL DOESNOT SUPPORT A [Integer] TYPE,
                // SO WE USE A STRING HERE
                'child' => json_encode($comment_child->comment_child_id_list),
                'childPre' => json_encode($comment_child->comment_child_preview),
            ];
        },
    ]);
}

/**
 * Get a comment's child comments as mate
 * @since 4.0
 * @author Mashiro
 * @license MIT
 * @property int    $comment_ID
 * @property array  $comment_child_id_list
 * @property array  $comment_child_preview
 */
class CommentChild
{
    public $comment_ID;
    public $comment_child_id_list;
    public $comment_child_preview;

    public function __construct($comment_ID)
    {
        $this->comment_ID = $comment_ID;
        $this->comment_child_id_list = $this->get_the_child_id_list($this->comment_ID);
        $this->comment_child_preview = $this->get_the_child_preview($this->comment_child_id_list);
    }

    /**
     * SQL query for the child id
     * @since 4.0
     */
    private function pushChildId($child_list_all, $child_ID)
    {
        global $wpdb;
        $child_array = $wpdb->get_col("SELECT comment_ID FROM $wpdb->comments WHERE comment_parent = $child_ID");
        $child_list_all = array_merge($child_list_all, $child_array);

        if (!empty($child_array)) {
            foreach ($child_array as $child) {
                $this->pushChildId($child_list_all, $child);
            }
        }

        return $child_list_all;
    }

    /**
     * Get id of all `children` and `grandchildren` and `grandgrandchildren`
     * and so on of a comment
     * @since 4.0
     * @param $comment_ID Int
     * @return a array of all the id of children
     */
    private function get_the_child_id_list($comment_ID)
    {
        $child_list_all = array();
        $child_list_all = $this->pushChildId($child_list_all, $comment_ID);

        return array_map('intval', $child_list_all);
    }

    /**
     * SQL query for the child preview
     * TODO: we can enhance query performance by merging queries in
     * pushChildPre() and pushChildId()
     * @since 4.0
     */
    private function pushChildPre($child_id_list, $i)
    {
        global $wpdb;
        $id = $child_id_list[$i];
        $parentId = $wpdb->get_var("SELECT comment_parent FROM $wpdb->comments WHERE comment_ID = $id");
        return array(
            'id' => $id,
            'name' => get_comment_author($id),
            'avatar' => get_avatar_url(get_comment_author_email($id)),
            'url' => get_comment_author_url($id),
            'content' => get_comment_text($id),
            'ua' => 'Chrome 70 Windows 10',
            'location' => 'Shanghai, China',
            'level' => 6,
            'role' => 9,
            'like' => 100,
            'dislike' => 10,
            'parent' => intval($parentId),
        );
    }

    /**
     * Get the earliest 3 comments (if exist) to preview
     */
    private function get_the_child_preview($comment_child_id_list)
    {
        $preview = array();
        if (count($comment_child_id_list) > 3) {
            for ($i = 0; $i <= 2; $i++) {
                $preview[$i] = $this->pushChildPre($comment_child_id_list, $i);
            }

        } elseif (count($comment_child_id_list) == 0) {
            return $preview;

        } else {
            for ($i = 0; $i <= count($comment_child_id_list) - 1; $i++) {
                $preview[$i] = $this->pushChildPre($comment_child_id_list, $i);
            }
        }

        return $preview;
    }
}