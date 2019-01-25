import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';
  data : any = [{}];
  constructor (private http : HttpClient, private service : CommonService){
    console.log("Calling service");
      this.service.getData().subscribe(data => {
        this.data = data;
    });;
  }
  getdata(){
      this.http.get("https://restcountries.eu/rest/v2/all").subscribe(data => {
        this.data = data;
        console.log("data :",this.data[0]);
        console.log("data end :",this.data);
      });
  }
}
