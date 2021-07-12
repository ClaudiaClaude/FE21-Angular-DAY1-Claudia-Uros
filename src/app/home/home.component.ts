import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatever = 'Another kind of text wtw wtw';
  trial = 'text2';

  dest1 = 'Shit tall mountain';

}