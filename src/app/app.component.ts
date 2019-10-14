import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  constructor(private _translateService: TranslateService) {
    _translateService.addLangs(['en','de','fr','slo']);
    _translateService.setDefaultLang('en');
  }

}
