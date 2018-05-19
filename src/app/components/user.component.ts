import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Website: {{email}}</p>
  <p>Address: {{address.street}}, {{address.city}}, {{address.state}}</p>
  <button (click)="toggleCars()">{{showCars ? 'Hide Cars' : 'Show Cars'}}</button>
  <div *ngIf ="showCars">
    <h3>Cars</h3>
    <ul>
      <li *ngFor = 'let car of cars'>{{car}}</li>
    </ul>
  </div>
  `,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  cars: string[];
  showCars: boolean;

  constructor(){
    this.name = 'Angular';
    this.email = 'Angular.io';
    this.address = {
      street: '57, Onipetesi Estate',
      city: 'Ikeja',
      state: 'Lagos'
    };
    this.cars = ['Audi R8', 'Porsche Cayenne S', 'Lamborghini Aventador'];
    this.showCars = false;
  }
  toggleCars(){
    if(this.showCars == false){
      this.showCars = true;
    } else{
      this.showCars = false;
    }
  }
 }

 interface address {
   street: string;
   city: string;
   state: string;
 }