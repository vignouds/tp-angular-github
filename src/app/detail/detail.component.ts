import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import User from "../model/User";
import Repository from '../model/Repository';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  user: User;
  repositories: Array<Repository>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('idDetail', params.get('idDetail'));
      });
    this.route.data.subscribe(data => this.user = data['user']);
    this.route.data.subscribe(data => this.repositories = data['repositories']);
    console.log("repo "+this.repositories);
    }
  }
