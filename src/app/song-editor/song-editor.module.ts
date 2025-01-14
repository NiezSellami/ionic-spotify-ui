import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongEditorPageRoutingModule } from './song-editor-routing.module';

import { SongEditorPage } from './song-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongEditorPageRoutingModule
  ],
  declarations: [SongEditorPage]
})
export class SongEditorPageModule {}
