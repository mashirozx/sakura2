<div class="post-feature">
<div class="pattern-center single-center">
    <img src="">
  </div>
    <header class="pattern-header single-header"><h1 class="entry-title">Markdown</h1><p class="entry-census"><span><a href="https://sakura.2heng.xin/author/Mashiro/"><img src="https://cn.gravatar.com/avatar/cd2b3a164c977539712929f66cad335c?s=96&amp;d=mm&amp;r=g"></a></span><span><a href="https://sakura.2heng.xin/author/Mashiro/">Mashiro</a></span><span class="bull">·</span>2018-05-25<span class="bull">·</span>8 521 Views</p></header>
  </div>
</div>

<div class="page-content">
  <?php get_template_part('layout/sidebar-left'); ?>
  <section class="main-center">
    <article class="markdown">
      <?php the_content(); ?>
    </article>

    <?php the_tags( __( 'Tags: ', 'html5blank' ), ', ', '<br>' ); // Separated by commas with a line break at the end. ?>

    <p><?php esc_html_e( 'Categorised in: ', 'html5blank' ); the_category( ', ' ); // Separated by commas. ?></p>

    <p><?php esc_html_e( 'This post was written by ', 'html5blank' ); the_author(); ?></p>

    <?php edit_post_link(); // Always handy to have Edit Post Links available. ?>

    <?php comments_template(); ?>

  </section>
  <?php get_template_part('layout/sidebar-right'); ?>
</div>