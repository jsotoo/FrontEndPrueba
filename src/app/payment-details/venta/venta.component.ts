import { VentaService } from './../../shared/venta.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styles: []
})
export class VentaComponent implements OnInit {

  constructor(private service: VentaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      idVenta: 0,
      fechaVenta: new Date(),
      totalVenta: 0,
      idCliente: 0,
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.idVenta == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Creado Correctamentamente', 'Registro de detalles de pago');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Actualizado Correctamente', 'Registro de detalles de pago');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
