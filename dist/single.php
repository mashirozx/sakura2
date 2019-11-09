<?php get_header(); ?>

<?php if ( have_posts() ) : while (have_posts() ) : the_post(); ?>

  <div class="page-content">
    <aside class="side-bar-left"></aside>
    <section class="main-center">
      <article class="markdown">
        <?php the_content(); ?>
      </article>
    </section>
    <aside class="side-bar-right"></aside>
  </div>

<?php endwhile; ?>

<?php else : ?>

  <div class="page-content">
    <aside class="side-bar-left"></aside>
    <section class="main-center">
      <article class="markdown">
        <h1><?php esc_html_e( 'Sorry, nothing to display.', 'sakura' ); ?></h1>
      </article>
    </section>
    <aside class="side-bar-right"></aside>
  </div>

<?php endif; ?>

<?php get_footer(); ?>