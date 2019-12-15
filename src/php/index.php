<?php get_header();?>

<?php get_template_part('layout/header-top'); ?>
<?php get_template_part('layout/header-top-after'); ?>

<!-- page-content -->
<div class="page-content">
  <?php get_template_part('layout/sidebar-left'); ?>
  <section class="main-center">
    <!-- post thumb list -->
    <div class="post-list">

      <?php get_template_part('layout/post-list-loop'); ?>

      <?php get_template_part('layout/pagination'); ?>

    </div>
    <!-- /post-thumb-list -->
  </section>
  <?php get_template_part('layout/sidebar-right'); ?>
</div>
<!-- /page-content --> 

<?php get_footer();?>