import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Personaje } from 'src/app/interfaces/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personajes:Personaje[]=[]
constructor(private apiService:ApiService, private router:Router){

}
  ngOnInit(): void {
  this.apiService.getAll().subscribe(data=>{
   this.personajes=data.results
  })
  }
  details(id:number){
   this.router.navigate(['details',id])

  }
}
