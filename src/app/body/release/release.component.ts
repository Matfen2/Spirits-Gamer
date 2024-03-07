import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'] // Changer 'styleUrl' à 'styleUrls'
})
export class ReleaseComponent implements OnInit {
  constructor() { }

  moments: string = "sold";
  selectedBackground: string = "";

  solds = [
    {
      id: 1,
      pict: '/assets/pict/nightingale.jpg',
      background: '/assets/pict/nightingaleWallpaper.jpg'
    },
    {
      id: 2,
      pict: '/assets/pict/pacificDrive.jpg',
      background: '/assets/pict/pacificDriveWallpaper.jpg'
    },
    {
      id: 3,
      pict: '/assets/pict/lastEpoch.jpg',
      background: '/assets/pict/lastEpochWallpaper.png'
    }
  ]

  releases = [
    {
      id: 1,
      pict: '/assets/pict/dragonDogma2.jpg',
      background: '/assets/pict/dragonDogma2Wallpaper.jpg'
    },
    {
      id: 2,
      pict: '/assets/pict/riseOfTheRonin.jpeg',
      background: '/assets/pict/riseOfTheRoninWallpaper.jpeg'
    },
    {
      id: 3,
      pict: '/assets/pict/hellblade2.jpg',
      background: '/assets/pict/hellblade2Wallpaper.jpg'
    }
  ]

  showMoments(games: string) {
    this.moments = games;
  }

  changeBackground(background: string) {
    this.selectedBackground = `url(${background})`;
  }

  resetBackground() {
    this.selectedBackground = "";
  }

  ngOnInit(): void {
    this.moments = "sold";
  }
}
