import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/app/memory/memory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private memory: MemoryService
  ) { }

  toPortfolio() {
    this.router.navigate(['/portfolio', this.memory.getTitle()]);
  }
}
