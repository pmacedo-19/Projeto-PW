import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Business-detail',
  templateUrl: './Business-detail.component.html',
  styleUrls: ['./Business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
  public businessId!: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const Id = 'Id';
    this.businessId = this.route.snapshot.params[Id];
  }

  onOpenReview() {
    this.router.navigate(['business-review', ])
  }

}
