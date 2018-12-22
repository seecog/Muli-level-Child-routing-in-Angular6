import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BrandComponent } from './brand/brand.component';
import { ItemsComponent } from './items/items.component';
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UsersComponent,
    UserComponent,
    ClothingComponent,
    ElectronicsComponent,
    BrandComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '',component : HomeComponent},
      {path : 'about',component : AboutComponent},
      {path : 'contact',component : ContactComponent},
      {path : 'clothing',component : ClothingComponent,children : [
        {path : 'brand/:id',component :  BrandComponent, children : [
          {path : 'items/:id',component : ItemsComponent}
        ]}
      ]},
      {path : 'electronics',component : ElectronicsComponent},
      {path : 'users',component : UsersComponent,children : [
        {path : 'info/:id',component : UserComponent}
      ]},
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
