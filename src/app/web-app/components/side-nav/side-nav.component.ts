import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public selectedIndex = null;
  public appPages = [
    {
      title:"Mes infos",
      role:[],
      sub:[
        {
          title: 'Mon compte',
          url: '/my-account',
          icon: 'mail'
        },
        {
          title: 'Editer Mariage',
          url: '/',
          icon: 'paper-plane'
        }
      ]
    },
    {
      title:"Evènements",
      role:['wedder'],
      sub:[
        {
          title: 'Mon Mariage',
          url: '/',
          icon: 'mail'
        },
        {
          title: 'Enterrement Mamie',
          url: '/',
          icon: 'paper-plane'
        },
        {
          title: 'Ajouter un evenement',
          url: '/new-event',
          icon: 'paper-plane'
        }
      ]
    }
  ];

  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {
  }

}
