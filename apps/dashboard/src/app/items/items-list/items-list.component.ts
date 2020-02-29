import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '@items/core-data';
@Component({
  selector: 'items-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
