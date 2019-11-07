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
  <div>
    <h1>{{ pageTitle }}</h1>
      <pm-products></pm-products> 
  </div>
  `
  
})

export class AppComponent {
  pageTitle: String = 'Acme Product Management'
}
