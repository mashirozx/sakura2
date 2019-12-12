<?php

namespace Sakura\Classes;

use Sakura\Classes\CommentsPostHandle;
use Sakura\classes\Error;

class GraphqlRegisterMutate
{

    public function __construct()
    {
        add_action('graphql_register_types', array($this, 'register_post_comment_mutate'), 10);
    }

    /**
     * post new comment
     * @since 4.0
     */
    public static function register_post_comment_mutate()
    {

        # This function registers a mutation to the Schema.
        # The first argument, in this case `exampleMutation`, is the name of the mutation in the Schema
        # The second argument is an array to configure the mutation.
        # The config array accepts 3 key/value pairs for: inputFields, outputFields and mutateAndGetPayload.
        register_graphql_mutation('postComment', [

            # inputFields expects an array of Fields to be used for inputtting values to the mutation
            'inputFields' => [
                'comment_post_ID' => [
                    'type' => 'Int',
                    'description' => __('The ID of the post that relates to the comment.', 'your-textdomain'),
                ],
                'author' => [
                    'type' => 'String',
                    'description' => __('The name of the comment author.', 'your-textdomain'),
                ],
                'email' => [
                    'type' => 'String',
                    'description' => __('The comment author email address.', 'your-textdomain'),
                ],
                'url' => [
                    'type' => 'String',
                    'description' => __('The comment author URL.', 'your-textdomain'),
                ],
                'comment' => [
                    'type' => 'String',
                    'description' => __('The content of the comment.', 'your-textdomain'),
                ],
                'comment_parent' => [
                    'type' => 'Int',
                    'description' => __('The ID of this comment\'s parent, if any. Default 0.', 'your-textdomain'),
                ],
                '_wp_unfiltered_html_comment' => [
                    'type' => 'String',
                    'description' => __('The nonce value for allowing unfiltered HTML.', 'your-textdomain'),
                ],
            ],

            # outputFields expects an array of fields that can be asked for in response to the mutation
            # the resolve function is optional, but can be useful if the mutateAndPayload doesn't return an array
            # with the same key(s) as the outputFields
            'outputFields' => [
                'succeed' => [
                    'type' => 'Boolean',
                    'description' => __('True or false', 'your-textdomain'),
                    'resolve' => function ($payload, $args, $context, $info) {
                        return isset($payload['succeed']) ? $payload['succeed'] : false;
                    },
                ],
                'message' => [
                    'type' => 'String',
                    'description' => __('Message', 'your-textdomain'),
                    'resolve' => function ($payload, $args, $context, $info) {
                        return isset($payload['message']) ? $payload['message'] : null;
                    },
                ],
                // 'comment_ID' => [
                //     'type' => 'Int',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['comment_ID']) ? $payload['comment_ID'] : null;
                //     },
                // ],
                // 'comment_parent' => [
                //     'type' => 'Int',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['comment_parent']) ? $payload['comment_parent'] : null;
                //     },
                // ],
                // 'comment_author' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['comment_author']) ? $payload['comment_author'] : null;
                //     },
                // ],
                // 'comment_author_avatar' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['comment_author_avatar']) ? $payload['comment_author_avatar'] : null;
                //     },
                // ],
                // 'url' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['url']) ? $payload['url'] : null;
                //     },
                // ],
                // 'content' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['content']) ? $payload['content'] : null;
                //     },
                // ],
                // 'date' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['date']) ? $payload['date'] : null;
                //     },
                // ],
                // 'ua' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['ua']) ? $payload['ua'] : null;
                //     },
                // ],
                // 'location' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['location']) ? $payload['location'] : null;
                //     },
                // ],
                // 'level' => [
                //     'type' => 'Int',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['level']) ? $payload['level'] : null;
                //     },
                // ],
                // 'role' => [
                //     'type' => 'String',
                //     'description' => __('You know what.', 'your-textdomain'),
                //     'resolve' => function ($payload, $args, $context, $info) {
                //         return isset($payload['role']) ? $payload['role'] : null;
                //     },
                // ],
            ],

            # mutateAndGetPayload expects a function, and the function gets passed the $input, $context, and $info
            # the function should return enough info for the outputFields to resolve with
            'mutateAndGetPayload' => function ($input, $context, $info) {
                // Do any logic here to sanitize the input, check user capabilities, etc

                Error::log('mutateAndGetPayload');
                $comment_data = $input;
                if (empty($input['_wp_unfiltered_html_comment'])) {
                    $comment_data['_wp_unfiltered_html_comment'] = '';
                }
                try {
                    $comment = CommentsPostHandle::get_comment($comment_data);
                    $succeed = true;
                    $message = 'succeed';
                } catch (Exception $e) {
                    $comment = [];
                    $succeed = false;
                    $message = $e->getMessage();
                    write_log($message);
                }

                return [
                    'succeed' => $succeed,
                    'message' => $message,
                    // 'comment_ID' => $comment->comment_ID,
                    // 'comment_parent' => $comment->comment_parent,
                    // 'comment_author' => $comment->comment_author,
                    // 'comment_author_avatar' => get_avatar_url($comment->comment_author_email),
                    // 'url' => $comment->comment_author_url,
                    // 'content' => $comment->comment_content,
                    // 'date' => $comment->comment_date,
                    // 'ua' => GetUserAgent::get_json($comment->comment_agent),
                    // 'location' => GetIpLocation::get_location($comment->comment_author_IP),
                    // 'level' => 6,
                    // 'role' => $comment->user_id ? get_userdata($comment->user_id)->roles : 'visitor',
                ];
            },
        ]);

    }
}
