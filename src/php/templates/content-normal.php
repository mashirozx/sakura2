<?php //get_template_part('layout/post-feature', 'full'); ?>
<div class="page-content">
  <?php get_template_part('layout/sidebar', 'left'); ?>
  <section class="main-center">
    <?php get_template_part('layout/post-feature', 'fit'); ?>
    <article class="markdown">
      <?php the_content(); ?>
    </article>

    <?php the_tags( __( 'Tags: ', 'html5blank' ), ', ', '<br>' ); // Separated by commas with a line break at the end. ?>

    <p><?php esc_html_e( 'Categorised in: ', 'html5blank' ); the_category( ', ' ); // Separated by commas. ?></p>

    <p><?php esc_html_e( 'This post was written by ', 'html5blank' ); the_author(); ?></p>

    <?php edit_post_link(); // Always handy to have Edit Post Links available. ?>

    <?php comments_template(); ?>

  </section>
  <?php get_template_part('layout/sidebar', 'right'); ?>
</div>