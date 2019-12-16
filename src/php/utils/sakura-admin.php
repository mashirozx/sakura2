<?php
/**
 * Add stylesheets to wp-admin
 * @since 4.0.0
 */
function admin_style_init()
{
    wp_register_style('admin-font-awesome', 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css', array(), SAKURA_VERSION);
    wp_enqueue_style('admin-font-awesome');
}
add_action('admin_enqueue_scripts', 'admin_style_init');
