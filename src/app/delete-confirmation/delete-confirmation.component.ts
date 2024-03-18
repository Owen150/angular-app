import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css'],
})
export class DeleteConfirmationComponent {
  // Employee Data or Input from the employee list component
  @Input() employeeDetails!: any;
  id!: any
  
  constructor(public activeModal: NgbActiveModal) { }
  
  confirmDelete(id: any) {
    console.log(`Item "${this.employeeDetails.id}" deleted`);
    this.activeModal.close('Delete confirmed');
  }
}
