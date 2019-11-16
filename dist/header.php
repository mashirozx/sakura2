<!doctype html>
<html <?php language_attributes();?> class="no-js">

<head>
  <meta charset="<?php bloginfo('charset');?>">
  <title><?php wp_title('');?><?php if (wp_title('', false)) {echo ' : ';}?><?php bloginfo('name');?>
  </title>

  <link href="//www.google-analytics.com" rel="dns-prefetch">
  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name');?>"
    href="<?php bloginfo('rss2_url');?>" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php bloginfo('description');?>">

  <?php wp_head();?>

</head>

<body>
  <!-- wrapper (pjax container) -->
  <div id="root" class="wrapper">
    <header id="nav-header" class="mdc-top-app-bar mdc-top-app-bar--dense nav-header">
      <!--nav mune-->
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
          <span class="mdc-top-app-bar__title">Sakura</span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <a href="<?php echo esc_url( home_url() ); ?>" class="material-icons mdc-top-app-bar__action-item mdc-icon-button">home</a>
          <a href="#" class="material-icons mdc-top-app-bar__action-item mdc-icon-button">print</a>
          <a href="#" class="material-icons mdc-top-app-bar__action-item mdc-icon-button">bookmark</a>
        </section>
      </div>
    </header>
    <!-- /header -->