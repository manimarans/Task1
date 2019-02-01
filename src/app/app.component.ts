import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'Task1';
  data : any = [{}];
  isRetrived:boolean;
  constructor (private http : HttpClient, private service : CommonService){
    console.log("Calling service");
      
  }
  ngOnInit(){
    this.service.getData().subscribe(data => {
      this.data = data;
      this.isRetrived =true;
      console.log("data :",this.data);
      console.log("Over :",this.isRetrived);
  });;
  }
  // getdata(){
  //     // this.http.get("https://restcountries.eu/rest/v2/all").subscribe(data => {
  //     //   this.data = data;
  //     //   console.log("data :",this.data[0]);
  //     //   console.log("data end :",this.data);
  //     // });
  //     this.http.get("https://restcountries.eu/rest/v2/all").toPromise().then(data => {
  //       this.data = data;
  //       console.log("data :",this.data[0]);
  //       console.log("data end :",this.data);
  //     });
  // }
}
