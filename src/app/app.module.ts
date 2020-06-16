import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightQuoteDirective } from './highlightquote.directive';
import { TimeCountPipe } from './time-count.pipe';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightQuoteDirective,
    TimeCountPipe,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                              
    ReactiveFormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
