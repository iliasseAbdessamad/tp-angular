import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProductComponent } from './components/product/product';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductComponent}
];
