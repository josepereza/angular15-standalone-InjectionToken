import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PokeAPIResponse } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,
    @Inject('BACKEND_URL') public backendUrl:string) { }

  getAll(){
    return this.http.get<PokeAPIResponse>(this.backendUrl)
  }
}
