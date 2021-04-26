import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarInfoModel } from '../sidebar/sidebarinfo';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public featureList : SidebarInfoModel;
  constructor(private httpClient : HttpClient) { 
    this.featureList = new SidebarInfoModel("","",[]);
  }

  ngOnInit(): void {
    this.httpClient.get('assets/info/model.json').subscribe(data => {
      console.log(data);
      this.featureList = (data as SidebarInfoModel);
    });
  }

}
