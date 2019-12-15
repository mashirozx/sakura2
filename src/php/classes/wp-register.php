<?php

namespace Sakura\Classes;

use PHPHtmlParser\Dom;

class Register
{
    /**
     * WP Register
     * @since 4.0.0
     */
    public function __construct()
    {
        // Add theme support
        add_action('init', [$this, 'add_theme_support']);
        // Add Custom Scripts to wp_head
        add_action('wp_enqueue_scripts', [$this, 'sakura_header_scripts']);
        // Add Theme Stylesheet
        add_action('wp_enqueue_scripts', [$this, 'sakura_styles']);
        // Add Menu Support
        add_action('init', [$this, 'register_menu']);
    }

    /**
     * Register Navigation
     * @since 4.0.0
     */
    public static function register_menu()
    {
        register_nav_menus(array(
            'drawer-menu' => esc_html('Drawer Menu (on the right side)', 'sakura'),
            'header-menu' => esc_html('Header Menu (on the top bar)', 'sakura'),
        ));
    }

    /**
     * Custom nav menu
     */
    public static function get_drawer_nav_menu()
    {
        $menu_name = 'header-menu';
        $locations = get_nav_menu_locations();
        $menu_id = $locations[$menu_name];
        // wp_get_nav_menu_object($menu_id);
        $nav = wp_nav_menu(
            array(
                'menu' => $menu_id,
                'container' => 'div',
                'container_class' => '',
                'container_id' => '',
                'menu_class' => 'menu',
                'menu_id' => '',
                'echo' => false,
                'fallback_cb' => 'wp_page_menu',
                'before' => '',
                'after' => '',
                'link_before' => '',
                'link_after' => '',
                'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'item_spacing' => 'preserve',
                'depth' => 0,
                'walker' => '',
                'theme_location' => '',
            )
        );

        $dom = new Dom;
        $dom->load($nav);

        $nav = '';

        foreach ($dom->find('a') as $a) {
            $url = $a->getAttribute('href');
            preg_match('/\[(.*?)\](.*)/i', $a->text, $matches, PREG_UNMATCHED_AS_NULL);
            $icon = $matches[1];
            $label = $matches[2];
            $nav .= '<a class="mdc-list-item drawer-items" href="' . $url . '">';
            $nav .= '<i class="material-icons mdc-list-item__graphic">' . $icon . '</i>';
            $nav .= '<span class="mdc-list-item__text">' . $label . '</span>';
            $nav .= '</a>';
        }
        return $nav;
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
     * Get webpack manifest file
     * @since 4.0.0
     *
     * @return string
     */
    public static function MANIFEST()
    {
        return json_decode(file_get_contents(__DIR__ . "/../manifest.json"), true);
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
            // Scripts minify
            wp_register_script('bundle-js', get_template_directory_uri() . join_paths('/', self::MANIFEST()['main']['js'][0]), array(), '1.0.0');
            // Enqueue Scripts
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
        wp_register_style('MaterialIcons', 'https://fonts.googleapis.com/icon?family=Material+Icons', array(), '1.0');
        wp_enqueue_style('MaterialIcons');
        wp_register_style('SakuraIcons', 'https://at.alicdn.com/t/font_679578_9p0ydgvimss.css', array(), '1.0');
        wp_enqueue_style('SakuraIcons');

        // Custom CSS
        wp_register_style('sakura_style', get_template_directory_uri() . join_paths('/', self::MANIFEST()['main']['css'][0]), array(), '1.0');
        // Register CSS
        wp_enqueue_style('sakura_style');
    }

}
