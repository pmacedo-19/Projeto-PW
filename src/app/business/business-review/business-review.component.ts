import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-business-review',
  templateUrl: './business-review.component.html',
  styleUrls: ['./business-review.component.css']
})
export class BusinessReviewComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  onSubmit(Form : NgForm){
    console.log('Review Sunmited!');
    console.log(Form);
  }

  goBack(): void{
    //this.router.navigate(['..']);
    this.location.back();
  }
}
