import { Component, OnInit } from '@angular/core';
import { LazyModuleService } from './services/lazy-module.service';
import { Router, NavigationError, NavigationStart } from '@angular/router';
import {Location} from '@angular/common';
import { HostLocationService } from './host-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private loader: LazyModuleService, private hostLocation: HostLocationService) { }

  ngOnInit() {
    this.loader.load(false);
    this.hostLocation.handleNavigation();
  }
}
