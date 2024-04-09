import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.css'
})
export class InputExampleComponent {

userInput:string='';
inputText:string=''
@Output() inputEvent = new EventEmitter<string>();

@Output() clickEvent = new EventEmitter<string>(); 
 
// inputValue:InputValue = {
//   showText:'',
//   clickText:''
// }

onInputEvent(event:Event){
 const value = (event.target as HTMLInputElement).value;
 this.inputText = value;
 this.inputEvent.emit(value)
}
onClick() {
// this.userInput +=
// `<p>${this.inputText.trim()}</p>`
  
  this.clickEvent.emit(this.inputText);
}
}
