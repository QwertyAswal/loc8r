import { Component, Input, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location, Review } from '../location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location

  constructor(private loc8rService: Loc8rDataService) { }

  public formVisible: boolean = false;

  public review: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formError: string;

  private formIsValid(): boolean {
    if (this.review.author && this.review.rating && this.review.reviewText)
      return true;
    return false;
  }

  private resetAndHideForm(): void {
    this.formVisible = false;
    this.review.author = '';
    this.review.rating = 5;
    this.review.reviewText = '';
    this.formError = '';
  }

  public onReviewSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      this.loc8rService.addReviewById(this.location._id, this.review)
        .then((review: Review) => {
          let reviews = this.location.reviews.slice(0);
          reviews.unshift(review);
          this.location.reviews = reviews;
          this.resetAndHideForm();
        });
    }
    else {
      this.formError = 'All fields are required. Please try again.'
    }
  }

  ngOnInit(): void {
  }

}
