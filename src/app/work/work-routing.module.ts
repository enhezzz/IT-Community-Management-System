import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggingComponent} from "./logging/logging.component";
import {LearningNoteComponent} from "./learning-note/learning-note.component";
import {WriteNoteComponent} from "./write-note/write-note.component";
import {PresenceListComponent} from "./presence-list/presence-list.component";
import {  LogResolver } from './logging/logResolver.service';


const routes: Routes = [
  {
    path:'',
    component: LoggingComponent,
    resolve: {date: LogResolver}
  },
  {
    path: 'note',
    component: LearningNoteComponent,
  },
  {
    path: 'writenote',
    component: WriteNoteComponent
  },
  {
    path: 'preslist',
    component: PresenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
