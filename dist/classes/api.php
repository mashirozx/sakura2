<?php

namespace Sakura\Classes;

class SakuraApi
{
    public function __construct()
    {
        add_action('rest_api_init', array($this, 'router'), 10);
    }

    public function router()
    {
        register_rest_route('sakura/v1', '/image/upload', array(
            'methods' => 'POST',
            'callback' => 'upload_image',
        ));
        register_rest_route('sakura/v1', '/cache_search/json', array(
            'methods' => 'GET',
            'callback' => 'cache_search_json',
        ));
    }
}
