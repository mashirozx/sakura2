<?php

namespace Sakura\Classes;

use Sakura\Classes\GetCommentList;
use Sakura\Classes\GetCommentChildList;
use WPGraphQL\Data\DataSource;

class GraphqlRegisterFields
{

    public function __construct()
    {
        add_action('graphql_register_types', array($this, 'register_demo_field'), 10);
        add_action('graphql_register_types', array($this, 'register_comment_list_field'), 10);
        add_action('graphql_register_types', array($this, 'register_comment_child_field'), 10);
        // add_action('graphql_register_types', array($this, 'register_comment_mate_field'), 10);
        // add_action('graphql_register_types', array($this, 'register_connections'), 10);
    }

    /**
     * a simple demo
     * @since 4.0
     */
    public static function register_demo_field() {

        register_graphql_object_type( 'Sakura', [
            'description' => __( "wow, a wonderful wordpress theme", 'sakrua' ),
            'fields' => [
              'name' => [
                  'type' => 'String',
                  'description' => __( 'The name of the theme', 'sakrua' ),
              ],
              'author' => [
                  'type' => 'String',
                  'description' => __( 'The author of the theme', 'sakrua' ),
              ],
              'version' => [
                  'type' => 'String',
                  'description' => __( 'The version of the theme', 'sakrua' ),
              ],
            ],
          ] );

        register_graphql_field( 'RootQuery', 'getTheme', [
          'description' => __( 'Get a theme', 'sakrua' ),
          'type' => 'Sakura',
          'resolve' => function() {

            return [
                'name' => 'Sakura',
                'author' => 'Mashiro',
                'version' => wp_get_theme()->get('Version'),
            ];
    
          }
        ] );
    
    }

    /**
     * register a child list field
     * @since 4.0
     */
    public static function register_comment_child_field()
    {
        register_graphql_field('RootQuery', 'commentChildListById', [
            'description' => __('Get comment child by database ID', 'sakura'),
            'type' => 'commentList',
            'args' => [
                'commentId' => [
                    'type' => 'Int',
                    'description' => __('Get the comment by its database ID', 'sakura'),
                ],
                'pageSize' => [
                    'type' => 'Int',
                    'description' => __('How many comments to show in a page?', 'sakura'),
                ],
                'targetPage' => [
                    'type' => 'Int',
                    'description' => __('Which page of comments your want?', 'sakura'),
                ],
            ],
            'resolve' => function ($source, $args, $context, $info) {
                $comment_child = new GetCommentChildList($args['commentId'], $args['pageSize'], $args['targetPage']);
                return [
                    'id' => $comment_child->comment_id,
                    'pageSize' => $comment_child->page_size,
                    'totalPage' => $comment_child->total_page,
                    'targetPage' => $comment_child->target_page,
                    'comments' => json_encode($comment_child->get_comments_formed_array(), JSON_UNESCAPED_UNICODE),
                ];

            },
        ]);
    }

    /**
     * register a post comment list by postId field by
     * @since 4.0
     */
    public static function register_comment_list_field()
    {
        /**
         * query by comment id in root query
         * @since 4.0
         */
        register_graphql_field('RootQuery', 'commentListById', [
            'description' => __('Get comment child by database ID', 'sakura'),
            'type' => 'commentList',
            'args' => [
                'postId' => [
                    'type' => 'Int',
                    'description' => __('Get the comment by post database ID', 'sakura'),
                ],
                'pageSize' => [
                    'type' => 'Int',
                    'description' => __('How many comments to show in a page?', 'sakura'),
                ],
                'targetPage' => [
                    'type' => 'Int',
                    'description' => __('Which page of comments your want?', 'sakura'),
                ],
            ],
            'resolve' => function ($source, $args, $context, $info) {
                $comment_child = new GetCommentList($args['postId'], $args['pageSize'], $args['targetPage']);
                return [
                    'id' => $comment_child->postId,
                    'pageSize' => $comment_child->page_size,
                    'totalPage' => $comment_child->total_page,
                    'targetPage' => $comment_child->target_page,
                    'comments' => json_encode($comment_child->get_comments_formed_array(), JSON_UNESCAPED_UNICODE),
                ];

            },
        ]);
    }

    /**
     * Register connections to Comments
     *
     * @access public
     */
    public static function register_connections()
    {
        /**
         * Register connection from RootQuery to Comments
         */
        register_graphql_connection(self::get_connection_config());

        /**
         * Register connection from Comment to children comments
         */
        register_graphql_connection(
            self::get_connection_config(
                [
                    'fromType' => 'commentByCommentId',
                    'fromFieldName' => 'children',
                ]
            )
        );
    }

    /**
     * Given an array of $args, this returns the connection config, merging the provided args
     * with the defaults
     *
     * @access public
     *
     * @param array $args
     *
     * @return array
     */
    public static function get_connection_config($args = [])
    {
        $defaults = [
            'fromType' => 'RootQuery',
            'toType' => 'commentItem',
            'fromFieldName' => 'commentByCommentId',
            'connectionArgs' => self::get_connection_args(),
            'resolveNode' => function ($id, $args, $context, $info) {
                return DataSource::resolve_comment($id, $context);
            },
            'resolve' => function ($root, $args, $context, $info) {
                return DataSource::resolve_comments_connection($root, $args, $context, $info);
            },
        ];
        return array_merge($defaults, $args);
    }

    /**
     * This returns the connection args for the Comment connection
     *
     * @access public
     * @return array
     */
    public static function get_connection_args()
    {
        return [
            'commentId' => [
                'type' => 'Integer',
                'description' => __('The database id of the comment.', 'wp-graphql'),
            ],
        ];
    }

}
