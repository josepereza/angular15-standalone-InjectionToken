import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje';
import { switchMap } from 'rxjs';
import {Location} from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  personaje!:Personaje;
  selectedId:number=0
constructor(private apiService:ApiService, private route:ActivatedRoute, private location:Location){

}
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.apiService.getOne(this.selectedId);
      })
    ).subscribe(data=>{
      this.personaje=data
    }) 


  }
  onGoBack():void{
    this.location .back();
  }

}
