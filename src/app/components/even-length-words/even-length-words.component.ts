import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [],
  templateUrl: './even-length-words.component.html',
  styleUrl: './even-length-words.component.css'
})
export class EvenLengthWordsComponent {
  @Input() showEvenInput:String;
  @Input() evenWords:String[];
  
}
