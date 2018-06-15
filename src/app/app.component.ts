import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PATH_DETAIL, PATH_HOME} from "./constantes.routes";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  pseudo:string;

constructor(private router:Router){}



ngOnInit() {
this.router.events.subscribe((event) => {
console.log('EVENTS', event);
})
}
}
