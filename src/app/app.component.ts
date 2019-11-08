// // Import
// import { Component } from '@angular/core';

// // Metadata & Template
// // Decorator - A function that adds metadata to a class
// //
// @Component({
//   // Selector is a Directive Name used in HTML. Custom HTML Tag
//   selector: 'pm-root',
//   // Template - {{ binding }}
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// // Class - ES Module 
// export class AppComponent {
//   //PropertyName - Camelcase 
//   // = Data Type and Default Value
//   title = 'Angular: Getting Started';
// }
import { Component } from '@angular/core'


@Component({
  selector: 'pm-root', //product management root component
  //define the template - any valid html
  template:`
    <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{ pageTitle }}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
    </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: String = 'Acme Product Management'
}
