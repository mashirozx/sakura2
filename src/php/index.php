<?php get_header();?>

<?php get_template_part( 'layout/header-top' ); ?>

<div class="page-content">
  <aside class="side-bar-left">left</aside>
  <section class="main-center">
    <div class="post-list">
      <!--post thumb list-->

      <h1><?php esc_html_e( 'Latest Posts', 'sakura' ); ?></h1>

			<?php get_template_part( 'loop' ); ?>

			<?php get_template_part( 'pagination' ); ?>

      <!--post-list end-->
  </section>
  <aside class="side-bar-right">right</aside>
</div>

<?php get_footer();?>