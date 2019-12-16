<aside class="side-bar-left">
  <?php #get_template_part( 'layout/searchform' ); ?>

	<div class="sidebar-widget">
		<?php if ( ! function_exists( 'dynamic_sidebar' ) || ! dynamic_sidebar( 'widget-area-1' ) ) ?>
	</div>

	<div class="sidebar-widget">
		<?php if ( ! function_exists( 'dynamic_sidebar' ) || ! dynamic_sidebar( 'widget-area-2' ) ) ?>
	</div>
</aside>