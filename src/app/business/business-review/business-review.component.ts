import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-business-review',
  templateUrl: './business-review.component.html',
  styleUrls: ['./business-review.component.css']
})
export class BusinessReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(Form : NgForm){
    console.log('Review Sunmited!');
    console.log(Form);
  }
}
