<?php

/**
 * Get webpack manifest file
 * @since 4.0.0
 *
 * @return string
 */
function MANIFEST()
{
    return json_decode(file_get_contents(__DIR__ . "/../manifest.json"), true);
}

/**
 * Get theme options
 * @since 4.0
 *
 * @param string $id
 * @throw Exception
 * @return mixed string|int|boolen|null
 */
function sakura_options(string $id)
{
    if (!array_key_exists('redux_init', $GLOBALS)) {
        $GLOBALS['redux_init'] = true;
        if (class_exists('Redux')) {
            Redux::init('sakura_options');
        } else {
            throw new Exception(__('Undecleared class: Redux. Please install and activate plugin', 'sakura') . ' <a href="https://cn.wordpress.org/plugins/redux-framework/">Redux Framework</a>');
        }
    }
    global $sakura_options;
    return $sakura_options[$id];
}

/**
 * Custom drawer nav menu
 */
function get_drawer_nav_menu()
{
    $menu_name = 'drawer-menu';
    $locations = get_nav_menu_locations();
    $menu_id = $locations[$menu_name];
    // wp_get_nav_menu_object($menu_id);
    $nav = wp_nav_menu(
        array(
            'menu' => $menu_id,
            'depth' => 1,
            'items_wrap' => '<nav id="draver-nav-list" data-id="%1$s" class="mdc-list %2$s">%3$s</nav>',
            'walker' => new Sakura\Classes\Sakura_Walker_Drawer_Nav_Menu,
            'echo' => false,
        )
    );

    return $nav;
}

/**
 * Custom site header nav menu
 */
function get_header_nav_menu()
{
    $menu_name = 'header-menu';
    $locations = get_nav_menu_locations();
    $menu_id = $locations[$menu_name];
    // wp_get_nav_menu_object($menu_id);
    $nav = wp_nav_menu(
        array(
            'menu' => $menu_id,
            'depth' => 2,
            'echo' => false,
            'menu_class' => 'header-menu',
            'menu_id' => 'header-menu',
            'walker' => new Sakura\Classes\Sakura_Walker_Header_Nav_Menu,
        )
    );

    return $nav;
}

/**
 * Create 20 Word Callback for Index page Excerpts,
 * call using sakura_wp_excerpt('sakura_wp_index');
 */
function sakura_wp_index($length)
{
    return 20;
}

/**
 * Create 40 Word Callback for Custom Post Excerpts,
 * call using sakura_wp_excerpt('sakura_wp_custom_post');
 */
function sakura_wp_custom_post($length)
{
    return 40;
}

/**
 * Create the Custom Excerpts callback
 */
function sakura_wp_excerpt($length_callback = '', $more_callback = '')
{
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    echo esc_html($output);
}

/**
 * Default post thumbnail
 */
function get_post_thumb_url($size)
{
    // TODO: full sizes of sizes
    $default = "https://view.moezx.cc/images/2019/10/21/5e65o9lxtbvht2tdjvpgsmarw.jpg";
    return has_post_thumbnail() ? get_the_post_thumbnail_url(get_the_ID(), $size) : $default;
}

/**
 * Pagination for paged posts
 * @since 4.0.0
 */
function sakura_pagination()
{
    global $wp_query;
    $big = 999999999;
    return paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages,
        // 'type' => 'array',
    ));
}
