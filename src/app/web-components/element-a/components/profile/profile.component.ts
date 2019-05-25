import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'element-a-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  public userId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
  }

  public navigateToHome() {
    this.router.navigate([{outlets: {elementA: null}}]);
  }
}
