import { Injectable } from '@angular/core';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private firmService: ListService) {}

  addReview(firmId: string, review: string) {
    this.firmService.addReview(firmId, review);
  }

  calculateAverageRating(name: string): number {
    var firm = this.firmService.getFirmByName(name);
    if (!firm) {
      return 0;
    }
    const reviews = firm.reviews;
    if (!reviews.length) return 0;

    const totalRating = reviews.reduce((acc, review) => {
      const rating = parseInt(review.split('/')[0]);
      return acc + rating;
    }, 0);

    return totalRating / reviews.length;
  }
}
