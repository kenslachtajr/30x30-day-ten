import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '@items/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from '@items/core-data';

@Component({
  selector: 'items-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  form: FormGroup;
  selectedItem: Item;
  items$;

  constructor(
    private itemsService: ItemsService,
    private fb: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.resetItem();
    this.getItems();
  }

  selectItem(item: Item) {
    this.form.patchValue(item);
    this.selectedItem = item;
  }

  getItems() {
    this.items$ = this.itemsService.all();
  }

  resetItem() {
    const emptyItem: Item = {
      id: null,
      name: '',
      description: ''
    };
    this.selectItem(emptyItem);
  }

  createItem(item: Item) {
    this.itemsService.create(item).subscribe(r => {
      this.notify.notification('Successfully Created An Item');
      this.resetItem();
      this.getItems();
    });
  }

  cancel() {
    this.resetItem();
    this.form.reset();
  }

  saveItem(item: Item) {
    if (item.id) {
      this.updateItem(item);
    } else {
      this.createItem(item);
    }
  }

  updateItem(item: Item) {
    this.itemsService.update(item).subscribe(r => {
      this.notify.notification('Successfully Updated An Item');
      this.resetItem();
      this.getItems();
    });
  }

  deleteItem(item: Item) {
    this.itemsService.delete(item).subscribe(r => {
      this.notify.notification('Successfully Deleted An Item');
      this.resetItem();
      this.getItems();
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }
}
