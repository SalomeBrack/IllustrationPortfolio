import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header/header.service';
import { ChildrenOutletContexts } from '@angular/router';
import { pageAnimations } from './navigation.animation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [pageAnimations]
})
export class NavigationComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private contexts: ChildrenOutletContexts
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {
    this.headerService.setHeaderHeight(document.getElementById('header')!.getBoundingClientRect().height);
  }
}
