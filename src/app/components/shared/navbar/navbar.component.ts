import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { faFile,faCalendar,faPowerOff,faUser,faPen,faArchive } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  iconfaFile = faFile;
  iconfaEdit = faPen;
  iconfaUser = faUser;
  iconfaCalendar = faCalendar;
  iconfaPowerOff = faPowerOff;
  iconfaArchive = faArchive;
}
