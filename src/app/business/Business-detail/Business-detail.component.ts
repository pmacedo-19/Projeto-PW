import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import businessesData from '../../../data/businesses.json';
import { IBusiness } from '../IBusiness.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Business-detail',
  templateUrl: './Business-detail.component.html',
  styleUrls: ['./Business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
  public businessId!: number;
  @Input() business : any;

  businessesList:{ Id: number; Name: string; Type: string; Discription: string; Image?: string}[] = businessesData;

  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    const Id = 'Id';
    this.businessId = this.route.snapshot.params[Id];
  }

  onOpenReview() {
    this.router.navigate(['business-review', this.businessId])
  }

  //const filteredData = businessesList

  // getByIdInit(): void {
  //   this.http.get('data/businesses.json').subscribe(
  //     data=>{
  //       this.Businesses=data;
  //       console.log(data)
  //     }
  //   )
  // }




}
