<?php

class GetCommentParentRoot
{
    /**
     * the post id
     *
     * @var int
     */
    public $post_id;

    /**
     * how many items in a page
     *
     * @var int
     */
    public $page_size;

    /**
     * the target page
     *
     * @var int
     */
    public $target_page;

    /**
     * total page number
     *
     * @var int
     */
    public $total_page;

    /**
     * the comment detail array
     *
     * @var array
     */
    public $comment_aray;

    /**
     * ConnectionResolver constructor.
     *
     * @param int $postId
     * @param int $pageSize
     * @param int $targetPage
     */
    public function __construct(Int $postId, Int $pageSize = 10, Int $targetPage = 1)
    {
        $this->post_id = $postId;
        $this->page_size = $pageSize;
        $this->target_page = $targetPage;
    }

    public function get_post_comment()
    {
        global $wpdb;

        $query = $wpdb->prepare(
            "SELECT * FROM {$wpdb->comments}
                WHERE comment_post_ID = %d
                AND comment_approved = %d
                AND comment_parent = %d
            ", $this->post_id, 1, 0
        );

        $comments = $wpdb->get_results($query);
        return $comments;
    }
}

$test = new GetCommentParentRoot(1);
var_dump($test->get_post_comment());
