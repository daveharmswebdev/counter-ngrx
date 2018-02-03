import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListDetailComponent } from './list/list-detail/list-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CounterService } from './shared/counter.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ListComponent,
    ListDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
