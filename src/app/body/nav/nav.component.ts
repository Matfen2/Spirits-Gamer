import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  constructor(private searchService: SearchService) { }

  results: any;
  searchedTitle: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  search = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  searchGame() {
    if (this.search.valid) {
      this.loading = true;

      const title = this.search.value.title;

      this.searchService.getGames(title).subscribe(
        (res) => {
          this.results = res.data;
          this.searchedTitle = title ?? '';
          this.loading = false;
          this.errorMessage = '';
        },
        (error) => {
          console.error(error);
          this.errorMessage =
            "Une erreur s'est produite lors de la recherche du jeu.";
          this.loading = false;
        }
      );
    }
  }

  ngOnInit(): void {
      
  }
}
