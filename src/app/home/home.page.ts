import { Component } from '@angular/core';
import data from '../../assets/data/company.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private companies = data;
  tableStyle = 'material';
  constructor() {
    console.log(this.companies);
  }

}
