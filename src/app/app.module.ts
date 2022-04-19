import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './matrial.module';
// import { OwlModule } from 'ngx-owl-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProductsComponent,
        AboutUsComponent,
        GalleryComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // CarouselModule,
        NgImageSliderModule
        // OwlModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
