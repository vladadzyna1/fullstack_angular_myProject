import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ReviewComponent } from './review/review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { FirmAddReviewComponent } from './add-review/firm-add-review.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Імпортуйте ваші компоненти

@NgModule({
  declarations: [
    // Оголошення компонентів
    FormComponent,
    ListComponent,
    DetailsComponent,
    ReviewComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],
  providers: [
    // Сервіси та інші залежності
  ],
  bootstrap: [
    // Кореневий компонент, який ініціалізується при запуску додатку
    ListComponent,
    FormComponent,
    LanguageSelectorComponent,
    FirmAddReviewComponent,
  ],
})
export class AppModule {}
