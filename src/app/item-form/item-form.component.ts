import { Component, EventEmitter, Output } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  onSubmit() {
    const itemName = (<HTMLInputElement>document.getElementById('itemName'))
      .value;
    const itemDescription = (<HTMLInputElement>(
      document.getElementById('itemDescription')
    )).value;
    this.itemService
      .addItem({ name: itemName, description: itemDescription })
      .subscribe((data) => {
        this.items.push(data);
      });
  }
}
