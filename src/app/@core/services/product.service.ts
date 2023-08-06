import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
interface IResponse {
  isError?: boolean;
  message?: string;
  data: any;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpOptions = {};
  token: any;
  private domain = environment.baseUrl;
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  getCategories(): Observable<IResponse> {
    return this.http.get<IResponse>(this.domain.concat(`products/categories`));
  }
  getProductByCatName(cat: string): Observable<IResponse> {
    return this.http.get<IResponse>(
      this.domain.concat(`products/category/${cat}`)
    );
  }
  getProducts(): Observable<IResponse> {
    return this.http.get<IResponse>(this.domain.concat(`products`));
  }
  getProductById(id: string): Observable<IResponse> {
    return this.http.get<IResponse>(this.domain.concat(`products/${id}`));
  }
}
