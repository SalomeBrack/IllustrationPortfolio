import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenMode() {
    if (document.fullscreenElement) {
      this.document.body.style.overflow = 'hidden';
    }
    else {
      this.document.body.style.overflow = 'auto';
    }
  }
}
