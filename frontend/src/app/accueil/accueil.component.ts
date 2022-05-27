import { AnnonceServiceService } from './../annonce-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private annonceServise:AnnonceServiceService) { }
   annoncedata:any;
   errorsMsg:any;
   successMsg:any;
   deleteMsg:any;
   adoptionData:any;
   accouplementData:any;
   adopdata:any[]=[];
   accoupdata:any[]=[];
  ind:number=0;
 

  ngOnInit(): void {
    //get all data
     this.getAllData();
    //this.getAdopAccoup();
    
  }

 
//delete single data
  supprimer(id:any)
  {
    this.annonceServise.deleteData(id).subscribe((res)=>{
    this.deleteMsg=res.message;
    this.getAllData();

      
   
  
    });
  }
//get all data
  getAllData()
  {
     this.annonceServise.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.annoncedata=res.data; });
      for(let i=0;i<this.annoncedata.length();i++){
        if (this.annoncedata[i].titre.toLowerCase()=="adoption"){
         this.adopdata.push(this.annoncedata[i]);
        }
        else {
        this.accoupdata.push(this.annoncedata[i]);
        }
        };

        this.accoupdata.push("lala")
  }

// get adop and accoup
 /*getAdopAccoup(){
for(let i=0;i<this.annoncedata.length;i++){
if (this.annoncedata[i].titre=="adoption"){
 this.adopdata.push(this.annoncedata[i]);
}
else {
this.accoupdata.push(this.annoncedata[i]);
}
}
  } */

  //add ind
  fct(){
    this.ind=this.ind+1;
  }


}
