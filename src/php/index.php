<?php get_header();?>

<?php get_template_part( 'layout/header-top' ); ?>

<div class="page-content">
  <aside class="side-bar-left"></aside>
  <section class="main-center">
    <div class="post-list">
      <!--post thumb list-->

      <?php get_template_part( 'layout/post-list-loop' ); ?>

			<?php get_template_part( 'layout/pagination' ); ?>

      <!--post thumb list end-->
  </section>
  <aside class="side-bar-right"></aside>
</div>

<?php get_footer();?>