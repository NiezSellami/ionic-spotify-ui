import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.page.html',
  styleUrls: ['./song-editor.page.scss'],
})
export class SongEditorPage implements OnInit {
  isModalOpen = false;
  @ViewChild('footerToolbar', { read: ElementRef }) toolbar: ElementRef;
  @ViewChild('modal', { read: ElementRef }) modal: ElementRef;

  public bpmPicker = [
    {
      name: 'bpm',
      options: [
        {
          text: '100 bpm',
          value: '100',
        },
        {
          text: '120 bpm',
          value: '120',
        },
        {
          text: '140 bpm',
          value: '140',
        },
        {
          text: '160 bpm',
          value: '160',
        },
      ],
    },
  ];

  public bpmButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value) => {
        this.bpmValue=value.bpm;
      },
    },
  ];
  public speedPicker = [
    {
      name: 'speed',
      options: [
        {
          text: '1 x',
          value: '1',
        },
        {
          text: '2 x',
          value: '2',
        },
        {
          text: '3 x',
          value: '3',
        },
      ],
    },
  ];

  public speedButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value) => {
        this.speedValue=value.speed;
      },
    },
  ];
  public majorPicker = [
    {
      name: 'major',
      options: [
        {
          text: 'EB major',
          value: 'EB',
        },
        {
          text: 'CE major',
          value: 'CE',
        },
      ],
    },
  ];

  public majorButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value) => {
        this.majorValue=value.major;
      },
    },
  ];
  bpmValue = {
    text: '100 bpm',
    value: '100',
  };
  speedValue = {
    text: '2 x',
    value: '2',
  };
  majorValue = {
    text: 'EB major',
    value: 'EB',
  };
  constructor(private renderer: Renderer2,private modalController: ModalController) { }

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
  dismissModal() {
    this.modalController.dismiss();
    this.isModalOpen=false;
  }
}
