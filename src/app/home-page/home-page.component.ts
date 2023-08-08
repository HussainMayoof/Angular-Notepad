import { Component } from '@angular/core';
import { Note } from 'src/shared/models/note';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteFormComponent } from '../add-note-form/add-note-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  notes: Note[] = new Array<Note>;

  constructor(public dialog: MatDialog) {}

  newNoteClick() {
    let dialogRef = this.dialog.open(AddNoteFormComponent, {
      width: '750px',
      height: '550px',
      autoFocus: false,
      disableClose: true,
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        this.notes.push(result);
      }
    });
  }

  editNote(note: Note) {
    let dialogRef = this.dialog.open(AddNoteFormComponent, {
      width: '750px',
      height: '500px',
      autoFocus: false,
      disableClose: true,
      data: {
        note: note,
        edit: true
      },
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        console.log(result);
        this.notes[this.notes.indexOf(note)] = result;
      }
    });
  }

  deleteNote(note: Note) {
    this.notes.splice(this.notes.indexOf(note), 1);
  }
}
