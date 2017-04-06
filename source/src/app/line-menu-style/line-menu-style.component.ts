import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'line-menu-style',
  templateUrl: './line-menu-style.component.html',
  styleUrls: ['./line-menu-style.component.css']
})
export class LineMenuStyleComponent implements OnInit {

  constructor() { }

	public _data:any;
	public _active:any;
	public _config:any;

	public activated(item:any){
		console.log(item);
		this._active = item;
	}

	@Input()
	public set active(active:any){
		this._active = active;
	}

	@Input()
	public set config(config:any){
		this._config = config;
	}


	@Input()
	public set data(data:any){
		this._data = data;
	}
  ngOnInit() {
  }

}



