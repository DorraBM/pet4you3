import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnnonceServiceService } from './../annonce-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-anonce',
  templateUrl: './create-anonce.component.html',
  styleUrls: ['./create-anonce.component.css']
})
export class CreateAnonceComponent implements OnInit {

  constructor(private annonceServise:AnnonceServiceService) { }
  annoncedata:any;
   errorsMsg:any;
   successMsg:any;
   deleteMsg:any;

   annonceForm=new FormGroup({
    'titre':new FormControl('',Validators.required),
    'categorie':new FormControl('',Validators.required),
    'espece':new FormControl('',Validators.required),
    'image':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required),
    'sexe':new FormControl('',Validators.required),
    'vaccin':new FormControl('',Validators.required),
    'description':new FormControl(''),
    'lieu':new FormControl('',Validators.required),
    'date_naissance':new FormControl('',Validators.required),
    'nom':new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
 //create data
 ajouter()
 {
    if(this.annonceForm.valid)
    {
      this.annonceServise.createData(this.annonceForm.value).subscribe((res)=>{
       console.log(res,"res==>");
       this.annonceForm.reset();
       this.successMsg=res.message;
      });
    }
    else{
      this.errorsMsg="all field is required";
    }
 }
}
