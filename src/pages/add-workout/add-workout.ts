import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workout";

@Component({
  selector: 'page-add-workout',
  templateUrl: 'addWorkout.html'
})
export class AddWorkoutPage {
  public title: String;
  public note: String;
  public type: String;
  public result:any;

  constructor(public navCtrl: NavController,
              private workoutService: WorkoutService) {

  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    //Add workout
    this.workoutService.addWorkout(workout)
      //.map(data => console.log(data))
      .subscribe(data => {
      console.log(data);
      this.result = data;
    })

    this.navCtrl.push(WorkoutsPage);
  }

}
