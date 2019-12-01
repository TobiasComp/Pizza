import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../../services/drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  constructor(public drinksService:DrinkService) { 
    console.log("I'm at drink panel");
    
    
  }

  ngOnInit() {
  }

}
