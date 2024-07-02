import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'app/core/restaurant.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-create-restaurant',
    templateUrl: './create-restaurant.component.html',
    styleUrls: ['./create-restaurant.component.scss'],
})
export class CreateRestaurantComponent implements OnInit {
    restaurantForm: FormGroup;
    restaurantId: any;
    private subscriptions: Subscription = new Subscription();

    constructor(
        private fb: FormBuilder,
        private restaurantService: RestaurantService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.restaurantForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            location: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.restaurantId = parseInt(params['id'], 10);
            const sub = this.restaurantService
                .getRestaurantById(this.restaurantId)
                .subscribe((restaurant) => {
                    this.restaurantForm.patchValue(restaurant);
                });
            this.subscriptions.add(sub);
        });
    }

    onSubmit() {
        if (this.restaurantForm.valid) {
            const formData = this.restaurantForm.value;
            if (!this.restaurantId) {
                const sub = this.restaurantService
                    .addRestaurant(formData)
                    .subscribe((addedRestaurant) => {
                        if (addedRestaurant) {
                            this.router.navigate(['/restaurant-list']);
                        } else {
                            console.error('Failed to add restaurant.');
                        }
                    });
                this.subscriptions.add(sub);
            } else {
                const sub = this.restaurantService
                    .updateRestaurant(this.restaurantId, formData)
                    .subscribe((updatedRestaurant) => {
                        if (updatedRestaurant) {
                            this.router.navigate(['/restaurant-list']);
                        } else {
                            console.error('Failed to update restaurant.');
                        }
                    });
                this.subscriptions.add(sub);
            }
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
