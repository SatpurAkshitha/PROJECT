import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LatestEventsComponent } from './latest-events/latest-events.component';
import { FeaturedEventsComponent } from './featured-events/featured-events.component';
import { CategoriesComponent } from './categories/categories.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { MusicComponent } from './music/music.component';



@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent,
    LatestEventsComponent,
    FeaturedEventsComponent,
    CategoriesComponent,
    WeddingComponent,
    ConcertsComponent,
    FestivalsComponent,
    MusicComponent,
    
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports:[LatestEventsComponent,
    WeddingComponent,
    ConcertsComponent,
    FestivalsComponent,
    MusicComponent
  ]
})
export class EventsModule {}
