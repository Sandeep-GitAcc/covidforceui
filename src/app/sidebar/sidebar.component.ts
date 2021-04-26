import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarInfoModel } from './sidebarinfo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  result: any;
  public sidebarInfo : SidebarInfoModel;

  constructor(private httpClient: HttpClient) {
    this.sidebarInfo = new SidebarInfoModel("","",[]);
  }

  ngOnInit(): void {
    this.httpClient.get('assets/info/model.json').subscribe(data => {
      console.log(data);
      this.sidebarInfo = (data as SidebarInfoModel);
    });
  }

}
