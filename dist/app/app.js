System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      App = _export("App", (function () {
        function App(router) {
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Athena";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "about", moduleId: "about", nav: true }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});