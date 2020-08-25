import {Component} from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../app.component.scss']
})
export class AppComponent {
  title = 'corona-turkey';
  tabName = 'country';

  selectedCountry = 'Turkey';
  selectedWorldOption = 'Vakalar';
  selectedGraphType = 'line';
  selectedMinimumCase = 100;

  countries = ['Turkey', 'Iran', 'Italy', 'United States of America'];
  worldDataOptions = ['Vakalar', 'Ölümler', 'İyileşenler'];
  graphTypes = ['line', 'bar'];
  minimumCases = [0, 25, 50, 75, 100];

  dropdownList = [
    { item_id: 1, item_text: 'Turkey' },
    { item_id: 2, item_text: 'USA' },
    { item_id: 3, item_text: 'Italy' },
    { item_id: 4, item_text: 'Spain' },
    { item_id: 5, item_text: 'UK' }
  ];
  selectedItems = [
    { item_id: 3, item_text: 'Italy' },
    { item_id: 4, item_text: 'Spain' }
  ];

  dropdownSettings: IDropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    enableCheckAll: false,
    maxHeight: 250
  };

  changeTab(tabName: string) {
    this.tabName = tabName;
    console.log(tabName);
  }

  chooseCountry(country: string) {
      console.log(country);
  }

  isActiveTab(tabName: string) {
    if (this.tabName === tabName) {
      return 'active-tab';
    }
  }
}
