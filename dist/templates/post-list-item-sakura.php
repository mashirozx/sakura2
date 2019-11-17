<article id="post-<?php the_ID();?>" <?php post_class('mdc-card post-thumb-item');?>>
  <div class="mdc-card__primary-action mdc-ripple-upgraded primary-action">
    <div class="content">
      <div class="post-thumb">
        <div class="thumb-img-box" title="<?php the_title_attribute(); ?>">
          <img src="<?php echo get_post_thumb_url('large') ?>">
        </div>
      </div>
      <div class="post-info">
        <div class="text">
          <h4 class="mdc-typography mdc-typography--subtitle1 post-date">
            <i class="iconfont icon-time"></i> Posted on
            <time datetime="<?php the_time( 'Y-m-d' ); ?> <?php the_time( 'H:i' ); ?>">
              <?php the_date(); ?> <?php the_time(); ?>
            </time> 
            <?php if(is_sticky()) : ?>
              <i class="iconfont hotpost icon-hot"></i>
            <?php endif ?>
          </h4>
          <h3 class="mdc-typography mdc-typography--headline5 post-title">
            <!--title-->
            <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
          </h3>
          <h4 class="mdc-typography mdc-typography--subtitle1 post-meta">
            <i class="iconfont icon-attention"></i> 8 332 Hits
            <i class="iconfont icon-mark"></i> <?php if ( comments_open( get_the_ID() ) ) comments_popup_link( __( 'No Comment', 'sakura' ), __( '1 Comment', 'sakura' ), __( '% Comments', 'sakura' ) ); ?>
            <i class="iconfont icon-file"></i> <a href="<?php echo esc_url(get_category_link(get_the_category(get_the_category()[0]->cat_ID))); ?>"><?php echo get_the_category()[0]->cat_name; ?></a>
          </h4>
          <div class="mdc-typography mdc-typography--body2 post-abstract">
            <?php sakura_wp_excerpt( 'sakura_wp_index' ); ?>
          </div>
        </div>

        <div class="btn--align-right">
          <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" class="mdc-button mdc-button--outlined">Read</a>
        </div>
      </div>
    </div>
  </div>
</article>