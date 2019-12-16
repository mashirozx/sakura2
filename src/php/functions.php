<?php

/**
 * Author: Mashiro
 * URL: https://2heng.xin
 * GitHub: https://github.com/mashirozx
 *
 * Made in China.
 */

/*------------------------------------*\
Define Global Constants
\*------------------------------------*/

define('SAKURA_VERSION', wp_get_theme()->get('Version'));
define('SAKURA_DEBUG', false);

/*------------------------------------*\
External Modules
\*------------------------------------*/

require_once __DIR__ . '/../includes/vendor/autoload.php';

require_once 'classes/lib/ip-location-qqwary.php';

require_once 'classes/sakura-register-actions.php';
require_once 'classes/sakura-walker-nav-menu.php';
require_once 'classes/sakura-error.php';
require_once 'classes/graphql-register-types.php';
require_once 'classes/graphql-register-fields.php';
require_once 'classes/graphql-register-mutate.php';
require_once 'classes/get-ip-location.php';
require_once 'classes/get-user-agent.php';
require_once 'classes/get-comment-list.php';
require_once 'classes/get-comment-child-list.php';
require_once 'classes/comments-post-handle.php';

require_once 'utils/sakura-functions.php';
require_once 'utils/sakura-tools.php';
require_once 'utils/sakura-admin.php';
require_once 'utils/sakura-debug.php';
require_once 'utils/redux-config.php';
require_once 'utils/redux-demo-config.php';
require_once 'utils/disable-wp-emoji.php';

/*------------------------------------*\
Register
\*------------------------------------*/

$sakura_glowbal_actions = new Sakura\Classes\RegisterActions();
$graphql_register_types = new Sakura\Classes\GraphqlRegisterTypes();
$grapgql_register_fields = new Sakura\Classes\GraphqlRegisterFields();
$grapgql_register_mutate = new Sakura\Classes\GraphqlRegisterMutate();

if (!isset($content_width)) {
    $content_width = 900;
}

/*------------------------------------*\
Functions
\*------------------------------------*/

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes, true);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

// Remove the width and height attributes from inserted images
function remove_width_attribute($html)
{
    $html = preg_replace('/(width|height)="\d*"\s/', "", $html);
    return $html;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar')) {
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => esc_html('Widget Area 1', 'html5blank'),
        'description' => esc_html('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-1',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => esc_html('Widget Area 2', 'html5blank'),
        'description' => esc_html('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-2',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));
}

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;

    if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
        remove_action('wp_head', array(
            $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
            'recent_comments_style',
        ));
    }
}

// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions($html)
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', '', $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function html5blankgravatar($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = 'Custom Gravatar';
    return $avatar_defaults;
}

/*------------------------------------*\
Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions

// add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments

add_action('init', 'create_post_type_html5'); // Add our HTML5 Blank Custom Post Type
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'html5blankgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter( 'nav_menu_css_class', 'my_css_attributes_filter', 100, 1 ); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter( 'nav_menu_item_id', 'my_css_attributes_filter', 100, 1 ); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter( 'page_css_class', 'my_css_attributes_filter', 100, 1 ); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('post_thumbnail_html', 'remove_width_attribute', 10); // Remove width and height dynamic attributes to post images
add_filter('image_send_to_editor', 'remove_width_attribute', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether

// Shortcodes
add_shortcode('html5_shortcode_demo', 'html5_shortcode_demo'); // You can place [html5_shortcode_demo] in Pages, Posts now.
add_shortcode('html5_shortcode_demo_2', 'html5_shortcode_demo_2'); // Place [html5_shortcode_demo_2] in Pages, Posts now.

// Shortcodes above would be nested like this -
// [html5_shortcode_demo] [html5_shortcode_demo_2] Here's the page title! [/html5_shortcode_demo_2] [/html5_shortcode_demo]

/*------------------------------------*\
Custom Post Types
\*------------------------------------*/

// Create 1 Custom Post type for a Demo, called HTML5-Blank
function create_post_type_html5()
{
    register_taxonomy_for_object_type('category', 'html5-blank'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'html5-blank');
    register_post_type('html5-blank', // Register Custom Post Type
        array(
            'labels' => array(
                'name' => esc_html('HTML5 Blank Custom Post', 'html5blank'), // Rename these to suit
                'singular_name' => esc_html('HTML5 Blank Custom Post', 'html5blank'),
                'add_new' => esc_html('Add New', 'html5blank'),
                'add_new_item' => esc_html('Add New HTML5 Blank Custom Post', 'html5blank'),
                'edit' => esc_html('Edit', 'html5blank'),
                'edit_item' => esc_html('Edit HTML5 Blank Custom Post', 'html5blank'),
                'new_item' => esc_html('New HTML5 Blank Custom Post', 'html5blank'),
                'view' => esc_html('View HTML5 Blank Custom Post', 'html5blank'),
                'view_item' => esc_html('View HTML5 Blank Custom Post', 'html5blank'),
                'search_items' => esc_html('Search HTML5 Blank Custom Post', 'html5blank'),
                'not_found' => esc_html('No HTML5 Blank Custom Posts found', 'html5blank'),
                'not_found_in_trash' => esc_html('No HTML5 Blank Custom Posts found in Trash', 'html5blank'),
            ),
            'public' => true,
            'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
            'has_archive' => true,
            'supports' => array(
                'title',
                'editor',
                'excerpt',
                'thumbnail',
            ), // Go to Dashboard Custom HTML5 Blank post for supports
            'can_export' => true, // Allows export in Tools > Export
            'taxonomies' => array(
                'post_tag',
                'category',
            ), // Add Category and Post Tags support
        ));
}

/*------------------------------------*\
ShortCode Functions
\*------------------------------------*/

// Shortcode Demo with Nested Capability
function html5_shortcode_demo($atts, $content = null)
{
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}

// Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.
function html5_shortcode_demo_2($atts, $content = null)
{
    return '<h2>' . $content . '</h2>';
}
