import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { FooterComponent } from './footer/footer.component';
import { BabySideComponent } from './baby-side/baby-side.component';
import { ForAllComponent } from './for-all/for-all.component';
import { IconComponent } from './icon/icon.component';
import { HeaderNavigationComponent } from './header/header-navigation/header-navigation.component';
import { HeaderBtnsComponent } from './header/header-btns/header-btns.component';
import { MenuComponent } from './menu/menu.component';
import { ToogleIconsComponent } from './left-nav/toogle-icons/toogle-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    BannerComponent,
    ContentComponent,
    HeaderComponent,
    LogoComponent,
    DropdownMenuComponent,
    FooterComponent,
    BabySideComponent,
    ForAllComponent,
    IconComponent,
    HeaderNavigationComponent,
    HeaderBtnsComponent,
    MenuComponent,
    ToogleIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
