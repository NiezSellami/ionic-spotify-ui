import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick() {
    // on click go to tab1 page
    this.router.navigateByUrl('/tabs/tab1');
  }
}
