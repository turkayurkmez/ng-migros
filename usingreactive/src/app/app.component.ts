import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, from, map, of, tap } from 'rxjs';
import { Product, ProductCollection } from './models/product.model';



const subject = new BehaviorSubject(100);

subject.subscribe(x=>console.log(x));
subject.subscribe(console.log);
subject.subscribe(console.log);

subject.next(130);
subject.next(150);
subject.subscribe(console.log);
subject.next(190);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'usingreactive';

  products: Observable<Product> = from(ProductCollection);
  productList: Product[] = [];

  



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
        console.log("'map'in hesapladığı fiyat", discounted)
        return new Product(value.id, value.name, value.price, value.discountRate, discounted)
      }),
        tap(data => console.log('burası tamalanmadan önce await öncesi', data))
      )
      .subscribe(data => {
        console.log('Subscribe (tamamlandıktan - await sonrası):', data);
        this.productList.push(data);

      });




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
