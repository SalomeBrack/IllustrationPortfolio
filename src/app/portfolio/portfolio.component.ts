import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderService } from '../navigation/header/header.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  headerHeight: number = 0;
  containerHeight: number = 0;

  constructor(private headerService: HeaderService) { }

  setImageBoxSize() {
    const image = document.getElementById("myImage")!;
    const shadow = document.getElementById("myShadow")!;

    const minImageHeight = window.innerHeight * (45/100);
  
    if (scrollY < this.headerHeight) {
      //header is still visible
      image.classList.remove("sticky");

      image.style.height = `${this.containerHeight}px`;

      shadow.style.transform = `translate(0, -100%)`;
      shadow.style.opacity = '0';
    }
    else {
      image.classList.add("sticky");

      const newImageHeight = this.containerHeight + this.headerHeight - scrollY;

      if (newImageHeight < minImageHeight) {
        //reached it's smallest size
        image.style.height = `${minImageHeight}px`;

        shadow.style.transform = `translate(0, ${minImageHeight}px)`;
        shadow.style.opacity = '100%';
      }
      else {
        //gets smaller relative to scroll position
        image.style.height = `${newImageHeight}px`;

        shadow.style.transform = `translate(0, -100%)`;
        shadow.style.opacity = '0';
      }
    }
  }

  getContainerSizes() {
    const imageContainer = document.getElementById("myImageContainer")!;

    this.headerHeight = this.headerService.getHeaderHeight();
    this.containerHeight = imageContainer.getBoundingClientRect().height;

    this.setImageBoxSize();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.setImageBoxSize();
  }
  
  @HostListener('window:resize', [])
  onResize() {
    this.getContainerSizes();
  }

  ngOnInit() {
    document.addEventListener('scrollstart', this.onWindowScroll, { passive: true });
    
    document.getElementById("myImage")!.style.height = '100%';

    this.getContainerSizes();
  }
}
