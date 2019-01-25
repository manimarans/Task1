import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  @Input() data;
  headerArray : string [];
  isLoaded = false;
  constructor() { }

  ngOnInit() {
    this.getKeys();
  }
  getKeys(){
    setTimeout(()=>{ 
      // console.log("data Array : ",this.data);
      this.headerArray = Object.keys(this.data[0]) ;
      this.isLoaded = true;
    }, 5000);
    
    // this.headerArray = Object.keys(this.data[0]) ;
  }

}
