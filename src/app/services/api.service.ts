import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Personaje, PokeAPIResponse } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,
    @Inject('BACKEND_URL') public backendUrl:string) { }

  getAll(){
    return this.http.get<PokeAPIResponse>(this.backendUrl)
  }
  getOne(id:number){
    return this.http.get<Personaje>(`${this.backendUrl}/${id}`)
  }
}
