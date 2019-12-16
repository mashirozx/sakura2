<?php 
$list_id = 0; 
$sticky_id = 0; 
if (have_posts()) {
	while (have_posts()) { 
		the_post();
		$list_id++; 
		if(is_sticky()) {$sticky_id++;}

		// TODO: sticky condition.

		if ($list_id % 2 == 0) {
			get_template_part( 'templates/post-list-item', 'sakura' );
		} else {
			get_template_part( 'templates/post-list-item', 'sakura_reverse' );
		}
	} 
} else {
	get_template_part( 'templates/post-list-noting' );
}

get_template_part('layout/pagination');