<?php

namespace Sakura\Classes;

use Sakura\Classes\GetIpLocation;
use Sakura\Classes\GetCommentChildList;
use WP_Comment_Query;

class GetCommentList
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
     * the comments count
     *
     * @var array
     */
    public $comments_count;

    /**
     * the comment detail array
     *
     * @var array
     */
    public $comments_array;

    /**
     * the comment offset (WP_Comment_Query parameter)
     *
     * @var array
     */
    public $offset;

    /**
     * the comment number of output (WP_Comment_Query parameter)
     *
     * @var array
     */
    public $number;

    /**
     * the post id
     *
     * @var bool
     */
    public $show_preview;

    /**
     * ConnectionResolver constructor.
     * @since 4.0
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
        $this->show_preview = true;
        $this->comments_count = $this->get_post_comments_count();
        $this->calculate();
        $this->comments_array = $this->get_post_comments();
    }

    /**
     * get the formed comment detail array
     *
     * @return array
     */
    public function get_comments_formed_array()
    {
        $comments_formed_array = [];
        $comments_array = $this->comments_array;
        foreach ($comments_array as $comment_array) {
            $role = $comment_array->user_id ? get_userdata($comment_array->user_id)->roles : 'visitor';
            $like = get_comment_meta($comment_array->comment_ID, 'like', false);
            $dislike = get_comment_meta($comment_array->comment_ID, 'dislike', false);
            $comment_formed_array = array(
                'comment_ID' => intval($comment_array->comment_ID),
                'comment_parent' => intval($comment_array->comment_parent),
                'comment_author' => $comment_array->comment_author,
                'comment_author_avatar' => get_avatar_url($comment_array->comment_author_email),
                'url' => $comment_array->comment_author_url,
                'content' => $comment_array->comment_content,
                'date' => $comment_array->comment_date,
                'ua' => GetUserAgent::get_html($comment_array->comment_agent),
                'location' => GetIpLocation::get_location($comment_array->comment_author_IP, 'geoip2'),
                'level' => 6,
                'role' => $role,
                'like' => $like ? $like : 0,
                'dislike' => $dislike ? $dislike : 0,
            );

            if ($this->show_preview) {
                $preview = new GetCommentChildList($comment_array->comment_ID, 3, 1);
                $preview_list = $preview->get_comments_formed_array();
                $comment_formed_array['preview'] = $preview_list;
            }

            array_push($comments_formed_array, $comment_formed_array);
        }

        return $comments_formed_array;
    }

    /**
     * Get comment count by $wpdb query, use WP_Comment_Query to get detail data.
     * But will this low down the performance?
     * @since 4.0
     *
     * @return array
     */
    public function get_post_comments_count()
    {
        global $wpdb;

        $query = $wpdb->prepare(
            "SELECT COUNT(*) FROM {$wpdb->comments}
                WHERE comment_post_ID = %d
                AND comment_approved = %d
                AND comment_parent = %d
            ", $this->post_id, 1, 0
        );

        $count = $wpdb->get_var($query);
        return $count;
    }

    /**
     * calculate page offset and number
     * @since 4.0
     *
     * @return void
     */
    public function calculate()
    {
        $post_id = $this->post_id;
        $page_size = $this->page_size;
        $target_page = $this->target_page;
        $comments_count = $this->comments_count;

        if ($comments_count % $page_size == 0) {
            $total_page = $comments_count / $page_size;
        } else {
            $total_page = intval($comments_count / $page_size) + 1;
        }

        if ($target_page >= $total_page && $comments_count % $page_size != 0) {
            $target_page = $total_page;
            $number = $comments_count % $page_size;
        } else {
            $number = $page_size;
        }

        $offset = $page_size * ($target_page - 1);

        $this->total_page = $total_page;
        $this->offset = $offset;
        $this->number = $number;

        return;
    }

    /**
     * Get comment by WP_Comment_Query
     * @since 4.0
     *
     * @return array
     */
    public function get_post_comments()
    {
        $args = array(
            'post_id' => $this->post_id,
            'parent' => 0,
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
