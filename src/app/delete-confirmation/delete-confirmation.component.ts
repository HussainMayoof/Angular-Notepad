import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/shared/models/note';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  @Input() note: Note = new Note('', '');

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note) {}

  ngOnInit() {
    if (this.data) {
      this.note = this.data;
    }
  }
}
