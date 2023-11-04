import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Image, IMAGES } from 'src/image.model';
import { Title } from '@angular/platform-browser';
import { MemoryService } from 'src/app/memory/memory.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  public fullscreen: boolean = false;
  public mobile: boolean = false;

  public imageList: Image[] = IMAGES;
  private imageLength: number = IMAGES.length;

  public index: number = 0;
  public indexTemp: number = 0;

  public animation: string = 'none';
  private sliding: boolean = false;
  public loading: boolean = false;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private memory: MemoryService
  ) { }

  imageLoaded() { this.loading = false; }

  goToPreviousPage() {
    this.animation = 'prev';
    this.goToPage((this.index - 1) < 0 ? this.imageLength - 1 : this.index - 1);
  }

  goToNextPage() {
    this.animation = 'next';
    this.goToPage((this.index + 1) % this.imageLength);
  }

  goToPage(index: number) {
    this.sliding = true;
    this.router.navigate(['/portfolio', this.imageList[index].title]);
  }

  // Keyboard left right
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == 'ArrowLeft') {
      this.goToPreviousPage();
    }
    else if (event.key == 'ArrowRight') {
      this.goToNextPage();
    }
  }

  // Swipe left right
  defaultTouch = { x: 0, time: 0 };
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  handleTouch(event: { touches: any[]; changedTouches: any[]; type: string; timeStamp: number; }) {
    let touch = event.touches[0] || event.changedTouches[0];

    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      if (deltaTime < 500) {
        if (Math.abs(deltaX) > 60) {
          if (deltaX > 0) {
            this.goToPreviousPage();
          } else {
            this.goToNextPage();
          }
        }
      }
    }
  }

  toggleFullscreen() {
    if (this.fullscreen) {
      document.exitFullscreen().catch((err) => { console.log(err); });
    }
    else {
      document.documentElement.requestFullscreen().catch((err) => { console.log(err); });
    }
  }

  @HostListener('document:fullscreenchange', [])
  @HostListener('document:webkitfullscreenchange', [])
  @HostListener('document:mozfullscreenchange', [])
  @HostListener('document:MSFullscreenChange', [])
  fullscreenMode() {
    this.fullscreen = document.fullscreenElement ? true : false;
  }

  findIndex(title: string): number {
    const foundIndex = this.imageList.findIndex(image => image.title === title)

    if (foundIndex < 0 || foundIndex >= this.imageLength) {
      return 0;
    }

    return foundIndex;
  }

  ngOnInit() {
    this.mobile = window.screen.width <= 450;

    this.index = this.findIndex(this.route.snapshot.paramMap.get('title')!);
    
    this.subscription = this.route.params.subscribe((routeParams) => {
      const paramTitle: string = routeParams['title'];
      
      this.indexTemp = this.index;

      if (this.animation == 'none') {
        this.animation = 'fade';
      }
      else {
        if (this.sliding) {
          this.sliding = false;
        }
        else {
          this.animation = 'fade';
        }

        this.loading = true;
      }
      
      this.index = this.findIndex(paramTitle);

      this.title.setTitle(paramTitle);
      this.memory.setTitle(paramTitle);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
