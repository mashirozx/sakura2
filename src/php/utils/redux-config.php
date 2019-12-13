<?php
/**
 * ReduxFramework Barebones Sample Config File
 * For full documentation, please visit: http://docs.reduxframework.com/
 */
if (!class_exists('Redux')) {
    return;
}
// This is your option name where all the Redux data is stored.
$opt_name = "sakura_options";
/**
 * ---> SET ARGUMENTS
 * All the possible arguments for Redux.
 * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
 * */
$theme = wp_get_theme(); // For use with some settings. Not necessary.
$args = array(
    // TYPICAL -> Change these values as you need/desire
    'opt_name' => $opt_name,
    // This is where your data is stored in the database and also becomes your global variable name.
    'display_name' => $theme->get('Name'),
    // Name that appears at the top of your panel
    'display_version' => $theme->get('Version'),
    // Version that appears at the top of your panel
    'menu_type' => 'menu',
    //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
    'allow_sub_menu' => true,
    // Show the sections below the admin menu item or not
    'menu_title' => __('Sakura Options', 'sakura'),
    'page_title' => __('Sakura Options', 'sakura'),
    // You will need to generate a Google API key to use this feature.
    // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
    'google_api_key' => '',
    // Set it you want google fonts to update weekly. A google_api_key value is required.
    'google_update_weekly' => false,
    // Must be defined to add google fonts to the typography module
    'async_typography' => true,
    // Use a asynchronous font on the front end or font string
    //'disable_google_fonts_link' => true,                    // Disable this in case you want to create your own google fonts loader
    'admin_bar' => true,
    // Show the panel pages on the admin bar
    'admin_bar_icon' => 'dashicons-buddicons-groups',
    // Choose an icon for the admin bar menu
    'admin_bar_priority' => 50,
    // Choose an priority for the admin bar menu
    'global_variable' => '',
    // Set a different name for your global variable other than the opt_name
    'dev_mode' => true,
    // Show the time the page took to load, etc
    'update_notice' => true,
    // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
    'customizer' => true,
    // Enable basic customizer support
    //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
    //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field
    // OPTIONAL -> Give you extra features
    'page_priority' => null,
    // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
    'page_parent' => 'themes.php',
    // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
    'page_permissions' => 'manage_options',
    // Permissions needed to access the options panel.
    'menu_icon' => '',
    // Specify a custom URL to an icon
    'last_tab' => '',
    // Force your panel to always open to a specific tab (by id)
    'page_icon' => 'icon-themes',
    // Icon displayed in the admin panel next to your menu_title
    'page_slug' => 'sakura_options',
    // Page slug used to denote the panel
    'save_defaults' => true,
    // On load save the defaults to DB before user clicks save or not
    'default_show' => false,
    // If true, shows the default value next to each field that is not the default value.
    'default_mark' => '',
    // What to print by the field's title if the value shown is default. Suggested: *
    'show_import_export' => true,
    // Shows the Import/Export panel when not used as a field.
    // CAREFUL -> These options are for advanced use only
    'transient_time' => 60 * MINUTE_IN_SECONDS,
    'output' => true,
    // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
    'output_tag' => false,
    // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
    // 'footer_credit'     => '',                   // Disable the footer credit of Redux. Please leave if you can help it.
    // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
    'database' => '',
    // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!
    'use_cdn' => true,
    // If you prefer not to use the CDN for Select2, Ace Editor, and others, you may download the Redux Vendor Support plugin yourself and run locally or embed it in your code.
    //'compiler'             => true,
    // HINTS
    'hints' => array(
        'icon' => 'el el-question-sign',
        'icon_position' => 'right',
        'icon_color' => 'lightgray',
        'icon_size' => 'normal',
        'tip_style' => array(
            'color' => 'light',
            'shadow' => true,
            'rounded' => false,
            'style' => '',
        ),
        'tip_position' => array(
            'my' => 'top left',
            'at' => 'bottom right',
        ),
        'tip_effect' => array(
            'show' => array(
                'effect' => 'slide',
                'duration' => '500',
                'event' => 'mouseover',
            ),
            'hide' => array(
                'effect' => 'slide',
                'duration' => '500',
                'event' => 'click mouseleave',
            ),
        ),
    ),
);
// ADMIN BAR LINKS -> Setup custom links in the admin bar menu as external items.
$args['admin_bar_links'][] = array(
    'id' => 'sakura-homepage',
    'href' => 'http://2heng.xin/theme-sakura',
    'title' => __('Documentation', 'sakura'),
);

$args['admin_bar_links'][] = array(
    'id' => 'sakura-source-code',
    'href' => 'https://github.com/mashirozx/sakura',
    'title' => __('Extensions', 'sakura'),
);

