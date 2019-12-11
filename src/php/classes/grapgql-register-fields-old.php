<?php
register_graphql_field('Comment', 'mate', [
    'description' => __('The comment mate', 'sakura'),
    'type' => 'CommentMate',
    'resolve' => function (\WPGraphQL\Model\Comment $comment, $args, $depth) {
        $comment_ID = $comment->commentId;
        $comment_child = new GetCommentChild($comment_ID);
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
        // look here: https://github.com/wp-graphql/wp-graphql/blob/2fe8ba8e18b89e824376e76119065ef2ff9aaef2/src/Data/Connection/CommentConnectionResolver.php#L126
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
        $comment_child = new GetCommentChild($comment_ID, $pageSize, $targetPage);
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
