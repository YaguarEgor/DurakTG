import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../common_ui/profile-card/profile-card.component';
import { AdvertBannerComponent } from '../../common_ui/MainPage/advert-banner/advert-banner.component';
import { QuickGameLargeComponent } from '../../common_ui/MainPage/quick-game-large/quick-game-large.component';
import { TopWidgetComponent } from '../../common_ui/MainPage/top-widget/top-widget.component';
import { EarnWidgetComponent } from '../../common_ui/MainPage/earn-widget/earn-widget.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProfileCardComponent, AdvertBannerComponent, QuickGameLargeComponent, TopWidgetComponent, EarnWidgetComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
