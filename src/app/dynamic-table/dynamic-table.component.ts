import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  @Input() data;
  headerArray : string [];
  valueArray : any[];
  isContainsComplexObject : boolean = false;
  constructor() { }

  ngOnInit() {
    this.getKeysByStringValue();
    if(Object.keys(this.data[0]).length !== this.headerArray.length){
      console.log(Object.keys(this.data[0]).length);
      console.log(this.headerArray.length);
      this.isContainsComplexObject = true;
    }
  }
  getKeysByStringValue(){
      this.headerArray = Object.keys(this.data[0]).filter( c => this.isString(this.data[0][c])) ;
  }
  getAllKeys(){
      this.headerArray = Object.keys(this.data[0]) ;
  }
  isString(val) {
     return typeof val === 'string'; 
    }
}
