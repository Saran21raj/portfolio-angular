import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  screenRecorderShot="assets/images/srshot.png";
  socketShot="assets/images/socketshot.png";
  employeeShot="assets/images/empshot.png";
  diaryShot="assets/images/diaryshot.png";
  animeShot="assets/images/animshot.png";
  htmlIcon="assets/images/htmlicon.png";
  cssIcon="assets/images/cssicon.png";
  jsIcon="assets/images/javascripticon.png";
  reactIcon="assets/images/reacticon.png";
  nodeIcon="assets/images/nodejsicon2.png";
  mongoDBIcon="assets/images/mongodbicon.png";
  awsIcon="assets/images/awsicon.png";
  constructor() { }

  ngOnInit(): void {
  }

}
