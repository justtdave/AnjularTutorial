import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

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
      <li *ngFor = 'let car of cars; let i = index'>{{car}}<button (click) = "removeCar(i)">x</button></li>
    </ul>
    <form (submit) = "addCar(car.value)">
      <label>Add Car: </label>
      <input type="text" #car/>
  </form>
  </div>
  <form>
    <label>Name: </label>
    <input type="text" name="name" [(ngModel)]="name"/>
  </form>

  <div *ngFor = 'let post of posts'>
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
  `,
  providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  cars: string[];
  showCars: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
    this.name = 'Angular';
    this.email = 'Angular.io';
    this.address = {
      street: '57, Onipetesi Estate',
      city: 'Ikeja',
      state: 'Lagos'
    };
    this.cars = ['Audi R8', 'Porsche Cayenne S', 'Lamborghini Aventador'];
    this.showCars = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  toggleCars(){
    if(this.showCars == false){
      this.showCars = true;
    } else{
      this.showCars = false;
    }
  }
  addCar(car){
    this.cars.push(car);
  }

  removeCar(i){
    this.cars.splice(i, 1);
  }
 }

 interface address {
   street: string;
   city: string;
   state: string;
 }

 interface Post {
  id: number;
  title: string;
  body: string;
}