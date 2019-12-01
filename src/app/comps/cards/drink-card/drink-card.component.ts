import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../../services/drink.service';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent implements OnInit {

  constructor(public drinksService:DrinkService) { }

  ngOnInit() {
  }

}
