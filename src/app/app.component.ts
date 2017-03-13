import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public data:Array<any> = [
		{"title":"Home","link":"#"},
		{"title":"Gallery","link":"#"},
		{"title":"Portfolio","link":"#"},
		{"title":"Clients","link":"#"},
		{"title":"Contacts","link":"#"},
	]
}
