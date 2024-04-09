import { Component, EventEmitter, Output, output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OddLengthWordsComponent } from "./components/odd-length-words/odd-length-words.component";
import { EvenLengthWordsComponent } from "./components/even-length-words/even-length-words.component";
import { InputExampleComponent } from "./components/input-example/input-example.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, OddLengthWordsComponent, EvenLengthWordsComponent, InputExampleComponent]
})
export class AppComponent {
// @Output() emitEvent = new EventEmitter<String>();

  evenInput='';
  oddInput='';
  userInputOddWords:string[]= [];
  userInputEvenWords:string[]=[];


  emitEvent(inputText:string){
    if(inputText.length%2===0){
      this.oddInput = '';
      this.evenInput= inputText;
  }else{
  
    this.oddInput = inputText;
    this.evenInput='';
  }
  }

  emitClickEvent(userInput:string){
    if(userInput.length%2===0){
      this.userInputEvenWords.push(userInput);
  }else{
  
    this.userInputOddWords.push(userInput)
  }
  }
}
