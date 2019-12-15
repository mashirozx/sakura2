<?php
get_header();

if (have_posts()) {
    while (have_posts()) {
        the_post();
        get_template_part('templates/content-normal');
    }
} else {
    get_template_part('templates/content-empty');
}

get_footer();