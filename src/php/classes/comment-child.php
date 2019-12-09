<?php
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
        $this->preview_list = $this->get_the_child_preview($this->id_list);
        return $this->preview_list;
    }

    public function get_detail_list()
    {
        $this->detail_list = $this->get_the_detail_list($this->id_list);
        return $this->detail_list;
    }

    private function get_the_detail_list()
    {
        $child_generic = $this->get_the_child_generic($this->comment_ID);

        $this->child_amount = count($child_generic);

        $this->page_size = $this->page_size ? $this->page_size : $this->child_amount;

        if ($this->child_amount == 0) {
            return array(
                'page_size' => 0,
                'target_page' => 0,
                'page_count' => 0,
                'child_amount' => 0,
                'detail_list' => array(),
            );
        } elseif ($this->child_amount % $this->page_size == 0) {
            $this->page_count = $this->child_amount / $this->page_size;
        } else {
            $this->page_count = intval($this->child_amount / $this->page_size) + 1;
        }

        $this->target_page = $this->target_page ? $this->target_page : 1;

        $detail = array();

        $start_cursor = $this->page_size * ($this->target_page - 1);

        if (($this->child_amount - $start_cursor) < $this->page_size) {
            $end_cursor = $this->child_amount - $start_cursor;
        } else {
            $end_cursor = $start_cursor + $this->page_size;
        }

        for ($cursor = $start_cursor; $cursor < $end_cursor; $cursor++) {
            $each = $child_generic[$cursor];
            $detail[] = array(
                // 'cursor' => $cursor,
                'id' => $each->comment_ID,
                'parent' => $each->comment_parent,
                'name' => $each->comment_author,
                'avatar' => get_avatar_url($each->comment_author_email),
                'url' => $each->comment_author_url,
                'content' => get_comment_text($each->comment_ID),
                'date' => get_comment_date('', $each->comment_ID),
                'ua' => 'Chrome 70 Windows 10',
                'location' => 'Shanghai, China',
                'level' => 6,
                'role' => 9,
                'like' => 100,
                'dislike' => 10,
            );
        }

        return array(
            'page_size' => $this->page_size,
            'target_page' => $this->target_page,
            'page_count' => $this->page_count,
            'child_amount' => $this->child_amount,
            'detail_list' => $detail,
        );
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
