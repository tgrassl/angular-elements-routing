import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-b',
  templateUrl: './element-b.component.html',
  styleUrls: ['./element-b.component.scss']
})
export class ElementBComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }

}
