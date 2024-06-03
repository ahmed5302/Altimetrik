import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  assestCollection:any[]=[];
  
  constructor( private router : Router) { }

  ngOnInit(): void {
    this.assestCollection = [
      {
      assestType:'Vehicle',
      assestVal : '2',
      assestrange :'100'
    },
    {
      assestType:'Home',
      assestVal : '5',
      assestrange :'500'
    },
    {
      assestType:'land',
      assestVal : '4',
      assestrange :'200'
    },
  ];
  }

  trackByFun(item:any){
    return item;
  }
  navigate(){
    this.router.navigate(['/assest']);
  }

}
