import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intugine';
  myArray:any = []
  getScanData:any  = []
  DEL:number  =0
  INT:number  =0
  OOD:number  =0
  DEX:number  =0
  NFI:number  =0
  constructor(private http:HttpClient){
    var httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json'
        Authorization:'Bearer tTU3gFVUdP'
      })
    }
    var body = {"email":"mayankmittal@intugine.com"}
   this.http.post('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch', body, httpOptions).subscribe(data=>{

     console.log(data);
     this.myArray = data
     for (let i = 0; i < this.myArray.length; i++) {
        if(this.myArray[i].current_status_code == "OOD"){
          this.OOD += 1
        }
        if(this.myArray[i].current_status_code == "DEL"){
          this.DEL += 1
        }
        if(this.myArray[i].current_status_code == "DEL"){
          this.DEL += 1
        }
        if(this.myArray[i].current_status_code == "INT"){
          this.INT += 1
        }
        if(this.myArray[i].current_status_code == "DEX"){
          this.DEX += 1
        }
        if(this.myArray[i].current_status_code == "NFI"){
          this.NFI += 1
        }
       
     }
     this.getData(data[0])
    })
    
  
  }
  getData(data){
    this.getScanData = data.scan
    console.log(this.getScanData);
    
  }
}
