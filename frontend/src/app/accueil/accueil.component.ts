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
  
   errorsMsg:any;
   successMsg:any;
   deleteMsg:any;

   accouplementData:any;

  ind:number=0;
  ind2:number=0;
 

  ngOnInit(): void {
    //get all data
     this.getAllData();
   
    this.annonceServise.getAdoptionData().subscribe((res)=>{
      console.log(res,"adoption==>");
      this.adopdata=res.data;
    });
    this.annonceServise.getAccouplementData().subscribe((res)=>{
      console.log(res,"accouplement==>");
      this.accouplementData=res.data;
    });

    
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

  //add ind1
  fct(){
    this.ind=this.ind+1;
  }

  fct2(){
    this.ind2=this.ind2+1;
  }


}
