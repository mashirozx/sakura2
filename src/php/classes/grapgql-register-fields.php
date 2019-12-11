<?php
class GraphqlRegisterFields
{

    public function __construct()
    {

        add_action('graphql_register_types', array($this, 'register_comment_mate_field'), 10);
    }

    public static function register_comment_mate_field()
    {
        /**
         * query by comment id in root query
         * @since 4.0
         */
        register_graphql_field('RootQuery', 'commentByCommentId', [
            'description' => __('Get comment by database ID', 'sakura'),
            'type' => 'commentByCommentId',
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

    }
}
