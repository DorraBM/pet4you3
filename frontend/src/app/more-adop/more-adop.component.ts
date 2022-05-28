import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-more-adop',
  templateUrl: './more-adop.component.html',
  styleUrls: ['./more-adop.component.css']
})
export class MoreAdopComponent implements OnInit {

  constructor(private annonceServise:AnnonceServiceService) { }
  adopdata:any;
  ngOnInit(): void {
    this.annonceServise.getAdoptionData().subscribe((res)=>{
      console.log(res,"adoption==>");
      this.adopdata=res.data;
    });
  }

}
