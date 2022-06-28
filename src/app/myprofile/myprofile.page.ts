import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['myprofilenewsletter'])
    }, 4000);
   }

  }


