import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', children: [] }
];

let useHash = false;
// Enable hash routing when HTML5 history API is not supported.
// This will prevent infinite router reloads in IE9.
// useHash = !(window.history && history.pushState);

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: useHash })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
