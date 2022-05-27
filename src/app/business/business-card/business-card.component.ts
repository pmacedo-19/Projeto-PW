import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {

  Business: any = {
    "Id":1,
    "Name":"Restaurant 1",
    "Type":"Restaurant"
  }

}
