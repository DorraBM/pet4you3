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
   adopdata:any;
   accoupdata:any;
   errorsMsg:any;
   successMsg:any;
   deleteMsg:any;

 

  ngOnInit(): void {
    //get all data
     this.getAllData();
    this.getAdopAccoup();
    
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
  }

// get adop and accoup
 getAdopAccoup(){
for(let i=0;i<this.annoncedata.length;i++){
if (this.annoncedata[i].titre=="adoption"){
 this.adopdata.push(this.annoncedata[i]);
}
else {
this.accoupdata.push(this.annoncedata[i]);
}
}
  } 


}
