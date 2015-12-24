/**
 * Created by admin on 12/24/15.
 */
(function (app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
