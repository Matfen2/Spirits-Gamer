import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDirective } from './card.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ReleaseComponent } from './release/release.component';
import { CardResultsDirective } from './card-results.directive';
import { ConnectComponent } from './connect/connect.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'nav', component: NavComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'release', component: ReleaseComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    NavComponent,
    CardDirective,
    MainComponent,
    ReleaseComponent,
    CarouselComponent,
    CardResultsDirective,
    ConnectComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BodyModule { }
