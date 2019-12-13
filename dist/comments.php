<div id="comments" class="comments">
	<?php if (post_password_required()): ?>
	<p><?php esc_html_e('Post is password protected. Enter the password to view any comments.', 'html5blank');?></p>
</div>

	<?php return;endif;?>

<?php if (have_comments()): ?>

	<h2><?php comments_number();?></h2>

	<?php get_template_part('layout/comment', 'form'); ?>

	<?php get_template_part('layout/comment', 'list'); ?>

<?php elseif (!comments_open() && !is_page() && post_type_supports(get_post_type(), 'comments')): ?>

	<p><?php esc_html_e('Comments are closed here.', 'sakura');?></p>

<?php endif;?>

</div>
