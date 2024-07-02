import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestaurantService } from 'app/core/restaurant.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
    restaurants: any[] = [];
    private subscriptions: Subscription = new Subscription();
    constructor(
        private restaurantService: RestaurantService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getRestaurants();
    }
    getRestaurants() {
        const sub = this.restaurantService
            .getRestaurants()
            .subscribe((restaurants) => {
                this.restaurants = restaurants;
            });
        this.subscriptions.add(sub);
    }

    deleteRestaurant(id: number): void {
        this.restaurantService.deleteRestaurant(id).subscribe((deleted) => {
            if (deleted) {
                this.getRestaurants();
            } else {
                console.error(`Failed to delete restaurant with ID ${id}`);
            }
        });
    }
    editRestaurant(id: number) {
        this.router.navigate(['/create-restaurant'], {
            queryParams: { id: id },
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
