import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/shared/models/note';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from 'src/app/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() noteClick: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDelete: EventEmitter<Note> = new EventEmitter<Note>();

  constructor(public dialog: MatDialog) {}

  noteClicked() {
    this.noteClick.emit(this.note);
  }

  deleteNote($event: MouseEvent) {
    $event.stopPropagation();

    let dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '250px',
      autoFocus: false,
      disableClose: true,
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: this.note,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'deleteNote') {
        this.noteDelete.emit(this.note);
      }
    });
  }
}
