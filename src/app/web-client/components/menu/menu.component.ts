import { Component, OnInit, Input } from '@angular/core';
import { WebClientService } from '../../services/web-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu:any=null

  constructor(
    private wcService: WebClientService
  ) {
    this.wcService.menu.subscribe(menu=>{
      this.menu=menu
    })
  }

  ngOnInit() {
  }

}
