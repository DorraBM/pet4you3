import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  constructor(private http:HttpClient) { }

     //connect front end to backend 
      URL='http://localhost:3000/annonce';
      URLAdoption='http://localhost:3000/adoption';
      URLAccouplement='http://localhost:3000/accouplement';
    //get all data
      getAllData():Observable<any>
      {
        return this.http.get(`${this.URL}`);
      }
      //get single data
      getSingleData(id:number):Observable<any>
      {
        return this.http.get(this.URL+"/"+id);
      }
       //get adoption data
       getAdoptionData():Observable<any>
       {
         return this.http.get(`${this.URLAdoption}`);
       }
        //get accouplement data
        getAccouplementData():Observable<any>
        {
          return this.http.get(`${this.URLAccouplement}`);
        }
    //create data
      createData(data:any):Observable<any>
      {
        return this.http.post(`${this.URL}`,data);
      }
    //delete data
      deleteData(id:any):Observable<any>
      {
        return this.http.delete(`${this.URL}/${id}`);
      }


  
}
