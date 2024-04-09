import { Component, Input } from '@angular/core';
import { InputExampleComponent } from "../input-example/input-example.component";

@Component({
    selector: 'app-odd-length-words',
    standalone: true,
    templateUrl: './odd-length-words.component.html',
    styleUrl: './odd-length-words.component.css',
    imports: [InputExampleComponent]
})
export class OddLengthWordsComponent {

    @Input() showOddInput:String;
    @Input() oddWords:String[];

// show:string = '';
// @Input() showOddInput:String|undefined;
// oddInput:String;
// @Input() inputValue:InputValue;

// inputEvent(inputText:string){
//   if(inputText.length%2===0){
//       this.show = inputText;
//   }else{
//     this.show=''
//   }
// }


}
