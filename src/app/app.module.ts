import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { pageComponents } from './pages';
import { StoreService } from './store/store.service';
import { StoreState, clearState, StoreReducers } from './store/store.reducers';

export const metaReducers: Array<MetaReducer<StoreState>> = [clearState];
export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent,
    pageComponents
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    LayoutModule,
    SharedModule,
    StoreModule.forRoot(StoreReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false
      }
    })
  ],
  providers: [StoreService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
