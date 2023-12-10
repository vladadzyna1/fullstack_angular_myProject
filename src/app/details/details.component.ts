import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { fadeInOut } from '../animations';
import { Design } from '../design.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [fadeInOut],
})
export class DetailsComponent implements OnChanges {
  @Input() firm: Design | null = null;
  showDetails: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['firm']) {
      this.resetAnimation();
    }
  }

  private resetAnimation() {
    this.showDetails = false;
    setTimeout(() => {
      this.showDetails = true;
    }, 0);
  }
}
