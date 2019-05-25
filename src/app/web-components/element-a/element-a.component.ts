import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-a',
  templateUrl: './element-a.component.html',
  styleUrls: ['./element-a.component.scss']
})
export class ElementAComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }

}
