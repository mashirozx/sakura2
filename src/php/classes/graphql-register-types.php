<?php
class GraphqlRegisterTypes
{

    public function __construct()
    {
        add_filter('graphql_register_types', array($this, 'register_comment_mate_type'), 10);
    }

    /**
     * register commentMate type
     * @since 4.0
     */
    public static function register_comment_mate_type()
    {
        register_graphql_object_type('commentByPostId', [
            'description' => __("Get the comment by its database ID", 'sakura'),
            'fields' => [
                'postId' => [
                    'type' => 'Integer',
                    'description' => __('The database id of the post', 'sakura'),
                ],
            ],
        ]);

        register_graphql_object_type('commentByCommentId', [
            'description' => __("Get the comment by its database ID", 'sakura'),
            'fields' => [
                'commentId' => [
                    'type' => 'Integer',
                    'description' => __('The database id of the comment', 'sakura'),
                ],
            ],
        ]);

        register_graphql_object_type('commentListItem', [
            'description' => __("Get the comment mate.", 'sakura'),
            'fields' => [
                'authorName' => [
                    'type' => 'String',
                    'description' => __('The name of the comment author', 'sakura'),
                ],
                'authorAvatar' => [
                    'type' => 'String',
                    'description' => __('The avatar of the comment author', 'sakura'),
                ],
                'authorUrl' => [
                    'type' => 'String',
                    'description' => __('The url of the comment author', 'sakura'),
                ],
                'userAgent' => [
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
                'date' => [
                    'type' => 'String',
                    'description' => __('Formated date of the comment', 'sakura'),
                ],
                'content' => [
                    'type' => 'String',
                    'description' => __('Content of the comment', 'sakura'),
                ],
                'childCount' => [
                    'type' => 'String',
                    'description' => __('The children ID of the comment', 'sakura'),
                ],
                'childPreview' => [
                    'type' => 'String',
                    'description' => __('The the first 3 children to show', 'sakura'),
                ],
            ],
        ]);

        register_graphql_object_type('pageNavigation', [
            'description' => __("The child comment detail list of the comment", 'sakura'),
            'fields' => [
                'pageSize' => [
                    'type' => 'Integer',
                    'description' => __('How many children you want in a query?', 'sakura'),
                ],
                'targetPage' => [
                    'type' => 'Integer',
                    'description' => __('Which page you are going to request?', 'sakura'),
                ],
                'pageCount' => [
                    'type' => 'Integer',
                    'description' => __('The total page number', 'sakura'),
                ],
                'childCount' => [
                    'type' => 'Integer',
                    'description' => __('How many child comments in total?', 'sakura'),
                ],
            ],
        ]);
    }
}
