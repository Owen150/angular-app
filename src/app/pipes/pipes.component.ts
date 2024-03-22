import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  amount = 388.78;
  weight = 'Thirty Three';
  today = new Date();
  name = 'Michael Owen';
  mark = 0.8876;
}
