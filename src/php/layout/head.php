<head>
  <meta charset="<?php bloginfo('charset');?>">
  <title><?php wp_title('');?><?php if (wp_title('', false)) {echo ' : ';}?><?php bloginfo('name');?>
  </title>

  <link href="//www.google-analytics.com" rel="dns-prefetch">
  <!-- TODO: a prefetch list -->
  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name');?>"
    href="<?php bloginfo('rss2_url');?>" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <meta name="description" content="<?php bloginfo('description');?>">

  <!-- analytics -->
  <?php if (sakura_options('analytics_code_position')=='head')echo sakura_options('analytics_code'); ?>

  <?php wp_head();?>

</head>