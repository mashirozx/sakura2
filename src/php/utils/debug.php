<?php

// write_log('THIS IS THE START OF MY CUSTOM DEBUG');
/**
 * play here
 */
# Silence is golden.
use Sakura\Classes\CommentsPostHandle;
if (!is_admin()) {

    $commentdata = array(
        // wp_handle_comment_submission()
        'comment_post_ID' => 1,
        'author' => 'testtt',
        'email' => 'geanguanzx@gmail.com',
        'url' => 'htpps://2heng.xin',
        'comment' => 'nonce test 12sdafsa',
        'comment_parent' => 0,
        '_wp_unfiltered_html_comment' => '92646303hg',
    );

    // // wp_insert_comment($commentdata);

    // // $ajax_nonce = wp_create_nonce( "wpdocs-special-string" );
    // // echo $ajax_nonce;

    // var_dump(CommentsPostHandle::get_comment($commentdata));
}
