import { Injectable } from '@angular/core';
import { IMAGES } from '../portfolio/image.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  private title: string = IMAGES[0].title;

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  getTitle(): string {
    return this.title;
  }
}
