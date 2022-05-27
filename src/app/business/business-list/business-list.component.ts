import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { BusinessService } from 'src/app/services/business.service';
import { IBusiness } from '../IBusiness.interface';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  Businesses: any;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getAllBusinesses().subscribe(
      data=>{
        this.Businesses=data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
