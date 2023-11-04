import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES, Image } from 'src/image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public image: Image = IMAGES[0];
  public mobile: boolean = false;
  public screen: number = 0;
  private time: number = 800;

  private imageWidth: number = 0;
  private imageHeight: number = 0;
  private imageAspectRatio: number = 0;

  private frameWidth: number = 0;
  private frameHeight: number = 0;
  private frameAspectRatio: number = 0;

  constructor(private router: Router) { }

  imageCover() {
    const image = document.getElementById("myImage")!;
    
    if (this.imageAspectRatio >= this.frameAspectRatio) {
      image.style.width = `${this.imageWidth}px`; // * this.frameWidth / this.frameHeight
      image.style.height = `${this.frameHeight}px`;
    }
    else {
      image.style.width = `${this.frameWidth}px`;
      image.style.height = `${this.imageHeight * this.frameWidth / this.imageWidth}px`;
    }
  }

  imageContain() {
    const box = document.getElementById("myBox")!;
    box.classList.add('box-animation');

    const image = document.getElementById("myImage")!;
    image.style.transition = `all ${this.time}ms ease`;
    
    if (this.imageAspectRatio >= this.frameAspectRatio) {
      image.style.width = `${this.frameWidth}px`;
      image.style.height = `${this.frameWidth / this.imageAspectRatio}px`;
      image.style.transform = `translate(0%, ${-50 * ((this.imageAspectRatio - this.frameAspectRatio) / this.frameAspectRatio)}%)`;
    }
    else {
      image.style.width = `${this.frameHeight * this.imageAspectRatio}px`;
      image.style.height = `${this.frameHeight}px`;
      image.style.transform = `translate(${50 * ((this.frameAspectRatio - this.imageAspectRatio) / this.imageAspectRatio)}%, 0%)`;
    }
  }

  navigateToPortfolio() {
    this.imageContain();

    setTimeout(() => {
      const image = document.getElementById("myImage")!;

      image.classList.remove('image');
      image.style.transition = 'none';
      image.style.width = '100%';
      image.style.height = '100%';
      image.style.objectFit = 'contain';
      image.style.transform = 'translate(0, 0)';

      this.router.navigate(['/portfolio', IMAGES[0].title]);
    }, this.time);
  }

  getImageDimensions() {
    this.imageWidth = this.image.width!;
    this.imageHeight = this.image.height!;
    this.imageAspectRatio = this.imageWidth / this.imageHeight;
  }

  getFrameDimensions() {
    const frame = document.getElementById("myFrame")!;

    this.frameWidth = frame.clientWidth;
    this.frameHeight = frame.clientHeight;
    this.frameAspectRatio = this.frameWidth / this.frameHeight;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.getFrameDimensions();
    this.imageCover();
  }

  ngOnInit() {
    this.screen = window.screen.width;

    this.getImageDimensions();
    this.getFrameDimensions();
    this.imageCover();
  }
}
