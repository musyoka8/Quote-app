import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  constructor() { }

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  @Output() isUp = new EventEmitter<boolean>();
  @Output() isDown = new EventEmitter<boolean>();
  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }
  addUp(add: boolean){
    this.isUp.emit(add);
  }
  addDown(ad: boolean){
    this.isDown.emit(ad);
  }

  ngOnInit() {
  }

}
