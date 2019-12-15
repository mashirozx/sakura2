<div id="comments" class="comments">
	<?php if (post_password_required()): ?>
	<p><?php esc_html_e('Post is password protected. Enter the password to view any comments.', 'html5blank');?></p>
</div>

	<?php return;endif;?>

<!-- if have comment -->
<?php if (have_comments()): ?>

	<?php get_template_part('layout/comment', 'list'); ?>

<!-- if comment open but have no comment -->
<?php elseif (!have_comments() && comments_open()): ?>

	<?php get_template_part('layout/comment', 'list'); ?>

<?php else: ?>

	<p><?php esc_html_e('Comments are closed here.', 'sakura');?></p>

<?php endif;?>

<!-- if comment is opened here -->

<?php if (comments_open()): ?>

<?php get_template_part('layout/comment', 'form'); ?>

<?php endif; ?>

</div>
