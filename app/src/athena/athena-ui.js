import {Behavior} from 'aurelia-framework';

export class AthenaUI {
  static metadata(){ return Behavior.customElement('athena-ui'); }
  constructor(){
    this.currentMessage = '';
    this.initialize();
  } 

  initialize(){
    this.speak('Hi! I am Athena. How can I help you?');
  }

  speak(msg){
    this.currentMessage = msg;
    var spokenMessage = new SpeechSynthesisUtterance(msg);
        window.speechSynthesis.speak(spokenMessage);
  }
  
}

