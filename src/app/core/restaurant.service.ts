// restaurant.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import RestaurantList from './RestaurantList';

@Injectable({
    providedIn: 'root',
})
export class RestaurantService {
    private restaurants: any[] = RestaurantList;
    constructor() {}
    getRestaurants(): Observable<any[]> {
        return of(this.restaurants);
    }

    getRestaurantById(id: number): Observable<any | undefined> {
        const foundRestaurant = this.restaurants.find((r) => r.id === id);
        return of(foundRestaurant);
    }
    addRestaurant(newRestaurant: any): Observable<any> {
        const nextId =
            this.restaurants.length > 0
                ? this.restaurants[this.restaurants.length - 1].id + 1
                : 1;
        newRestaurant.id = nextId;
        this.restaurants.push(newRestaurant);
        return of(newRestaurant);
    }
    updateRestaurant(
        id: number,
        updatedRestaurantData: Partial<any>
    ): Observable<any | undefined> {
        const index = this.restaurants.findIndex((r) => r.id === id);
        if (index !== -1) {
            const updatedRestaurant = {
                ...this.restaurants[index],
                ...updatedRestaurantData,
            };
            this.restaurants[index] = updatedRestaurant;
            return of(updatedRestaurant);
        }
        return of(undefined);
    }
    deleteRestaurant(id: number): Observable<boolean> {
        const initialLength = this.restaurants.length;
        this.restaurants = this.restaurants.filter((r) => r.id !== id);
        return of(this.restaurants.length !== initialLength);
    }
}
