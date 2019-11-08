<!--thumb right template-->
<article id="post-<?php the_ID();?>" <?php post_class('mdc-card post-thumb-item');?>>
  <div class="mdc-card__primary-action mdc-ripple-upgraded primary-action">
    <div class="content">
      <!--TODO: global default post thumb-->
      <?php $post_thumb_url = has_post_thumbnail() ? has_post_thumbnail() : "https://view.moezx.cc/images/2019/10/21/5e65o9lxtbvht2tdjvpgsmarw.jpg"?>
      <div class="post-thumb">
        <a href="<?php the_permalink(); ?>" class="thumb-img-box" title="<?php the_title_attribute(); ?>">
          <!--<img>-->
          <?php the_post_thumbnail( array( 120, 120 ) ); ?>
        </a>
      </div>
      <div class="post-info">
        <div class="text">
          <h4 class="mdc-typography mdc-typography--subtitle1 post-date">
            <i class="iconfont icon-time"></i> Posted on
            <time datetime="<?php the_time( 'Y-m-d' ); ?> <?php the_time( 'H:i' ); ?>">
              <?php the_date(); ?> <?php the_time(); ?>
            </time> <i class="iconfont hotpost icon-hot"></i>
          </h4>
          <h3 class="mdc-typography mdc-typography--headline5 post-title">
            <!--title-->
            <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
          </h3>
          <h4 class="mdc-typography mdc-typography--subtitle1 post-meta">
            <i class="iconfont icon-attention"></i> 8 332 Hits
            <i class="iconfont icon-mark"></i> <?php if ( comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'sakura' ), __( '1 Comment', 'sakura' ), __( '% Comments', 'sakura' ) ); ?>
            <i class="iconfont icon-file"></i> <?php the_category(); ?>
          </h4>
          <div class="mdc-typography mdc-typography--body2 post-abstract">
            <?php sakura_wp_excerpt( 'sakura_wp_index' ); ?>
          </div>
        </div>

        <div class="btn--align-left">
          <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" class="mdc-button mdc-button--outlined">Read</a>
        </div>
      </div>
    </div>
  </div>
</article>
<!--thumb right template end-->