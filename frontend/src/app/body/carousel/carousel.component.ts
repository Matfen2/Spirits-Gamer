import { Component, OnInit, HostListener } from '@angular/core';
import { SearchService } from '../../shared/search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition ,animate} from '@angular/animations'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations: [
    trigger('showSearch', [
      state(
        'open',
        style({
          height: "400px",
          display: "block",
        })
      ),
      state(
        'closed',
        style({
          heigth: "0px",
          display: "none",
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.4s')]),
    ]),
  ]
})
export class CarouselComponent implements OnInit {
  isSmallScreen: boolean = false;

  // NgSwitch
  tendances = [
    {
      id: 1,
      background: "/assets/pict/helldivers2.jpg",
      title: "HellDivers 2",
      logo: "/assets/pict/helldivers2Logo",
      promo: "-25%",
      price: "29.98 €",
    },
    {
      id: 2,
      background: "/assets/pict/banishersGhostsOfNewEdenWallpaper.jpg",
      title: "Banisher's : Ghosts of New Eden",
      logo: "/assets/pict/banishersGhostsOfNewEdenLogo.png",
      promo: "-24%",
      price: "45.69 €",
    },
    {
      id: 3,
      background: "/assets/pict/finalFantasyVIIRebirth.jpg",
      title: "Final Fantasy VII Rebirth",
      logo: "/assets/pict/ff7Rebirth.jpg",
      promo: "-15%",
      price: "60.49 €",
    }
  ]

  // SEARCH
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

  show: boolean = false;

  showSearch() {
    this.show = !this.show;
  }

  ngOnInit(): void {

  }
}
