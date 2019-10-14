import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component' ;
import { TheoryComponent } from './theory/theory.component';
import { ExerciseComponent } from './exercise/exercise.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'theory', component: TheoryComponent },
  {path: 'exercise', component: ExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
