import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofilecompanyaccount',
  templateUrl: './myprofilecompanyaccount.page.html',
  styleUrls: ['./myprofilecompanyaccount.page.scss'],
})
export class MyprofilecompanyaccountPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['myprofilenewsletter'])
    }, 4000);
  }
}
