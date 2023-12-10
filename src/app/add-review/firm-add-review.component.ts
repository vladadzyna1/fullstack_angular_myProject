import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListService } from '../list.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-firm-component',
  templateUrl: './firm-add-review.component.html',
  styleUrls: ['./firm-add-review.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class FirmAddReviewComponent {
  firmName: string = '';
  reviewText: string = '';

  constructor(
    private reviewService: ReviewService,
    private firmService: ListService
  ) {}

  addReview() {
    const firm = this.firmService.getFirmByName(
      this.firmName
    );
    if (firm) {
      this.reviewService.addReview(firm.name, this.reviewText);
      console.log(
        `Відгук додано для ${this.firmName}: ${this.reviewText}`
      );

      this.firmName = '';
      this.reviewText = '';
    } else {
      console.log('Ресторан не знайдено.');
    }
  }
}
