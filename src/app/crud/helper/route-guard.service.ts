import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {
    
    canActivate(): boolean {
        return true;
    }
}