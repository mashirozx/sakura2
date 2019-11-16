<?php
/**
 * Copyright 2019 Mashiro
 * Some usefull functions
 * @author Mashiro
 * @license MIT
 */

/**
 * Combine file path
 * @since 4.0.0
 * @param  {string}     file/folder     eg. `'var', 'www', 'html'`
 * @return {string}     path            eg. `/var/www/html`
 */
function join_paths() {
  $paths = array();

  foreach (func_get_args() as $arg) {
      if ($arg !== '') { $paths[] = $arg; }
  }

  return preg_replace('#/+#','/',join('/', $paths));
}