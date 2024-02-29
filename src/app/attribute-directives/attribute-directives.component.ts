import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent {
  highlightColor = 'white';
  isStyleApplied = false;

  highlight(color:string) {
    this.highlightColor = color;
  }

  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }
}
