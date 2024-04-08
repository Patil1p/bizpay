import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bizpay';

  sidebaropen:boolean = true
  constructor(){}

  ngOnInit(): void {
    
  }
  sidetoggle(){
    this.sidebaropen = !this.sidebaropen
  }
}
