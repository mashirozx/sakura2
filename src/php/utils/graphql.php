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
                // How to return a list in WPGraphQL?
                'child' => json_encode($comment_child->get_id_list()),
                'childPre' => json_encode($comment_child->get_preview_list()),
            ];
        },
    ]);
}

/**
 * Add CommentBy field
 * @since 4.0
 */
add_action('graphql_register_types', 'register_comment_by_type');

function register_comment_by_type()
{
    register_graphql_object_type('commentBy', [
        'description' => __("Get the comment by its database ID", 'sakura'),
        'fields' => [
            'commentId' => [
                'type' => 'Integer',
                'description' => __('The database id of the comment', 'sakura'),
            ],
        ],
    ]);

    register_graphql_object_type('childDetail', [
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
            'childAmount' => [
                'type' => 'Integer',
                'description' => __('How many child comments in total?', 'sakura'),
            ],
            'detailList' => [
                'type' => 'String',
                'description' => __('The child comment detail list of the comment', 'sakura'),
            ],
        ],
    ]);
}

add_action('graphql_register_types', 'register_comment_by_field');

function register_comment_by_field()
{

    register_graphql_field('RootQuery', 'commentBy', [
        'description' => __('Get comment by database ID', 'sakura'),
        'type' => 'commentBy',
        'args' => [
            'commentId' => [
                'type' => 'Int',
                'description' => __('Get the comment by its database ID', 'sakura'),
            ],
        ],
        'resolve' => function ($source, array $args, $context, $info) {
            return [
                'commentId' => $args['commentId'],
            ];

        },
    ]);

    register_graphql_field('commentBy', 'childDetail', [
        'description' => __('Get child detail list', 'sakura'),
        'type' => 'childDetail',
        'args' => [
            // TODO: how to pass args from parent field?
            'commentId' => [
                'type' => 'Int',
                'description' => __('Get the comment by its database ID', 'sakura'),
            ],
            'pageSize' => [
                'type' => 'Int',
                'description' => __('Get the comment by its database ID', 'sakura'),
            ],
            'targetPage' => [
                'type' => 'Int',
                'description' => __('Get the comment by its database ID', 'sakura'),
            ],
        ],
        'resolve' => function ($source, array $args, $context, $info) {
            $comment_ID = $args['commentId'];
            $pageSize = !empty($args['pageSize']) ? $args['pageSize'] : null;
            $targetPage = !empty($args['targetPage']) ? $args['targetPage'] : null;
            $comment_child = new CommentChild($comment_ID, $pageSize, $targetPage);
            $detail = $comment_child->get_detail_list();
            return [
                'pageSize' => $detail['page_size'],
                'targetPage' => $detail['target_page'],
                'pageCount' => $detail['page_count'],
                'childAmount' => $detail['child_amount'],
                'detailList' => json_encode($detail['detail_list']),
            ];

        },
    ]);

}
