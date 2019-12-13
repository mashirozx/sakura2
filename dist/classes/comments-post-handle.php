<?php

namespace Sakura\Classes;

use Exception;

/**
 * Handle comment post
 * Modify from wp-comments-post.php
 * @since 4.0.0
 *
 * Handles Comment Post to WordPress and prevents duplicate comment posting.
 *
 * https://developer.wordpress.org/reference/files/wp-comments-post.php/
 *
 */
class CommentsPostHandle
{
    /**
     * main
     * @param array $comment_data
     * @return array('comment': WP_Comment, 'succeed': bool, 'message': string)
     */
    public static function get_comment($comment_data)
    {
        $comment = self::handle_comment_submission($comment_data);
        self::set_cookie($comment);
        return $comment;
    }

    /**
     * main
     * @param array $comment_data
     * //@throw Exception
     * @return array('comment': WP_Comment, 'succeed': bool, 'message': string)
     */
    public static function handle_comment_submission($comment_data)
    {
        $comment = wp_handle_comment_submission($comment_data);

        if (is_wp_error($comment)) {
            $data = intval($comment->get_error_data());
            if (!empty($data)) {
                // Error::log('Submission Failure: ' . $comment->get_error_message());
                // throw new Exception(__('Submission Failure: ', 'sakura') . $comment->get_error_message());
                return array(
                    'succeed' => false,
                    'message' => $comment->get_error_message(),
                    'comment' => $comment,
                );
            } else {
                // Error::log('Submission Failure (TYPE: ELSE)');
                // throw new Exception(__('Submission Failure.', 'sakura'));
                return array(
                    'succeed' => false,
                    'message' => __('Submission failure (Unknown Type).', 'sakura'),
                    'comment' => $comment,
                );
            }
        }

        return array(
            'succeed' => true,
            'message' => __('Comment Succeed', 'sakura'),
            'comment' => $comment,
        );
    }

    public static function set_cookie($comment)
    {
        $user = wp_get_current_user($comment);
        $cookies_consent = (isset($_POST['wp-comment-cookies-consent']));

        /**
         * Perform other actions when comment cookies are set.
         *
         * @since 3.4.0
         * @since 4.9.6 The `$cookies_consent` parameter was added.
         *
         * @param WP_Comment $comment         Comment object.
         * @param WP_User    $user            Comment author's user object. The user may not exist.
         * @param boolean    $cookies_consent Comment author's consent to store cookies.
         */
        do_action('set_comment_cookies', $comment, $user, $cookies_consent);
    }
}
