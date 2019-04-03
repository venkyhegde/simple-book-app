import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-rate',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
    @Input() rating: number;
    ratingWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // creating a new event emmiter to pass as event to paret compoent.
  // this defines how many starts to show.
  // impement onChange hook to update rating width property when rating changes.
  ngOnChanges(): void {
    this.ratingWidth = this.rating * 95 / 5;
  }
  onClick(): void {
    // rise an event when the rating is clicked.
    this.notify.emit(`The rating ${this.rating} was clicked`);
  }


}
