import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/shared/models/note';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss']
})
export class AddNoteFormComponent {
  @Input() note: Note = new Note('', '');
  @Input() edit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddNoteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      note: Note,
      edit: boolean
    }
  ) {}

  ngOnInit() {
    if (this.data) {
      this.note = this.data.note;
      this.edit = this.data.edit;
    }
  }

  onSubmit() {
    this.dialogRef.close(this.note);
  }
}
