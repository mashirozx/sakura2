<?php

namespace Sakura\Classes;

class RegisterActions
{
    /**
     * WP Register
     * @since 4.0.0
     */
    public function __construct()
    {
        // Add Universal Theme Support
        add_action('init', [$this, 'add_theme_support']);
        // Add Custom Scripts to wp_head
        add_action('wp_enqueue_scripts', [$this, 'sakura_header_scripts']);
        // Add Theme Stylesheet
        add_action('wp_enqueue_scripts', [$this, 'sakura_styles']);
        // Add Menu Support
        add_action('init', [$this, 'register_menu']);
        // Add Pagination Support
        // add_action('init', [$this, 'sakura_pagination']);
        // Add 'View Article' button instead of [...] for Excerpts
        // add_filter('excerpt_more', [$this, 'sakura_view_article']);
        // Remove Admin bar
        add_filter('show_admin_bar', [$this, 'remove_admin_bar']);
    }

    /**
     * Register Navigation
     * @since 4.0.0
     */
    public static function register_menu()
    {
        register_nav_menus(array(
            'drawer-menu' => esc_html('Drawer Menu (show on mobile, and not support sub-items)', 'sakura'),
            'header-menu' => esc_html('Header Menu (show on desktap)', 'sakura'),
            'header-sub-menu' => esc_html('Header Sub Menu (show on desktap)', 'sakura'),
            'notice' => __('How to set your menus? <a href="https://www.google/com" target="_blank">Read this</a>.', 'sakura'),
        ));
    }

    /**
     * Add theme support
     * @since 4.0.0
     */
    public static function add_theme_support()
    {
        if (function_exists('add_theme_support')) {

            // Add Thumbnail Theme Support.
            add_theme_support('post-thumbnails');
            add_image_size('large', 700, '', true); // Large Thumbnail.
            add_image_size('medium', 250, '', true); // Medium Thumbnail.
            add_image_size('small', 120, '', true); // Small Thumbnail.
            add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');

            // Add Support for Custom Backgrounds - Uncomment below if you're going to use.
            /*add_theme_support('custom-background', array(
            'default-color' => 'FFF',
            'default-image' => get_template_directory_uri() . '/img/bg.jpg'
            ));*/

            // Add Support for Custom Header - Uncomment below if you're going to use.
            /*add_theme_support('custom-header', array(
            'default-image'          => get_template_directory_uri() . '/img/headers/default.jpg',
            'header-text'            => false,
            'default-text-color'     => '000',
            'width'                  => 1000,
            'height'                 => 198,
            'random-default'         => false,
            'wp-head-callback'       => $wphead_cb,
            'admin-head-callback'    => $adminhead_cb,
            'admin-preview-callback' => $adminpreview_cb
            ));*/

            // Enables post and comment RSS feed links to head.
            add_theme_support('automatic-feed-links');

            // Enable HTML5 support.
            add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption'));

            // Localisation Support.
            load_theme_textdomain('sakura', get_template_directory() . '/languages');
        }
    }

    /**
     * Load scripts (header.php)
     * @since 4.0.0
     */
    public static function sakura_header_scripts()
    {
        if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {
            // Remove jQuery
            wp_deregister_script('jquery');

            wp_register_script('bundle-js', get_template_directory_uri() . join_paths('/', MANIFEST()['main']['js'][0]), array(), SAKURA_VERSION);
            wp_enqueue_script('bundle-js');
        }
    }

    /**
     * Load styles
     * @since 4.0.0
     */
    public static function sakura_styles()
    {
        // TODO add options!
        wp_deregister_style('wp-block-library'); // Gutenberg CSS

        // Icon fonts
        wp_register_style('MaterialIcons', 'https://fonts.googleapis.com/icon?family=Material+Icons', array(), SAKURA_VERSION);
        wp_enqueue_style('MaterialIcons');

        wp_register_style('SakuraIcons', 'https://at.alicdn.com/t/font_679578_9p0ydgvimss.css', array(), SAKURA_VERSION);
        wp_enqueue_style('SakuraIcons');

        wp_register_style('FontAwesome', 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css', array(), SAKURA_VERSION);
        wp_enqueue_style('FontAwesome');

        // Custom CSS
        wp_register_style('sakura_style', get_template_directory_uri() . join_paths('/', MANIFEST()['main']['css'][0]), array(), SAKURA_VERSION);
        // Register CSS
        wp_enqueue_style('sakura_style');
    }

    /**
     * Custom View Article link to Post
     */
    public static function sakura_view_article($more)
    {
        global $post;
        return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . esc_html_e('View Article', 'sakura') . '</a>';
    }

    /**
     * Remove Admin bar
     */
    public static function remove_admin_bar()
    {
        return false;
    }

}
