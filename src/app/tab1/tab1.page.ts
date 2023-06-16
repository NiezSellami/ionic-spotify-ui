import { Component } from '@angular/core';
import { Router } from '@angular/router';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];

  constructor(private router: Router) {

  }

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(str: string) {
    return str.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}
