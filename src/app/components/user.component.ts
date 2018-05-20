import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
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
    }
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