$args['admin_bar_links'][] = array(
    'id' => 'sakura-support',
    'href' => 'https://github.com/mashirozx/sakura/issues',
    'title' => __('Support', 'sakura'),
);
// SOCIAL ICONS -> Setup custom links in the footer for quick links in your panel footer icons.
$args['share_icons'][] = array(
    'url' => 'https://github.com/mashirozx/sakura',
    'title' => 'Visit us on GitHub',
    'icon' => 'el el-github',
    //'img'   => '', // You can use icon OR img. IMG needs to be a full URL.
);
$args['share_icons'][] = array(
    'url' => 'http://twitter.com/2hengxin',
    'title' => 'Follow Mashiro on Twitter',
    'icon' => 'el el-twitter',
);
$args['share_icons'][] = array(
    'url' => 'https://weibo.com/2960337711/',
    'title' => 'Follow Mashiro on Weibo',
    'icon' => 'fa fa-weibo',
);
// Panel Intro text -> before the form
if (!isset($args['global_variable']) || $args['global_variable'] !== false) {
    if (!empty($args['global_variable'])) {
        $v = $args['global_variable'];
    } else {
        $v = str_replace('-', '_', $args['opt_name']);
    }
    $args['intro_text'] = sprintf(__('<p>Did you know that Redux sets a global variable for you? To access any of your saved options from within your code you can use your global variable: <strong>$%1$s</strong></p>', 'sakura'), $v);
} else {
    $args['intro_text'] = __('<p>This text is displayed above the options panel. It isn\'t required, but more info is always better! The intro_text field accepts all HTML.</p>', 'sakura');
}
// Add content after the form.
$args['footer_text'] = __('<p>This text is displayed below the options panel. It isn\'t required, but more info is always better! The footer_text field accepts all HTML.</p>', 'sakura');
Redux::setArgs($opt_name, $args);
/*
 * ---> END ARGUMENTS
 */
/*
 * ---> START HELP TABS
 */
$tabs = array(
    array(
        'id' => 'redux-help-tab-1',
        'title' => __('Theme Information 1', 'sakura'),
        'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'sakura'),
    ),
    array(
        'id' => 'redux-help-tab-2',
        'title' => __('Theme Information 2', 'sakura'),
        'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'sakura'),
    ),
);
Redux::setHelpTab($opt_name, $tabs);
// Set the help sidebar
$content = __('<p>This is the sidebar content, HTML is allowed.</p>', 'sakura');
Redux::setHelpSidebar($opt_name, $content);
/*
 * <--- END HELP TABS
 */
/*
 *
 * ---> START SECTIONS
 *
 */
// -> START Basic Options
Redux::setSection($opt_name, array(
    'title' => __('Basic Options', 'sakura'),
    'id' => 'basic',
    'desc' => __('Basic Options here!', 'sakura'),
    'customizer_width' => '400px',
    'icon' => 'el el-home',
));

Redux::setSection($opt_name, array(
    'title' => __('Site info', 'sakura'),
    'id' => 'basic_site_info',
    'subsection' => true,
    'customizer_width' => '450px',
    'desc' => __('Fill in your site\'s basic info here.', 'sakura'),
    'fields' => array(
        array(
            'id' => 'opt-checkbox',
            'type' => 'checkbox',
            'title' => __('Checkbox Option', 'sakura'),
            'subtitle' => __('No validation can be done on this field type', 'sakura'),
            'desc' => __('This is the description field, again good for additional info.', 'sakura'),
            'default' => '1', // 1 = on | 0 = off
        ),
        array(
            'id' => 'opt-multi-check',
            'type' => 'checkbox',
            'title' => __('Multi Checkbox Option', 'sakura'),
            'subtitle' => __('No validation can be done on this field type', 'sakura'),
            'desc' => __('This is the description field, again good for additional info.', 'sakura'),
            //Must provide key => value pairs for multi checkbox options
            'options' => array(
                '1' => 'Opt 1',
                '2' => 'Opt 2',
                '3' => 'Opt 3',
            ),
        ),
    ),
));

// -> START Basic Options
Redux::setSection($opt_name, array(
    'title' => __('Test Options', 'sakura'),
    'id' => 'test',
    'desc' => __('Test Options here!', 'sakura'),
    'customizer_width' => '400px',
    'icon' => 'fa fa-meetup',
));

Redux::setSection($opt_name, array(
    'title' => __('Test field', 'sakura'),
    'id' => 'test-field',
    'subsection' => true,
    'customizer_width' => '450px',
    'desc' => __('These should be recategoried..', 'sakura'),
    'fields' => array(
        array(
            'id' => 'ip_database',
            'type' => 'button_set',
            'title' => __('IP database source', 'sakura'),
            'subtitle' => __('Used to convert IP to real location.', 'sakura'),
            'desc' => __('GeoIPLite2 has a lower performance, while QQwarry support Chinese only.', 'sakura'),
            //Must provide key => value pairs for radio options
            'options' => array(
                '1' => 'GeoIPLite2',
                '2' => 'QQwarry',
            ),
            'default' => '1',
        ),

        array(
            'id' => 'geo_ip_local',
            'type' => 'button_set',
            'title' => __('IP location display language', 'sakura'),
            'subtitle' => __('Display location in which language if your are using GeoIPLite2.', 'sakura'),
            'desc' => __('GeoIPLite2 support (City, Province, Country) in several languages.', 'sakura'),
            //Must provide key => value pairs for radio options
            'options' => array(
                'en' => __('English', 'sakura'),
                'de' => __('German', 'sakura'),
                'es' => __('Spanish', 'sakura'),
                'fr' => __('French', 'sakura'),
                'ru' => __('Russian', 'sakura'),
                'pt-BR' => __('Portuguese', 'sakura'),
                'zh-CN' => __('Chinese', 'sakura'),
                'ja' => __('Japanese', 'sakura'),
            ),
            'default' => 'en',
        ),

    ),

    // -> END OPTIONS
));
/*
 * <--- END SECTIONS
 */
