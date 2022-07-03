import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-fitnesslist',
  templateUrl: './fitnesslist.component.html',
  styleUrls: ['./fitnesslist.component.css']
})
export class FitnesslistComponent implements OnInit {

  constructor(private fitnessService: FitnessService) { }

  exercises: any = [];
  editingExercise: any;
  title: string = '';

  getExercises() {
    this.fitnessService.getItems().subscribe(data => {
      console.log(data);
      this.exercises = data;
    })
  }

  addExercises() {
    this.fitnessService.addItems(this.title).subscribe(data => {
      console.log(data);
      this.exercises.push(data);
    })
  }

  editExercises() {
    if(!this.editingExercise) {
      return
    }
    this.fitnessService.editItems(this.editingExercise.id, this.title).subscribe(data => {
      console.log(data);
      this.editingExercise = null;
      this.title = '';
      this.getExercises();
    })
  }

  selectExercises(editingExercise: any) {
    this.editingExercise = editingExercise;
    this.title = editingExercise.title;
  }

  deleteExercises(id: number) {
    this.fitnessService.deleteItems(id).subscribe(data => {
      console.log(data);
      this.getExercises();
    })
  }

  ngOnInit(): void {
    this.getExercises();
  }

}
