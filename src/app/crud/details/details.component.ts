import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud/crud.service';
import { Customer } from '../crud/customer';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  customer: Customer;
  constructor(public crudService: CrudService, public route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.params.subscribe(params => {
      id = params['customerId']
    });
    this.crudService.getById(id).subscribe((data: Customer)=>{
      this.customer = data;
    })  
  }
}
