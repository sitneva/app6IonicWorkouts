import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";


@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage{

  constructor(public navCtrl: NavController,
              private workoutService: WorkoutService) {

  }

  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts =>
      console.log(workouts)
    );
  }
}
