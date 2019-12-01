import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor() { }

  drinks = [
    { name: "coke", price: 2.00, img:"./assets/images/coke.jpg" },
    { name: "sprite", price: 2.00, img:"./assets/images/sprite.jpg" },
    { name: "water", price: 1.00, img: "./assets/images/water.jpg"},
    { name: "jump", price: 1.50, img: "./assets/images/jump.jpg"},
    { name: "beer", price: 2.50, img:"./assets/images/beer.jpg" }
  ];
  currentDrinkIndex = 0;
  currentDrink = this.drinks[this.currentDrinkIndex];
}
