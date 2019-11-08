<?php

function join_paths() {
    $paths = array();

    foreach (func_get_args() as $arg) {
        if ($arg !== '') { $paths[] = $arg; }
    }

    return preg_replace('#/+#','/',join('/', $paths));
}

define('MANIFEST', json_decode(file_get_contents(get_template_directory() . "/manifest.json"), true));

//$manifest = json_decode(file_get_contents(get_template_directory() . "/manifest.json"), true);