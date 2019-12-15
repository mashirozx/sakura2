  <!-- TODO: also generate a copy in php side for SEO -->
	<div class="comment-wrapper mdc-card">

		<?php if (have_comments()): ?>
			<h2 class="commens-title"><?php comments_number();?></h2>
		<?php else: ?>
			<h2 class="comments-title" id="leave-first-comment"><?php echo __('Leave the first comment!', 'sakura'); ?></h2>
		<?php endif;?>
		
		<ul id="comment-list-ul-root" class="comment-list-ul"></ul>
	</div>

	<template id="comment-list-li-template">
		<li class="comment-item">
			<div class="grid">
				<a class="avatar"><img class="user-avatar"></a>
				<div class="author"><a class="name"></a></div>
				<div class="reply">Reply</div>
				<div class="mate"><span class="time"></span> <span class="location"></span></div>
				<div class="content"></div>
				<div class="like"><i class="iconfont icon-like-o"></i> <span class="num"></span></div>
				<div class="dislike"><i class="iconfont icon-dislike-o"></i> <span class="num"></span></div>
				<div class="share"><i class="iconfont icon-forward"></i></div>
				<div class="more"><i class="iconfont icon-more-dots"></i></div>
				<div class="reply-form"></div>
				<ul class="comment-list-ul child"></ul>
			</div>
		</li>
	</template>
