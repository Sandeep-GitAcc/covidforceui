import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarInfoModel } from '../sidebar/sidebarinfo';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public column: number;
  public imgwidth: string;
  public imgheight: string;
  public featureList : SidebarInfoModel;
  constructor(private httpClient : HttpClient) { 
    this.featureList = new SidebarInfoModel("","",[]);
    this.column = 3;
    this.imgheight = "30vw";
    this.imgwidth = "20vw";
  }

  ngOnInit(): void {
    this.httpClient.get('assets/info/model.json').subscribe(data => {
      console.log(data);
      this.featureList = (data as SidebarInfoModel);
    });
    this.column =  (window.innerWidth <= 800) ? 1 : (window.innerWidth < 1100) ? 2 : 3;
  }

  onResize(event: any) {
    this.column = (event.target.innerWidth <= 800) ? 1 : (event.target.innerWidth <= 1100) ? 2 : 3;
  }

}
