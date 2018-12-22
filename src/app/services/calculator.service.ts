import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class CalcularService{

add(a,b){
    return (a+b);
}

}