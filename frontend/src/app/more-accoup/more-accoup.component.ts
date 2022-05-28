import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-more-accoup',
  templateUrl: './more-accoup.component.html',
  styleUrls: ['./more-accoup.component.css']
})
export class MoreAccoupComponent implements OnInit {

  constructor(private annonceServise:AnnonceServiceService) { }
  accouplementData:any;

  ngOnInit(): void {

    this.annonceServise.getAccouplementData().subscribe((res)=>{
      console.log(res,"accouplement==>");
      this.accouplementData=res.data;
    });
  }

}
