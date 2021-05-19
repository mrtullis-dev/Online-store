import { Component } from "@angular/core";
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'

})
export class ProductListComponent {
    pageTitle = 'Product list';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    listFilter = 'cart';
    products: any[] = [
        {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "208h082fg08",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/simp.png"
        },
        {
        "productId": 5,
        "productName": "food",
        "productCode": "608h8",
        "releaseDate": "may 14, 2021",
        "description": "15 gallon capacity",
        "price": 12.00,
        "starRating": 3.5,
        "imageUrl": "assets/images/hatdog.jpg"
        },
      ];

      toggleImage(): void {
        this.showImage = !this.showImage;
      }
}
