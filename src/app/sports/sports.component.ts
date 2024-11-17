import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent implements OnInit{
  sports! : sport[]; //un tableau de Produit
     
  constructor(private sportService: SportService ) {
   
   }


   ngOnInit(): void {

     this.chargerProduits();
   }
 
   chargerProduits(){
     this.sportService.listeProduit().subscribe(prods => {
       console.log(prods);
       this.sports = prods;
       });
   }
  }
