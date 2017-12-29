import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-note',
  templateUrl: './write-note.component.html',
  styleUrls: ['./write-note.component.css']
})
export class WriteNoteComponent implements OnInit {
  ckeditorContent = '';

  connfig = {
    filebrowserBrowseUrl: '&&&&&',
    filebrowserUploadUrl: '&&&'
  };
  constructor() { }

  ngOnInit() {
  }

}
