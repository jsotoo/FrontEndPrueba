import { Venta } from './../../shared/venta.model';
import { VentaService } from './../../shared/venta.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'venta-list',
  templateUrl: './venta-list.component.html',
  styles: []
})
export class VentaListComponent implements OnInit {

  constructor(private service: VentaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(id: Venta) {
    this.service.formData = Object.assign({}, id);
  }

  onDelete(id) {
    if (confirm('Quieres eliminar el Registro?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Eliminado Correctamente', 'Registro de detalles de pago');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
