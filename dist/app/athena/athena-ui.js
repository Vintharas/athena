System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, AthenaUI;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      AthenaUI = _export("AthenaUI", (function () {
        function AthenaUI() {
          this.status = "";
          this.currentMessage = "";
          this.initialize();
        }

        _prototypeProperties(AthenaUI, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("athena-ui");
            },
            writable: true,
            configurable: true
          }
        }, {
          initialize: {
            value: function initialize() {
              this.speak("Hi! I am Athena. How can I help you?");
            },
            writable: true,
            configurable: true
          },
          speak: {
            value: function speak(msg) {
              this.currentMessage = msg;
              var spokenMessage = new SpeechSynthesisUtterance(msg);
              spokenMessage.onstart = (function () {
                this.status = "isSpeaking";
              }).bind(this);
              spokenMessage.onend = (function () {
                this.status = "";
              }).bind(this);
              window.speechSynthesis.speak(spokenMessage);
            },
            writable: true,
            configurable: true
          }
        });

        return AthenaUI;
      })());
    }
  };
});