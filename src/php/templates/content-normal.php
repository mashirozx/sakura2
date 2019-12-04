<?php get_template_part('layout/post-feature', 'full'); ?>
<div class="page-content">
  <?php get_template_part('layout/sidebar', 'left'); ?>
  <section class="main-center">
    <?php //get_template_part('layout/post-feature', 'fit'); ?>
    <article class="markdown">
      <?php the_content(); ?>
    </article>

    <?php the_tags( __( 'Tags: ', 'sakura' ), ', ', '<br>' ); // Separated by commas with a line break at the end. ?>

    <?php comments_template(); ?>

  </section>
  <?php get_template_part('layout/sidebar', 'right'); ?>
</div>