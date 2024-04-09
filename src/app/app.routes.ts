import { Routes } from '@angular/router';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { InputExampleComponent } from './components/input-example/input-example.component';


export const routes: Routes = [
    {path:"odd-length-words", component:OddLengthWordsComponent},
    {path:"even-length-words", component:EvenLengthWordsComponent},
    {path:"input-example",component: InputExampleComponent}

];
