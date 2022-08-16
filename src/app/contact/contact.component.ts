import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  developer="assets/images/developerContact.png";
  email="assets/images/email.png";
  profile="assets/images/profile.png";
  phone="assets/images/phone.png";
  github="assets/images/github.png";
  location="assets/images/location.png";
  linkedin="assets/images/linkedin.png";
  constructor() { }

  ngOnInit(): void {
  }

}
