<?php
get_header();

if (have_posts()) {
    while (have_posts()) {
        the_post();
        get_template_part('templates/article-normal');
    }
} else {
    get_template_part('templates/page-empty');
}

get_footer();
