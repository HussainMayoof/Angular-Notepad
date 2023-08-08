import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/shared/models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  @Input() notes!: Note[];
  @Output() noteClick: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDelete: EventEmitter<Note> = new EventEmitter<Note>();

  noteClicked(note: Note) {
    this.noteClick.emit(note);
  }

  deleteNote(note: Note) {
    this.noteDelete.emit(note);
  }
}
