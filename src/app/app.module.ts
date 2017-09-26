import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './core/app.component';
import {HomeComponent} from './pages/home/home.component';
import {CreateComponent} from './pages/create/create.component';
import {CompleteComponent} from './pages/complete/complete.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {petTagReducer} from './core/pet-tag.reducer';
import {TagShapeComponent} from './pages/create/tag-shape/tag-shape.component';
import {FormsModule} from '@angular/forms';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';
import { TagExtrasComponent } from './pages/create/tag-extras/tag-extras.component';
import { TagPreviewComponent } from './tag-preview/tag-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent,
    TagPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({state: petTagReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
