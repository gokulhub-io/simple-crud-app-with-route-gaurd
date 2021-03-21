import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouteGuardService } from './helper/route-guard.service';

const routes: Routes = [
  { 
    path: 'crud',
    redirectTo: 'crud/home',
    pathMatch: 'full',
  },
  { 
    path: 'crud/home',
    component: HomeComponent,
  },
  { 
    path: 'crud/details/:customerId',
    component: DetailsComponent,
    canActivate: [RouteGuardService],
  },
  { 
    path: 'crud/create',
    component: CreateComponent,
  },
  { 
    path: 'crud/update/:customerId',
    component: UpdateComponent,
    canActivate: [RouteGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
