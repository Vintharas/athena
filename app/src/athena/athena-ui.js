import {Behavior} from 'aurelia-framework';

export class AthenaUI {
  static metadata(){ return Behavior.customElement('athena-ui'); }
  constructor(){
    this.status = '';
    this.currentMessage = '';
    this.initialize();
  } 

  initialize(){
    this.speak('Hi! I am Athena. How can I help you?');
  }

  speak(msg){
    this.currentMessage = msg;
    var spokenMessage = new SpeechSynthesisUtterance(msg);
    spokenMessage.onstart = (function(){ 
      this.status = 'isSpeaking';
    }).bind(this);
    spokenMessage.onend = (function(){
      this.status = '';
    }).bind(this);
    window.speechSynthesis.speak(spokenMessage);
  }
  
}

