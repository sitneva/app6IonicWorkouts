import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {map} from "rxjs/operators";
import {Headers, RequestOptions} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class WorkoutService{
  http:any;
  apiKey: String;
  workoutUrl: String;

  constructor(http:HttpClient){
    this.http = http;
    this.apiKey = "Pv5h1gbhW446adouONDaPJSeHOz-cSta";
    this.workoutUrl = 'https://api.mlab.com/api/1/databases/workoutapp6/collections/workouts'

  }

  getWorkouts() {
    return this.http.get(this.workoutUrl+`?apiKey=`+this.apiKey);
  }

  addWorkout(workout) {
    //let body = JSON.stringify(workout);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.workoutUrl+`?apiKey=`+this.apiKey, workout, options)


  }
}
