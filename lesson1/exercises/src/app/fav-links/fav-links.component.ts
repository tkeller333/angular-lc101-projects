import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://learn.launchcode.org/', 'https://www.w3schools.com/html/default.asp', 'https://www.google.com/'];
  constructor() { }

  ngOnInit() {
  }

}
