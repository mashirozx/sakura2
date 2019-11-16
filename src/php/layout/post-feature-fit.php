<!-- post feature -->
<?php if (has_post_thumbnail()): // Check if Thumbnail exists. ?>
  <div class="post-feature fit">
    <div class="image-wrapper">
      <img src="<?php echo get_post_thumb_url('large'); ?>">
    </div>
    <div class="title-wrapper">
      <h1 class="title"><?php the_title();?></h1>
      <p class="census">
        <span class="avator">
          <a href="<?php echo the_author_url(); ?>">
            <img src="<?php echo get_avatar_url(get_the_author_meta('ID')); ?>">
          </a>
        </span>
        <span class="author">
          <a href="<?php echo the_author_url(); ?>"><?php the_author();?></a>
        </span>
        <span class="date"><?php echo get_the_date('Y-m-d'); ?></span>
        <span class="views">8 521 Views</span>
      </p>
    </div>
  </div>
<?php else: // If thumbnail not exists?>
  <div class="post-feature-no-image fit">
    <h1 class="title"><?php the_title();?></h1>
    <p class="census">
    <span class="author"><a href="<?php echo the_author_url(); ?>"><?php the_author();?></a></span>
    <span class="date">posted in <?php echo get_the_date('Y-m-d'); ?></span>
    <span class="views">2 768 views </p></span>
    <hr>
  </div>
<?php endif;?>
<!-- /post feature -->