import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { BeerService } from './api/beer-manager/v1/services';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { BeerAddComponent } from './beer-add/beer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerInfoComponent,
    BeerEditComponent,
    BeerAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    MultiSelectModule,
    TooltipModule,
    ToolbarModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
