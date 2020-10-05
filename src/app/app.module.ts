import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { VentasComponent } from './payment-details/venta.component';
import { VentaComponent } from './payment-details/venta/venta.component';
import { VentaListComponent } from './payment-details/venta-list/venta-list.component';
import { VentaService } from './shared/venta.service';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    VentasComponent,
    VentaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [VentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
