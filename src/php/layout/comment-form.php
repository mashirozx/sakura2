<div class="commetn-form-wrapper">
  <form id="commentform" class="comment-form mdc-card" action="./" method="post" novalidate="">
    <div id="reply-to-info" class="reply-to-info">
      <div class="mdc-chip-set" role="grid">
        <div class="text">
          <span class="plain"><?php echo __('Replying to', 'sakura'); ?></span>
          <a href="#" id="reply-to-link" class="mdc-chip" role="row">
            <div class="mdc-chip__ripple"></div>
            <span role="gridcell">
              <span role="button" tabindex="0" class="mdc-chip__text">@<span id="reply-to-author"></span></span>
            </span>
          </a>
        </div>
        <!-- /! cancel button -->
        <div id="cancel-reply" class="cancel-reply mdc-button">
          <span class="mdc-button__ripple"></span>
          <?php echo __('Cancel Reply', 'sakura'); ?>
        </div>
      </div>
    </div>
    <div class="profile">
      <div class="avatar"><img src="<?php echo get_avatar_url(''); ?>"></div>
      <div class="fields">
        <div class="author left">
          <div
            class="mdc-text-field mdc-text-field--outlined mdc-text-field--fullwidth mdc-text-field--with-leading-icon mdc-text-field--with-trailing-icon">
            <i class="material-icons mdc-text-field__icon">face</i>
            <!-- INPUT: $author -->
            <input id="author" name="author" type="text" value="" size="30" maxlength="245" required="required"
              class="mdc-text-field__input">
            <div class="mdc-notched-outline">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__notch">
                <label for="author" class="mdc-floating-label"><?php echo __('Name', 'sakura'); ?></label>
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>
        <div class="email center">
          <div
            class="mdc-text-field mdc-text-field--outlined mdc-text-field--fullwidth mdc-text-field--with-leading-icon mdc-text-field--with-trailing-icon">
            <i class="material-icons mdc-text-field__icon">email</i>
            <!-- INPUT: $email -->
            <input id="email" name="email" type="email" value="" size="30" maxlength="100"
              aria-describedby="email-notes" required="required" class="mdc-text-field__input">
            <div class="mdc-notched-outline">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__notch">
                <label for="email" class="mdc-floating-label"><?php echo __('Email', 'sakura'); ?></label>
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>
        <div class="url right">
          <div
            class="mdc-text-field mdc-text-field--outlined mdc-text-field--fullwidth mdc-text-field--with-leading-icon mdc-text-field--with-trailing-icon">
            <i class="material-icons mdc-text-field__icon">link</i>
            <!-- INPUT: $url -->
            <input id="url" name="url" type="url" value="" size="30" maxlength="200" class="mdc-text-field__input">
            <div class="mdc-notched-outline">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__notch">
                <label for="url" class="mdc-floating-label"><?php echo __('URL', 'sakura'); ?></label>
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="mdc-text-field mdc-text-field--textarea mdc-text-field--fullwidth">
        <!-- TEXTAREA $content -->
        <textarea id="comment" name="comment" maxlength="65525" required="required" class="mdc-text-field__input"
          rows="8" cols="40"></textarea>
        <div class="mdc-notched-outline">
          <div class="mdc-notched-outline__leading"></div>
          <div class="mdc-notched-outline__notch">
            <label for="comment"
              class="mdc-floating-label"><?php echo __('You are the surprise that I will meet only once in my life.', 'sakura'); ?></label>
          </div>
          <div class="mdc-notched-outline__trailing"></div>
        </div>
      </div>
    </div>
    <div class="submit">
      <button class="mdc-button mdc-button--outlined">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label"><?php echo __('Submit', 'sakura'); ?></span>
      </button>
    </div>

    <div class="hidden">
      <input type="hidden" name="comment_post_ID" id="comment_post_ID" value="<?php echo the_ID(); ?>">
      <input type="hidden" name="comment_parent" id="comment_parent" value="0">
      <input type="hidden" name="nonce" id="nonce" value="<?php echo wp_create_nonce('wp_graphql'); ?>">
    </div>
  </form>
</div>