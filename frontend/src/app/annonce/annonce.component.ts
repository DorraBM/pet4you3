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
  annonceData:any;

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.service.getSingleData(this.id).subscribe(
      (res)=>{
        this.annonceData=res.data;
      }
    )
  
  }

}
