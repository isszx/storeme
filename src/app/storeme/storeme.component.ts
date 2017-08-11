import { Component, OnInit } from '@angular/core';
import { Product, Shop, Time, WorkTime } from '../shared/shop';
import { StoremeService } from '../shared/storeme.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-storeme',
  templateUrl: 'storeme.component.html',
  styleUrls: ['storeme.component.scss']
})
export class StoremeComponent implements OnInit {

  map: any;

  shops: Shop[];
  products: Product[] = [];
  selectedShopProducts: Shop;

  getMarkerLat: number;
  getMarkerLng: number;

  sForm: FormGroup;
  pForm: FormGroup;
  post: any;

  // google maps
  lat =  53.9138277;
  lng = 27.5318563;
  markers = [];
  // google maps
  constructor(private _storemeService: StoremeService,
              private fb: FormBuilder) {

    this.shops = [];

    this.sForm = fb.group({
      'name' : [null, Validators.required],
      'address' : [null, Validators.required],
      'wtsh' : [null, Validators.required], // work time start hours
      'wtsm' : [null, Validators.required], // work time start minutes
      'wteh' : [null, Validators.required], // work time end hours
      'wtem' : [null, Validators.required], // work time end minutes
      'validate' : ''
    });
    this.pForm = fb.group({
      'forShop': [null],
      'pName' : [null, Validators.required],
      'description' : [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500)
        ])
      ],
      'validate' : ''
    });
  }

  ngOnInit() {
    this._storemeService
        .getShops()
        .subscribe(shops => {
          this.shops = shops;
          this.generate();
        });
  }

  generate() {
    this.markers = [];
    let i = 0;
    const context = this;
    const intID = setInterval(function () {
      context.createMarkers(context.shops[i]);
      context.markers.push(new Marker(context.getMarkerLat, context.getMarkerLng, context.shops[i].title));
      i += 1;
      if (i === context.shops.length) clearInterval(intID);
    }, 200);
  }

  createMarkers(shop: Shop) {
    this._storemeService
        .getLoacation(shop.address)
        .subscribe(
          data => {
            this.getMarkerLat = Number(JSON.stringify(data.results[0].geometry.location.lat));
            this.getMarkerLng = Number(JSON.stringify(data.results[0].geometry.location.lng));
          },
          error => console.log('Marker status: ' + error),
          () => console.log('Marker status: OK!')
        );
  }

  showHideAdd() {
    if($('#add-forms').class('d-none'))
      $('#add-forms').addClass('d-none');
    else
      $('#add-forms').removeClass('d-none');
  }

  addShop(post) {
    if (this.shops.length > 0) {
      const shop = new Shop(
        this.shops[this.shops.length - 1].id + 1,
        post.name,
        new WorkTime(
          new Time(post.wtsh, post.wtsm),
          new Time(post.wteh, post.wteh)
        ),
        post.address,
        []
      );
      this._storemeService
          .createShop(shop)
          .subscribe(res => this.shops.push(shop));
    } else {
      const shop = new Shop(
        1,
        post.name,
        new WorkTime(
          new Time(post.wtsh, post.wtsm),
          new Time(post.wteh, post.wteh)
        ),
        post.address,
        []
      );
      this._storemeService
          .createShop(shop)
          .subscribe(res => this.shops.push(shop));
    }
  }

  addProduct(post) {
    const product = new Product(
      this.shops[post.forShop - 1].products.length + 1,
      post.pName,
      post.description
    );
    this._storemeService
        .createProduct(this.shops[post.forShop - 1])
        .subscribe(res => this.shops[post.forShop - 1].products.push(product));
  }

  enableEditMode(shop: Shop) {
    const title = $('#shop-title-' + shop.id),
          wt = $('#shop-wt-' + shop.id),
          address = $('#shop-addrs-' + shop.id);

    title.replaceWith('<input id="shop-title-' + shop.id + '" type="text" class="form-control" value="' + title.text() + '"/>');
    wt.replaceWith(
      '<div id="shop-wt-' + shop.id + '"><input id="ssh-' + shop.id +
      '" class="form-control col-3 d-inline-block" type="number" max="23" min="0" maxlength="2" placeholder="00" value="' +
      shop.work_time.start.hours + '"><input id="ssm-' + shop.id +
      '" class="form-control col-3 d-inline-block" type="number" max="59" min="0" maxlength="2" placeholder="00" value="' +
      shop.work_time.start.minutes + '"><input id="seh-' + shop.id +
      '" class="form-control col-3 d-inline-block" type="number" max="23" min="0" maxlength="2" placeholder="00" value="' +
      shop.work_time.end.hours + '"><input id="sem-' + shop.id +
      '" class="form-control col-3 d-inline-block" type="number" max="59" min="0" maxlength="2" placeholder="00" value="' +
      shop.work_time.end.minutes + '"></div>'
    );
    address.replaceWith('<input id="shop-addrs-' + shop.id + '" type="text" class="form-control" value="' + address.text() + '"/>');

    $('#shopEd-' + shop.id).addClass('d-none');
    $('#shopSv-' + shop.id).removeClass('d-none');
  }

  disableEditMode(oldID: number, shop: Shop) {
    $('#shopEd-' + shop.id).removeClass('d-none');
    $('#shopSv-' + shop.id).addClass('d-none');

    const title = $('#shop-title-' + shop.id),
          wt = $('#shop-wt-' + shop.id),
          wtsh = Number($('#ssh-' + shop.id).val()),
          wtsm = Number($('#ssm-' + shop.id).val()),
          wteh = Number($('#seh-' + shop.id).val()),
          wtem = Number($('#sem-' + shop.id).val()),
          address = $('#shop-addrs-' + shop.id);

    let worktime: string;

    title.replaceWith('<span id="shop-title-' + shop.id + '">' + title.val() + '</span>');
    address.replaceWith('<span id="shop-addrs-' + shop.id + '">' + address.val() + '</span>');

    if ((wtsh >= 0 && wtsh <= 23) && (wtsm >= 0 && wtsm <= 59) && (wteh >= 0 && wteh <= 23) && (wtem >= 0 && wtem <= 59)) {
      worktime = wtsh + ':' + (wtsm < 10 ? '0' + wtsm : wtsm) + ' - ' + wteh + ':' + (wtem < 10 ? '0' + wtem : wtem);
      shop.work_time.start.hours = wtsh;
      shop.work_time.start.minutes = wtsm;
      shop.work_time.end.hours = wteh;
      shop.work_time.end.minutes = wtem;
    }
    else {
      worktime = '9:00 - 21:00';
      shop.work_time.start.hours = 9;
      shop.work_time.start.minutes = 0;
      shop.work_time.end.hours = 21;
      shop.work_time.end.minutes = 0;
    }
    wt.replaceWith('<span id="shop-wt-' + shop.id + '">' + worktime + '</span>');

    shop.title = title.val();
    shop.address = address.val();

    this.editShop(oldID, shop);
  }

  editShop(oldID: number, shop: Shop) {
    this._storemeService
        .setShop(oldID, shop)
        .subscribe();
  }

  deleteShop(shop: Shop) {
    $('#shopEd-' + shop.id).removeClass('d-none');
    $('#shopSv-' + shop.id).addClass('d-none');

    this._storemeService
        .deleteShop(shop)
        .subscribe(res => {
          const index = this.shops.indexOf(shop);
          if (index > -1) this.shops.splice(index, 1);
        });
    this.resetAll();
  }

  enableEditProduct(product: Product) {
    const title = $('#prod-title-' + product.id),
          description = $('#prod-description-' + product.id);

    // replace table elements
    title.replaceWith('<input id="prod-title-' + product.id + '" type="text" class="form-control" value="' +
      product.title + '" maxlength="200"/>');
    description.replaceWith('<textarea id="prod-description-' + product.id + '" class="form-control">' +
      product.description + '</textarea>');

    $('#prodEd-' + product.id).addClass('d-none');
    $('#prodSv-' + product.id).removeClass('d-none');
  }

  disableEditProduct(product: Product) {
    const title = $('#prod-title-' + product.id),
          description = $('#prod-description-' + product.id);

    // new product
    const newProd = new Product(product.id, title.val(), description.val());

    // replace table elements
    title.replaceWith('<span id="prod-title-' + product.id + '">' + title.val() + '</span>');
    description.replaceWith('<span id="prod-description-' + product.id + '">' + description.val() + '</span>');

    $('#prodEd-' + product.id).removeClass('d-none');
    $('#prodSv-' + product.id).addClass('d-none');

    // save data
    this.editProduct(newProd, product);
  }

  editProduct(prod: Product, oldP) {
    const indexShop = this.shops.indexOf(this.selectedShopProducts);
    const indexProd = this.shops[indexShop].products.indexOf(oldP);

    this.shops[indexShop].products[indexProd] = prod;

    this._storemeService
        .setShop(this.shops[indexShop].id, this.shops[indexShop])
        .subscribe();
  }

  deleteProduct(prod: Product) {
    const indexShop = this.shops.indexOf(this.selectedShopProducts);
    const indexProd = this.shops[indexShop].products.indexOf(prod);

    this.selectedShopProducts.products.splice(indexProd, 1);
    this.shops[indexShop] = this.selectedShopProducts;

    this._storemeService
        .deleteProduct(this.shops[indexShop])
        .subscribe();
  }

  getProducts(shop: Shop) {
    this.selectedShopProducts = shop;
    this.products = this.shops[this.shops.indexOf(shop)].products;
  }

  resetAll() {
    this.products = [];
    this.selectedShopProducts = undefined;
  }
}

export class Marker {
  constructor(public lat: number, public lng: number, public label: string ) { }
}
