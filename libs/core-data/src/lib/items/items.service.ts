import { Injectable } from '@angular/core';
import { Item } from './items';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  model = 'items';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findItem(itemId: Item) {
    return this.httpClient.get(this.getUrlForId(itemId));
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(item: Item) {
    return this.httpClient.post(this.getUrl(), item);
  }

  delete(item: Item) {
    return this.httpClient.delete(this.getUrlForId(item.id));
  }

  update(item: Item) {
    return this.httpClient.put(this.getUrlForId(item.id), item);
  }
}
