import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-a-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent {

  constructor(private router: Router) { }

  public navigateToHome() {
    this.router.navigate([{outlets: {elementA: null}}]);
  }

}
