import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { Customer } from '../crud/customer';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: Customer[] = [];

  constructor(public crudService: CrudService) { }

  public ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Customer[])=>{
      this.customers = data;
    })  
  }
}
