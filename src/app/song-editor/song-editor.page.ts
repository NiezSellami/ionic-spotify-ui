import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.page.html',
  styleUrls: ['./song-editor.page.scss'],
})
export class SongEditorPage implements OnInit {
  isModalOpen = false;
  @ViewChild('footerToolbar', { read: ElementRef }) toolbar: ElementRef;
  @ViewChild('modal', { read: ElementRef }) modal: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  setOpen(isOpen: boolean) {
    const toolbarHeight = this.toolbar.nativeElement.offsetHeight;
    this.renderer.setStyle(this.modal.nativeElement, 'bottom', `${toolbarHeight}px`);
    this.isModalOpen = isOpen;
  }
  checkModal(){
    this.isModalOpen==true?this.setOpen(false):null;
  }
  
}
