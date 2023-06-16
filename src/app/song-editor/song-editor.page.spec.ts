import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongEditorPage } from './song-editor.page';

describe('SongEditorPage', () => {
  let component: SongEditorPage;
  let fixture: ComponentFixture<SongEditorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SongEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
