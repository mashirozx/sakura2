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
			<ul class="comment-list-ul child"></ul>
		</li>
	</template>