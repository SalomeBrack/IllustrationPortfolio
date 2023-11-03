import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerHeight: number = 0;

  setHeaderHeight(headerHeight: number) {
    this.headerHeight = headerHeight;
  }

  getHeaderHeight(): number {
    return this.headerHeight;
  }
}
