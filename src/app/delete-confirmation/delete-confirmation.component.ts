import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css'],
})
export class DeleteConfirmationComponent {
  @Input() employeeDetails!: any;

  constructor(public activeModal: NgbActiveModal) { }
  
  confirmDelete() {
    // Add your delete logic here
    console.log(`Item "${this.employeeDetails}" deleted`);
    this.activeModal.close('Delete confirmed');
  }
}
