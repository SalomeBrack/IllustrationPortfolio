import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Image, IMAGES } from 'src/image.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  public imageList: Image[] = IMAGES;
  public index: number = 0;
  public expand: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  identify(index: number, image: Image): string {
    return image.title;
  }

  goToClicked(title: string) {
    this.router.navigate(['/portfolio', title]);
  }

  toggleText() {
    this.expand = !this.expand;
  }

  ngOnInit() {
    const descr = document.getElementById('myDescription')!;

    this.subscription = this.route.params.subscribe((routeParams) => {
      this.expand = false;

      this.index = this.imageList.findIndex(image => image.title === routeParams['title'])

      if (this.index < 0 || this.index >= this.imageList.length) {
        this.index = 0;
      }

      if (this.imageList[this.index].description) {
        descr.innerHTML = this.imageList[this.index].description!;
      }
      else {
        descr.innerHTML = '(no description)';
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
