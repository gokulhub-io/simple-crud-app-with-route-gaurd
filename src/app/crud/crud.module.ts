import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { CrudService } from './crud/crud.service';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CrudService,
  ]
})
export class CrudModule { }
