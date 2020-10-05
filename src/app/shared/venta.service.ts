import { Venta } from './venta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  formData: Venta= {
    idVenta: null,
    fechaVenta: null,
    totalVenta: null,
    idCliente: null,
  };
  
  
  readonly rootURL = 'https://localhost:44325/api/v1';
  list : Venta[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/ventas', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + '/ventas/'+ this.formData.idVenta, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/ventas/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/ventas')
    .toPromise()
    .then(res => this.list = res as Venta[]);
  }
}
