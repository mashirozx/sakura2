<div id="comments" class="comments">
	<?php if (post_password_required()): ?>
	<p><?php esc_html_e('Post is password protected. Enter the password to view any comments.', 'html5blank');?></p>
</div>

	<?php return;endif;?>

<?php if (have_comments()): ?>

	<h2><?php comments_number();?></h2>

	<!-- TODO: also generate a copy in php side for SEO -->
	<ul id="comment-list-ul" class="comment-list">
	</ul>

	<template id="comment-list-li-template">
		<li class="comment-item">
			<a class="avatar"><img class="user-avatar"></a>
			<div class="author"><a class="name"></a></div>
			<div class="reply">Reply</div>
			<div class="mate"><span class="time"></span> <span class="location"></span></div>
			<div class="content"></div>
			<div class="like"><i class="iconfont icon-like-o"></i> <span class="num"></span></div>
			<div class="dislike"><i class="iconfont icon-dislike-o"></i> <span class="num"></span></div>
			<div class="share"><i class="iconfont icon-forward"></i></div>
			<div class="more"><i class="iconfont icon-more-dots"></i></div>
			<div class="child"></div>
		</li>
	</template>

	<template id="comment-child-li-template">
		<li class="comment-child">
			<a class="avatar"><img class="user-avatar"></a>
			<div class="author"><a class="name"></a></div>
			<div class="reply">Reply</div>
			<div class="mate"><span class="time"></span> <span class="location"></span></div>
			<div class="content"></div>
			<div class="like"><i class="iconfont icon-like-o"></i> <span class="num"></span></div>
			<div class="dislike"><i class="iconfont icon-dislike-o"></i> <span class="num"></span></div>
			<div class="share"><i class="iconfont icon-forward"></i></div>
			<div class="more"><i class="iconfont icon-more-dots"></i></div>
		</li>
	</template>

<?php elseif (!comments_open() && !is_page() && post_type_supports(get_post_type(), 'comments')): ?>

	<p><?php esc_html_e('Comments are closed here.', 'sakura');?></p>

<?php endif;?>

</div>
