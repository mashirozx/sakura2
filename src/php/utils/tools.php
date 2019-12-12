<?php
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
          throw new Exception(__('Undecleared class: Redux. Please install and activate plugin', 'sakura').' <a href="https://cn.wordpress.org/plugins/redux-framework/">Redux Framework</a>');
        }
    }
    global $sakura_options;
    return $sakura_options[$id];
}

/**
 * Combine file path
 * @since 4.0.0
 * @param  string     file/folder     eg. `'var', 'www', 'html'`
 * @return string     path            eg. `/var/www/html`
 */
function join_paths()
{
    $paths = array();

    foreach (func_get_args() as $arg) {
        if ($arg !== '') {$paths[] = $arg;}
    }

    return preg_replace('#/+#', '/', join('/', $paths));
}
