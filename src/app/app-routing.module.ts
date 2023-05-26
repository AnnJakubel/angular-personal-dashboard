import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'notes', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
