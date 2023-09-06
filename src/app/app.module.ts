import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS }  from '@angular/common/http'
import { AppComponent } from './app.component';
import { CommonHttpInterceptor } from './common-http.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // 200 APIS 
  // 200 objects
  providers: [
    {
      provide   : HTTP_INTERCEPTORS,
      useClass  : CommonHttpInterceptor,
      multi     : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
