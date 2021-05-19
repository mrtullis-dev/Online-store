import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template:`
  <div><h1>{{PageTitle}}</h1>
      <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  PageTitle: string = 'Don\'t do drugz';
  
}
