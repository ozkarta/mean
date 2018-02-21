import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
	{
		path: 'visitor',
		component: HomeComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
	exports: [ RouterModule ]
})
export class VisitorRoutingModule {}
