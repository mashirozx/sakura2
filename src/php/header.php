<!doctype html>
<html <?php language_attributes();?> class="no-js">

<?php get_template_part('layout/head'); ?>

<!-- TODO: show in js obj -->
<body data-sakura-version="<?php echo SAKURA_VERSION; ?>" data-php-version="<?php echo phpversion(); ?>" data-wp-version="<?php echo $wp_version; ?>">

  <!-- top-app-bar -->
  <?php get_template_part('layout/top-app-bar'); ?>

  <!-- site-header -->
  <?php get_template_part('layout/site-header'); ?>

  <!-- drawer -->
  <?php get_template_part('layout/drawer'); ?>

  <!-- drawer app content -->
  <div class="mdc-drawer-app-content">

    <!-- wrapper (pjax container) -->
    <main class="main-content" id="main-content">

