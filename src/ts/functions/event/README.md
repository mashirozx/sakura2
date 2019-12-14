Page load events
===

**onloadInit**: functions should run when first load page.

**pjaxReload**: functions should reload when we move to a new page, while work with [Pjax](https://github.com/MoOx/pjax), the page not really reloads, but just fetchs new page data, and place the different elements on the DOM. So we should reload these fumctions to catch the newly generated DOM, such like event listeners.

**backReload**: functions should reload when use browther's back button, the same as pjaxReload.