import { Component } from '@angular/core';
import { ConnectableConfig } from 'rxjs/internal/observable/connectable';
import { cotailService } from './services/coctail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  urlImage = '';
  ingredientsList: any = [];

  constructor(coctail: cotailService) {
    coctail.getCoctailData().subscribe((res: any) => {
      //  alert(JSON.stringify(res))
      let data = res.drinks[0];
      this.title = data.strDrink;
      this.urlImage = data.strDrinkThumb;
      let a = Object.values(data);
      for (let i = 17; i < 32; i++) {
        if (a[i] != null) {
          this.ingredientsList.push(a[i]);
        }
      }
    });
  }
}
