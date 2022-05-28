import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnnonceServiceService } from './../annonce-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-anonce',
  templateUrl: './create-anonce.component.html',
  styleUrls: ['./create-anonce.component.css'],
})
export class CreateAnonceComponent implements OnInit {
  constructor(
    private annonceServise: AnnonceServiceService,
    private route: Router
  ) {}
  annoncedata: any;
  errorsMsg: any;
  successMsg: any;
  deleteMsg: any;
  visible: boolean = false;
  hidden: boolean = true;
  document: any;

  annonceForm = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    categorie: new FormControl('',[Validators.required]),
    espece: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    sexe: new FormControl('', Validators.required),
    vaccin: new FormControl(''),
    description: new FormControl(''),
    lieu: new FormControl('', Validators.required),
    date_naissance: new FormControl('', Validators.required),
    nom: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  });
  public get nom() { return this.annonceForm.get('nom'); }
  public get date_naissance() { return this.annonceForm.get('date_naissance'); }
  public get lieu() { return this.annonceForm.get('lieu'); }
  public get vaccin() { return this.annonceForm.get('vaccin'); }
  public get sexe() { return this.annonceForm.get('sexe'); }
  public get age() { return this.annonceForm.get('age'); }
  public get image() { return this.annonceForm.get('image'); }
  public get espece() { return this.annonceForm.get('espece'); }
  public get categorie() { return this.annonceForm.get('categorie'); }
  public get titre() { return this.annonceForm.get('titre'); }
  ngOnInit(): void {}
  //create data
  hiddenT() {
    this.hidden = false;
    this.visible = true;
  }
  hiddenPrec()
  {
    this.hidden = true;
    this.visible = false;
  }
  retourAcceuil() {
    this.route.navigate(['/accueil']);
  }
  ajouter() {
    if (this.annonceForm.valid) {
      this.annonceServise
        .createData(this.annonceForm.value)
        .subscribe((res) => {
          console.log(res, 'res==>');
          this.annonceForm.reset();
          this.successMsg = res.message;
        });
        this.route.navigate(['/accueil']);
    } else {
      this.errorsMsg = 'all field is required';
    }
  }
 
}
