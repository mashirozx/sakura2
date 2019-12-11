<?php

class GetCommentChildList extends GetCommentList
{
    /**
     * the post id
     *
     * @var int
     */
    public $comment_id;

    /**
     * child comment ID list
     *
     * @var array
     */
    public $child_id_list;

    /**
     * ConnectionResolver constructor.
     * @since 4.0
     *
     * @param int $postId
     * @param int $pageSize
     * @param int $targetPage
     */
    public function __construct(Int $commentId, Int $pageSize = 10, Int $targetPage = 1)
    {
        $this->comment_id = $commentId;
        $this->page_size = $pageSize;
        $this->target_page = $targetPage;
        $this->child_id_list = $this->get_child_id_list();
        $this->comments_count = $this->get_child_comments_count();
        $this->calculate();
        $this->comments_array = $this->get_child_comments();
    }

    /**
     * Get id of all `children` and `grandchildren` and `grandgrandchildren`
     * and so on of a comment
     * @since 4.0
     *
     * @return array
     */
    private function get_child_id_list()
    {
        $child_id_list = array();
        $child_id_list = $this->push_child_id($child_id_list, $this->comment_id);

        return array_map('intval', $child_id_list);
    }

    /**
     * SQL query for the child id
     * @since 4.0
     *
     * @return array
     */
    private function push_child_id($child_id_list, $comment_id)
    {

        global $wpdb;

        $query = $wpdb->prepare(
            "SELECT comment_ID FROM {$wpdb->comments}
              WHERE comment_parent = %d
              AND comment_approved = %d
          ", $comment_id, 1
        );

        $child_array = $wpdb->get_col($query);

        if (!empty($child_array)) {

            $child_id_list = array_merge($child_id_list, $child_array);

            foreach ($child_array as $child_comment_id) {
                $this->push_child_id($child_id_list, $child_comment_id);
            }

        }

        return $child_id_list;
    }

    /**
     * counter for the child_id_list array
     * @since 4.0
     *
     * @return int
     */
    private function get_child_comments_count()
    {
        return count($this->child_id_list);
    }

    /**
     * Get comment by WP_Comment_Query
     * @since 4.0
     *
     * @return array
     */
    private function get_child_comments()
    {
        $args = array(
            'comment__in' => $this->child_id_list,
            'orderby' => 'comment_ID',
            'order' => 'ASC',
            'number' => $this->number,
            'offset' => $this->offset,
        );
        // TODO: we can also make a top rated comments list by order by a 'meta_key'

        $comments_query = new WP_Comment_Query;
        $comments = $comments_query->query($args);
        return $comments;
    }
}

// $test = new GetCommentChildList(26, 5, 2);
// var_dump($test->comments_array);
