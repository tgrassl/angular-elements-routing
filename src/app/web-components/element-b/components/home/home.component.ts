import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-b-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  public navigateToProfile() {
    this.router.navigate([{outlets: {elementB: ['307c5c4e-cd11-4e22-9938-57950f13c3b8']}}]);
  }

  public navigateToPictures() {
    this.router.navigate([{outlets: {elementB: 'pictures'}}]);
  }
}
