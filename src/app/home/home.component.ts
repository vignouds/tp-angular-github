import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PATH_DETAIL} from "../constantes.routes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  pseudo:string="";

  navigateToDetail(){
    this.router.navigate([PATH_DETAIL, this.pseudo]);
  }

  ngOnInit() {
  }
}
