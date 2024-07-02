import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/core/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  restaurants: any[] = [];
  constructor( private restaurantService: RestaurantService,) { }

  ngOnInit(): void {
    this.getRestaurants()
  }
  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
        this.restaurants = restaurants;
        console.log('this.restaurants ', this.restaurants);
    });
}

}
