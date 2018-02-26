import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', children: [] }];

const useHash = false;
// Enable hash routing when HTML5 history API is not supported.
// This will prevent infinite router reloads in IE9.
// useHash = !(window.history && history.pushState);

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
