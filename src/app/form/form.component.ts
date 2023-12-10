import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firmForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private firmService: ListService
  ) {}

  ngOnInit() {
    this.firmForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      reviews: this.formBuilder.array([]),
    });
  }

  get reviews() {
    return this.firmForm.get('reviews') as FormArray;
  }

  addReview() {
    this.reviews.push(this.formBuilder.control(''));
  }

  onSubmit() {
    if (this.firmForm.valid) {
      console.log(this.firmForm.value);
      this.firmService.addFirm(this.firmForm.value);
      this.firmForm.reset();
    }
    console.log(this.firmService.getFirms());
  }
}
