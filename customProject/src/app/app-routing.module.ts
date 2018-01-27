import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';

const appRouters: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users', loadChildren: './users/users.module#UsersModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRouters)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}