import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  }

  Subscribe() {
    let a = confirm("Are you interested to Subscribe...?")
    if (a) {
      alert("You Subscribed Successfully!")
    } else {
      alert("You not Subscribed...!")
    }
  }
}
