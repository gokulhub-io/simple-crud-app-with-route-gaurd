import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud/crud.service';

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public customerId: string;
  public customerForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public crudService: CrudService
  ){ }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = params['customerId']
    });
    this.customerForm = this.fb.group({
      id: [this.customerId],
      age: [''],
      name: [''],
      address: [''],
      email: [''],
      phone: [''],    
    });   
  }

  public submitForm(): void {
    this.crudService.update(this.customerId, this.customerForm.value).subscribe(res => {
      this.router.navigateByUrl('/crud/home/');
    )};
  }
}
