import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LeftNavComponent } from "./left-nav/left-nav.component";
import { BannerComponent } from "./content/banner/banner.component";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";
import { LogoComponent } from "./logo/logo.component";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { FooterComponent } from "./footer/footer.component";
import { BabySideComponent } from "./baby-side/baby-side.component";
import { ForAllComponent } from "./for-all/for-all.component";
import { IconComponent } from "./icon/icon.component";
import { HeaderNavigationComponent } from "./header/header-navigation/header-navigation.component";
import { HeaderBtnsComponent } from "./header/header-btns/header-btns.component";
import { MenuComponent } from "./menu/menu.component";
import { ToogleIconsComponent } from "./left-nav/toogle-icons/toogle-icons.component";
import { ArticleComponent } from "./content/article/article.component";
import { ArticleBtnComponent } from "./content/article/article-btn/article-btn.component";
import { ArticleInfComponent } from "./content/article/article-inf/article-inf.component";
import { SortBlockComponent } from "./content/sort-block/sort-block.component";
import { PreviewComponent } from "./content/preview/preview.component";
import { GridPreviewComponent } from "./content/grid-preview/grid-preview.component";
import { ItemPreviewComponent } from "./content/grid-preview/item-preview/item-preview.component";
import { PreviewBannerComponent } from "./content/preview-banner/preview-banner.component";
import { PreviewPictureRightComponent } from "./content/preview-picture-right/preview-picture-right.component";
import { LoadMoreComponent } from "./content/load-more/load-more.component";
import { SubscribeFormComponent } from "./footer/subscribe-form/subscribe-form.component";
import { SocialsComponent } from "./footer/socials/socials.component";
import { IconSerchComponent } from "./icon/icon-serch/icon-serch.component";
import { IconBookmarkComponent } from "./icon/icon-bookmark/icon-bookmark.component";
import { IconCalendarComponent } from "./icon/icon-calendar/icon-calendar.component";
import { IconEyeComponent } from "./icon/icon-eye/icon-eye.component";
import { IconSpinnerComponent } from "./icon/icon-spinner/icon-spinner.component";
import { IconCtrlComponent } from "./icon/icon-ctrl/icon-ctrl.component";
import { IconFacebookComponent } from "./icon/icon-facebook/icon-facebook.component";
import { IconInstagramComponent } from "./icon/icon-instagram/icon-instagram.component";
import { IconTwitterComponent } from "./icon/icon-twitter/icon-twitter.component";
import { IconParagraphLeftComponent } from "./icon/icon-paragraph-left/icon-paragraph-left.component";
import { IconCrossComponent } from "./icon/icon-cross/icon-cross.component";
import { IconArrowRightComponent } from "./icon/icon-arrow-right/icon-arrow-right.component";

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
    ToogleIconsComponent,
    ArticleComponent,
    ArticleBtnComponent,
    ArticleInfComponent,
    SortBlockComponent,
    PreviewComponent,
    GridPreviewComponent,
    ItemPreviewComponent,
    PreviewBannerComponent,
    PreviewPictureRightComponent,
    LoadMoreComponent,
    SubscribeFormComponent,
    SocialsComponent,
    IconSerchComponent,
    IconBookmarkComponent,
    IconCalendarComponent,
    IconEyeComponent,
    IconSpinnerComponent,
    IconCtrlComponent,
    IconFacebookComponent,
    IconInstagramComponent,
    IconTwitterComponent,
    IconParagraphLeftComponent,
    IconCrossComponent,
    IconArrowRightComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
