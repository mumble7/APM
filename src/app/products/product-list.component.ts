import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ProductService } from './product.service';

@Component({
    
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    //listFilter: string = 'cart'; - This is set to a getter and setter below

    //Filter Getter and Setter
    _listFilter: string;
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value:string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    //Filter set to new array so the original list isn't forgotten
    filteredProducts: IProduct[];
    //This is a typescript option when we don't know what the datatype will be or don't care.
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
      //this.filteredProducts = this.products; - Moved this to the ngOnInit
      //this.listFilter = 'cart'; - Deleted this to see all the list values when you load the page
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void{
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products,
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
      
    }
}