import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymatches2',
  templateUrl: './mymatches2.page.html',
  styleUrls: ['./mymatches2.page.scss'],
})
export class Mymatches2Page implements OnInit {
  slideOpts={
    slidesPerView: 2.5,
  }
  constructor() { }

  ngOnInit() {
  }

}
