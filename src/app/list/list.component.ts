import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Design } from '../design.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  firms: Design[];
  constructor(
    private firmService: ListService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.firms = firmService.getFirms();
  }

  ngOnInit() {
    console.log(this.firms);
    this.firmService.firms$.subscribe((updatedFirms: Design[]) => {
      this.firms = updatedFirms;
      this.changeDetector.detectChanges();
      console.log(2, this.firms);
    });
  }

  selectedFirm: Design | null = null;

  selectFirm(firm: Design): void {
    if (firm == this.selectedFirm) {
      this.selectedFirm = null;
      return;
    }
    this.selectedFirm = null;

    setTimeout(() => {
      this.selectedFirm = firm;
    }, 0);
  }
}
