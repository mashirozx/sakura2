### Resources
- [material-components-web](https://material.io/develop/web/components/)
- [TS handbook](https://typescript.bootcss.com/)
- [SASS hankbook](https://www.sasscss.com/docs/)

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
*/
/*
.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: orange;
}
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
  color: orange;
}
```

### Linux 相关
Ctrl-Z -> `jobs` -> `fg 1`