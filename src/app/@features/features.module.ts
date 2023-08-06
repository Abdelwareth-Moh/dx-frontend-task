import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, UserReviewsComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
