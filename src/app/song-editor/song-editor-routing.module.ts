import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongEditorPage } from './song-editor.page';

const routes: Routes = [
  {
    path: '',
    component: SongEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongEditorPageRoutingModule {}
