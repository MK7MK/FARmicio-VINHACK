import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {

  @Input() itemarray:any;
  constructor() { }

  ngOnInit(): void {
  }

}
