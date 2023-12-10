import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Design } from './design.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private firmsSource = new BehaviorSubject<Design[]>([]);
  public firms$ = this.firmsSource.asObservable();

  constructor() {
    this.initFirms();
  }

  private initFirms() {
    var firms = [
      {
        name: 'Figma',
        type: 'UX/UI',
        reviews: ['5/5', '2/5'],
      },
      {
        name: 'Google edits',
        type: 'Style/Design',
        reviews: ['5/5!', '4/5', '3/5'],
      },
      {
        name: 'Claude Mone',
        type: 'Design/Fashion',
        reviews: [],
      },
    ];
    firms.forEach((firm) => {
      this.addFirm(firm);
    });
  }

  public addFirm(newFirm: Design) {
    const currentFirms = this.firmsSource.getValue();
    this.firmsSource.next([...currentFirms, newFirm]);
  }

  public getFirms(): Design[] {
    return this.firmsSource.getValue();
  }

  public getFirmByName(name: string): Design | undefined {
    var firms = this.firmsSource.getValue();
    return firms.find((firm) => firm.name === name);
  }

  public addReview(name: string, review: string) {
    var firms = this.firmsSource.getValue();
    var firm = firms.find((firm) => firm.name === name);
    if (firm) {
      firm.reviews.push(review);
    }
  }
}
