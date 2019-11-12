<?php get_header();?>

<?php get_template_part( 'layout/header-top' ); ?>

<div class="page-content">
  <?php get_template_part('layout/sidebar-left'); ?>
  <section class="main-center">
    <div class="post-list">
      <!--post thumb list-->

      <?php get_template_part( 'layout/post-list-loop' ); ?>

			<?php get_template_part( 'layout/pagination' ); ?>

      <!--post thumb list end-->
  </section>
  <?php get_template_part('layout/sidebar-right'); ?>
</div>

<?php get_footer();?>