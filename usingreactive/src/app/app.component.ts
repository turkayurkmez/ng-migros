import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';
import { Product, ProductCollection } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'usingreactive';

  products: Observable<Product> = from(ProductCollection);


  constructor() {
    //4 5 6 elemanlarını, observable hale getirdik:
    const value = of(4, 5, 6);
    //let items = from([4,5,6]);
    //1. mapping, eşleşme kuralı: her sayının karesini al
    let square = map((v: number) => v * v);
    //2. Bu kuralı, values'a uygula
    let squaredNums = square(value);
    //3. elde ettiğin observable koleksiyonu içindeki her veriyi ekrana yaz:
    squaredNums.subscribe(x => console.log(x));

    value.pipe(
      filter((x: number) => x % 2 == 0),
      map(n => n * n),
      filter((n: number) => n > 20)
    )
      .subscribe(p => console.log('pipe ile:', p));

  }
  ngOnInit(): void {

    //Product[] 
    // this.products.pipe(
    //   map(products=> products.map(p=>{p.discountedPrice = p.price * (1-p.discountRate)}))        
    // )
    // this.products.subscribe(data => console.log('Apiden gelen Tüm ürünler',data))

    //Product:

    this.products
      .pipe(map(value => {
        let discounted = value.discountedPrice = value.price * (1 - value.discountRate)
        return new Product(value.id, value.name, value.price, value.discountRate, discounted)
      }))
      .subscribe(data => console.log('Sadece bir product:', data));


    //  this.products.pipe(
    //   map(products=> products.map(p=>{p.discountedPrice = p.price * (1-p.discountRate)}))        
    //  ).subscribe(data=>console.log(data))
    // this.products.subscribe(data => {
    //   data.map(d => {
    //     d.discountedPrice = d.price * (1 - d.discountRate);
    //     console.log('Bizim değiştirdiğimiz:',d);
    //   })
    // })

  }
}
