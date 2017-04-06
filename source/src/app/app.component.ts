import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public data:Array<any> = [
		{"title":"Home","link":""},
		{"title":"Gallery","link":""},
		{"title":"Portfolio","link":""},
		{"title":"Clients","link":""},
		{"title":"Contacts","link":""},
	]

	//ClassName : menu--sebastian, menu--alonso, menu--prospero, menu--viola, menu--antonio,
	// menu-miranda, menu--ariel, menu-caliban, menu--ferdinand, menu--adrian, menu--francisco
	// menu-trinculo, menu--stephano, menu-iris, menu--ceres, menu--juno, menu--maria
	// menu-valentine, menu--puck, menu-titania, menu--bagot, menu--shylock, menu--cordelia
	// menu-horatio, menu--luce, menu-juliet, menu--invulner, menu--tantalid
	public config:any = {
		"class":"menu--alonso",
	}
	public configSebastian:any = {
		"class":"menu--sebastian",
	}
	public configProspero:any = {
		"class":"menu--prospero",
	}
	public configViola:any = {
		"class":"menu--viola",
	}
	public configAntonio:any = {
		"class":"menu--antonio",
	}
	public configMiranda:any = {
		"class":"menu--miranda",
	}
	public configAriel:any = {
		"class":"menu--ariel",
	}
	public configCaliban:any = {
		"class":"menu--caliban",
	}
	public configFerdinand:any = {
		"class":"menu--ferdinand",
	}
	public configAdrian:any = {
		"class":"menu--adrian",
	}
	public configFrancisco:any = {
		"class":"menu--francisco",
	}
	public configTrinculo:any = {
		"class":"menu--trinculo",
	}
	public configStephano:any = {
		"class":"menu--stephano",
	}
	public configIris:any = {
		"class":"menu--iris",
	}
	public configCeres:any = {
		"class":"menu--ceres",
	}
	public configJuno:any = {
		"class":"menu--juno",
	}
	public configMaria:any = {
		"class":"menu--maria",
	}
	public configValentine:any = {
		"class":"menu--valentine",
	}
	public configPuck:any = {
		"class":"menu--puck",
	}
	public configTitania:any = {
		"class":"menu--titania",
	}
	public configBagot:any = {
		"class":"menu--bagot",
	}
	public configShylock:any = {
		"class":"menu--shylock",
	}
	public configCordelia:any = {
		"class":"menu--cordelia",
	}
	public configHoratio:any = {
		"class":"menu--horatio",
	}
	public configLuce:any = {
		"class":"menu--luce",
	}
	public configJuliet:any = {
		"class":"menu--juliet",
	}
	public configInvulner:any = {
		"class":"menu--invulner",
	}
	public configTantalid:any = {
		"class":"menu--tantalid",
	}
}
