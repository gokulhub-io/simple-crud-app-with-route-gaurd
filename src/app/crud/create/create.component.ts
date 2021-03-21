import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  customerForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }

  ngOnInit() {
      this.customerForm = this.fb.group({
      id: [''],
      age: [''],
      name: [''],
      address: [''],
      email: [''],
      phone: [''],    
    })
  }

  submitForm(): void {
    this.crudService.create(this.customerForm.value).subscribe(res => {
      this.router.navigateByUrl('/crud/home/')
    )};
  }
}
