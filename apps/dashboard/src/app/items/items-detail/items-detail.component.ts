import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '@items/core-data';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'items-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {
  currentItem: Item;
  originalTitle;

  @Input() form: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set item(value) {
    this.originalTitle = value.title;
    this.currentItem = Object.assign({}, value);
  }

  constructor() {}

  ngOnInit() {}

  saveForm(formDirective: NgForm) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
