import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  constructor(private searchService: SearchService) {}

  showCarousel: boolean = true;

  ngOnInit(): void {

  }

  toggleCarousel(): void {
    this.showCarousel = !this.showCarousel;
  }
}
