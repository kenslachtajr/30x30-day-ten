import { NotifyService } from '@items/core-data';
import { ItemsService, Item } from '@items/core-data';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'items-items-item',
  templateUrl: './items-item.component.html',
  styleUrls: ['./items-item.component.css']
})
export class ItemsItemComponent implements OnInit {
  currentItem;
  originalTitle;

  public get _currentItem() {
    return this.currentItem;
  }

  public set _currentItem(value) {
    this.currentItem = value;
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private itemService: ItemsService,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    const itemId = this.route.snapshot.params && this.route.snapshot.params.id;
    this.currentItem = this.itemService.findItem(itemId);
    this.currentItem
      .pipe(tap((item: Item) => (this.originalTitle = item.name)))
      .subscribe(this.notify.notification('Successfully Loaded An Item'));
  }
}
