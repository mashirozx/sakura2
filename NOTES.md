### Resources
- [material-components-web](https://material.io/develop/web/components/)
- [TS handbook](https://typescript.bootcss.com/)
- [SASS hankbook](https://www.sasscss.com/docs/)
- [TS 注释规范](https://juejin.im/post/5ce24f8ae51d45106477bd45)
- [9012年学 TS](https://juejin.im/post/5c68d99bf265da2db4141418)

### MDC 
#### 输入框样式 

```scss
.commit-button {
  @include mdc-button-ink-color($orange);
  @include mdc-states($orange);
}

.user-info {
  @include mdc-text-field-focused-outline-color($orange);
  @include mdc-text-field-hover-outline-color($orange);
  @include mdc-text-field-outline-color($black);
  @include mdc-text-field-caret-color($orange);
  @include mdc-text-field-label-color($black);
}

.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: orange;
}
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
  color: orange;
}
```

```html
<div class="user-info mdc-text-field mdc-text-field--outlined">
  <input type="text" id="tf-outlined" class="mdc-text-field__input">
  <div class="mdc-notched-outline">
    <div class="mdc-notched-outline__leading"></div>
    <div class="mdc-notched-outline__notch">
      <label for="tf-outlined" class="mdc-floating-label">Your Name</label>
    </div>
    <div class="mdc-notched-outline__trailing"></div>
  </div>
</div>

<button class="commit-button mdc-button mdc-button--outlined">
  <span class="mdc-button__label">BuiBuiBui~</span>
</button>
```

### Linux
Ctrl-Z -> `jobs` -> `fg 1`