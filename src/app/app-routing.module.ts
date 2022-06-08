import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { SerieComponent } from './components/serie/serie.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  { path: '', component: SerieComponent },
  { path: 'spinner/:id', component: SpinnerComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
