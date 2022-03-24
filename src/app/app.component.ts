import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  subs$: Subscription = new Subscription();
  constructor(private translate: TranslateService, private platform: Platform) {
    this.translate.addLangs(['en', 'de']);
    const browserLanguage = this.translate.getBrowserLang();
    this.translate.use(browserLanguage.match(/en|de/) ? browserLanguage : 'en');
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.subs$.add(
        this.platform.backButton.subscribe(() => {
          this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
              outlet.pop();
            } else {
              navigator['app'].exitApp();
            }
          });
        })
      );
    });
  }
}
