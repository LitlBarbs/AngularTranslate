import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  public show = false;
  public exercises;

  public exercisesForm = this.fb.group({
    language: [-1],
    a:'',
    a1: '',
    a2: '',
    a3: '',
  });

  public score = 0;
  public addScore = 222;
  public isDisabled = false;

  public defaultColor = 'blue';
  public username;

  public less = this.score > 444;

  public scoreClass = {
    "score1" : this.less,
    "score2" : !this.less
  }

  constructor(private _exercisesService: ExercisesService, private fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this._exercisesService.getExercises()
    .subscribe(
      (value) => {
        this.exercises = value;
        localStorage.setItem('exercises', JSON.stringify(this.exercises));
      },
      (error) => console.log(error),
        () => console.log('completed'));

    this._userService.getUser()
        .subscribe(
          (value) =>  this.username = value,
          (error) => console.log(error),
          () => console.log('completed'));
  }

  checkAnswer(i,j) {
    this.show = true;
    this.isDisabled = true;
    if (this.exercises[i].exercise[j].a == this.exercisesForm.value.a1) {
      // document.getElementById('en1').style.color = 'green';
      this.score += this.addScore;
      this.defaultColor = 'green';
    } else {
      this.defaultColor = 'red';
      // document.getElementById('en1').style.color = 'red';
    }
    if (this.exercises[i].exercise[j].a == this.exercisesForm.value.a2) {
      // document.getElementById('en1').style.color = 'green';
      this.score += this.addScore;
      this.defaultColor = 'green';
    } else {
      this.defaultColor = 'red';
      // document.getElementById('en1').style.color = 'red';
    }
    if (this.exercises[i].exercise[j].a == this.exercisesForm.value.a3) {
      // document.getElementById('en1').style.color = 'green';
      this.score += this.addScore;
      this.defaultColor = 'green';
    } else {
      this.defaultColor = 'red';
      // document.getElementById('en1').style.color = 'red';
    }
    /*for (let j = 0; j < 4; j++) {
        if (this.exercises[j].exercise[0].a == this.exercisesForm.value.a1) {
          // document.getElementById('en1').style.color = 'green';
          this.score += this.addScore;
          this.defaultColor = 'green';
        } else {
          this.defaultColor = 'red';
          // document.getElementById('en1').style.color = 'red';
        }
    }
    return console.log(this.defaultColor,this.score);*/



    /*if (this.exercises[0].exercise[0].a === this.exercisesForm.value.a1) {
      document.getElementById('en1').style.color = 'green';
      this.score += this.addScore;
    } else {
      document.getElementById('en1').style.color = 'red';
    }

    if (this.exercises[0].exercise[1].a === this.exercisesForm.value.a2) {
      document.getElementById('en2').style.color = 'green';
      this.score += this.addScore;
    } else {
      document.getElementById('en2').style.color = 'red';
    }

    if (this.exercises[0].exercise[2].a === this.exercisesForm.value.a3) {
      document.getElementById('en3').style.color = 'green';
      this.score += this.addScore;
    } else {
      document.getElementById('en3').style.color = 'red';
    }

    if (this.exercises[1].exercise[0].a === this.exercisesForm.value.a1) {
      document.getElementById('de1').style.color = 'green';
      this.score += this.addScore;
    } else {
      document.getElementById('de1').style.color = 'red';
    }

    if (this.exercises[1].exercise[1].a === this.exercisesForm.value.a2) {
      document.getElementById('de2').style.color = 'green';
      this.score += this.addScore;
    } else {
      document.getElementById('de2').style.color = 'red';
    }

    if (this.exercises[1].exercise[2].a === this.exercisesForm.value.a3) {
      document.getElementById('de3').style.color = 'green';
      this.score += this.addScore;
    } else {
      document.getElementById('de3').style.color = 'red';
    }*/
  }

  resetExercise() {
    this.exercisesForm.patchValue({
      language: -1,
      a1: '',
      a2: '',
      a3: '',
    });
    this.score = 0;
    this.isDisabled = false;
    this.show = false;
    this.defaultColor = 'blue';
  }

}
