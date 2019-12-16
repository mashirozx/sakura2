<?php
# Silence is golden.

if (!is_admin() && $_SERVER['REQUEST_URI'] != '/graphql' && false) {
    echo '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:9999">';
    // Start

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
            'walker' => new Sakura\Classes\Sakura_Walker_Nav_Menu,
            'theme_location' => '',
        )
    );

    echo $nav;

    // End
    echo '</div>';
}
