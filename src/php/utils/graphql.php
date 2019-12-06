<?php
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
            ];
        },
    ]);

}
