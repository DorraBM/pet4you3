import { AnnonceServiceService } from './../annonce-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private service:AnnonceServiceService,private router:Router) { }
  id:number;
  a:any;
  num:boolean = false;
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.service.getSingleData(this.id).subscribe(
      (res)=>{
        this.a=res.data[0];
      }
    )
  
  }
  affiche(){
    this.num=!this.num;
  }

}
