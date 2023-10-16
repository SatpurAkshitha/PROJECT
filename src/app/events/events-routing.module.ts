import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LatestEventsComponent } from './latest-events/latest-events.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {path:'event',component:EventListComponent},
  {path:'event/:id',component:EventDetailsComponent},
  {path:'event/music',component:MusicComponent},
  {path:'event/wedding',component:WeddingComponent},
  {path:'event/concerts',component:ConcertsComponent},
  {path:'event/festivals',component:FestivalsComponent},
  {path:'event/latest-events',component:LatestEventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
