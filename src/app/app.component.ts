import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public data:Array<any> = [
		{"title":"Hom","link":"#"},
		{"title":"Gallery","link":"#"},
		{"title":"Portfolio","link":"#"},
		{"title":"Clients","link":"#"},
		{"title":"Contacts","link":"/toto"},
	]

	//ClassName : menu--sebastian, menu--alonso, menu--prospero, menu--viola, menu--antonio,
	// menu-miranda, menu--ariel, menu-caliban, menu--ferdinand, menu--adrian, menu--francisco
	// menu-trinculo, menu--stephano, menu-iris, menu--ceres, menu--juno, menu--maria
	// menu-valentine, menu--puck, menu-titania, menu--bagot, menu--shylock, menu--cordelia
	// menu-horatio, menu--luce, menu-juliet, menu--invulner, menu--tantalid
	public config:any = {
		"class":"menu--alonso",
	}
}
