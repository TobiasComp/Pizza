import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { PizzaComponent } from './comps/panels/pizza/pizza.component';
import { SaladComponent } from './comps/panels/salad/salad.component';
import { DrinkComponent } from './comps/panels/drink/drink.component';
import { PizzaCardComponent } from './comps/cards/pizza-card/pizza-card.component';
import { DrinkCardComponent } from './comps/cards/drink-card/drink-card.component';
import { SaladCardComponent } from './comps/cards/salad-card/salad-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PaginatorComponent,
    PizzaComponent,
    SaladComponent,
    DrinkComponent,
    PizzaCardComponent,
    DrinkCardComponent,
    SaladCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
