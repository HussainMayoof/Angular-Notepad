import { Component, OnInit } from '@angular/core';
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
  paginatedNotes!: Note[];
  initialIndex: number = 0;
  finalIndex: number = 10;

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
      this.paginatedNotes =  this.notes.slice(this.initialIndex, this.finalIndex);
      }
    });
  }

  editNote(note: Note) {
    let dialogRef = this.dialog.open(AddNoteFormComponent, {
      width: '750px',
      height: '450px',
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
      this.paginatedNotes =  this.notes.slice(this.initialIndex, this.finalIndex);
      }
    });
  }

  deleteNote(note: Note) {
    this.notes.splice(this.notes.indexOf(note), 1);
    this.paginatedNotes =  this.notes.slice(this.initialIndex, this.finalIndex);
  }

  onPageChange($event: any) {
    this.initialIndex = $event.pageIndex*$event.pageSize;
    this.finalIndex = $event.pageIndex*$event.pageSize + $event.pageSize;
    this.paginatedNotes =  this.notes.slice(this.initialIndex, this.finalIndex);
  }
}
