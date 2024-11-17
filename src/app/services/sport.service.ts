import { Injectable } from '@angular/core';
import { sport } from '../model/sport.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class SportService {
  apiURL: string = 'http://localhost:8081/sports/api/all';

  sports! : sport[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeProduit(): Observable<sport[]>{
    return this.http.get<sport[]>(this.apiURL);
    }

  

     
       
}