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
            'date' => [
                'type' => 'String',
                'description' => __('Formated date of the comment', 'sakura'),
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
                'date' => get_comment_date('', $comment_ID),
                'location' => 'Shanghai, China',
                'level' => 6,
                'role' => 9,
                'like' => 100,
                'dislike' => 10,
                // CURRENTLY WPGRAPHQL DOESNOT SUPPORT A [Integer] TYPE,
                // SO WE USE A STRING HERE
                'child' => json_encode($comment_child->get_id_list()),
                'childPre' => json_encode($comment_child->get_preview_list()),
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
 * @property array  $id_list
 * @property array  $preview_list
 * @property array  $detail_list
 * @property int    $page_size
 * @property int    $target_page
 * @property int    $page_count
 * @property int    $child_amount
 */
class CommentChild
{
    public $comment_ID;
    private $id_list;
    private $preview_list;
    private $detail_list;

    // *how many children you want in a query? (defaut show all = $child_amount)
    private $page_size;
    // *which page you are going to request? (default show last page)
    private $target_page;
    // the total page number
    private $page_count;
    // how many child comments in total?
    private $child_amount;

    /**
     * Get a comment's child comments as mate
     * @since 4.0
     * @param int  $comment_ID
     * @param int  $page_size
     * @param int  $target_page
     */
    public function __construct($comment_ID, $page_size = null, $target_page = null)
    {
        $this->comment_ID = $comment_ID;

        $this->page_size = !empty($page_size) ? $page_size : null;
        $this->target_page = !empty($target_page) ? $target_page : null;
    }

    public function get_id_list()
    {
        $this->id_list = $this->get_the_child_id_list($this->comment_ID);
        return $this->id_list;
    }

    public function get_preview_list()
    {
        $this->preview = $this->get_the_child_preview($this->id_list);
        return $this->preview;
    }

    public function get_detail_list()
    {
        $child_generic = $this->get_the_child_generic($this->comment_ID);

        $this->child_amount = count($child_generic);

        $this->page_size = $this->page_size ? $this->page_size : $this->child_amount;

        $this->page_count = intval($this->child_amount / $this->page_size) + 1;

        $this->target_page = $this->target_page ? $this->target_page : 1;

        $detail = array();

        $start_cursor = $this->page_size * ($this->target_page - 1);
        $end_cursor = $start_cursor + $this->page_size;

        // for ($cursor = $start_cursor; $cursor < $end_cursor; $cursor++) {
        //     $each = $child_generic[$cursor];
        //     $detail = array_merge($detail, array(
        //         'id' => $each->comment_ID,
        //         'parent' => $each->comment_parent,
        //         'name' => $each->comment_author,
        //         'avatar' => get_avatar_url($each->comment_author_email),
        //         'url' => $each->comment_author($each->comment_author_url),
        //         'content' => get_comment_text($each->comment_ID),
        //         'date' => get_comment_date('', $each->comment_ID),
        //         'ua' => 'Chrome 70 Windows 10',
        //         'location' => 'Shanghai, China',
        //         'level' => 6,
        //         'role' => 9,
        //         'like' => 100,
        //         'dislike' => 10,
        //     ));
        // }

        // $output = array(
        //     'page_size' => $this->page_size,
        //     'target_page' => $this->target_page,
        //     'page_count' => $this->page_count,
        //     'child_amount' => $this->child_amount,
        //     'detail_list' => $detail_list,
        // );

        return $child_generic;

    }

    /**
     * SQL query for the child generic
     * @since 4.0
     */
    private function pushChildGeneric($child_generic_all, $child_ID)
    {
        global $wpdb;
        $child_generic = $wpdb->get_results("SELECT * FROM $wpdb->comments WHERE comment_parent = $child_ID");
        $child_generic_all = array_merge($child_generic_all, $child_generic);

        if (!empty($child_generic->comment_ID)) {
            foreach ($child_generic->comment_ID as $child_ID) {
                $this->pushChildGeneric($child_generic_all, $child_ID);
            }
        }

        return $child_generic_all;
    }

    private function get_the_child_generic($comment_ID)
    {
        $child_generic_all = array();
        return $this->pushChildGeneric($child_generic_all, $comment_ID);
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
            'date' => get_comment_date('', $id),
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
    private function get_the_child_preview($id_list)
    {
        $preview = array();
        if (count($id_list) > 3) {
            for ($i = 0; $i < 3; $i++) {
                $preview[$i] = $this->pushChildPre($id_list, $i);
            }

        } elseif (count($id_list) == 0) {
            return $preview;

        } else {
            for ($i = 0; $i < count($id_list); $i++) {
                $preview[$i] = $this->pushChildPre($id_list, $i);
            }
        }

        return $preview;
    }
}

$test = new CommentChild(26);
var_dump($test->get_detail_list()[0]);
echo $test->get_detail_list()[0]->comment_ID;

// global $wpdb;
// $generic = $wpdb->get_results("SELECT * FROM $wpdb->comments WHERE comment_parent = 26");
// var_dump($generic[0]);
