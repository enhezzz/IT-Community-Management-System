import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';
import {WorkRoutingModule} from "./work-routing.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import { LearningNoteComponent } from './learning-note/learning-note.component';
import { WriteNoteComponent } from './write-note/write-note.component';
import {FormsModule} from "@angular/forms";
import {CKEditorModule} from 'ng2-ckeditor';
import { GetPresenceInfoService } from './get-presence-info.service';
import { PresenceListComponent } from './presence-list/presence-list.component';
import {  LogResolver } from './logging/logResolver.service';
@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [LoggingComponent, LearningNoteComponent, WriteNoteComponent, PresenceListComponent],
  providers: [GetPresenceInfoService,LogResolver]
})
export class WorkModule { }
