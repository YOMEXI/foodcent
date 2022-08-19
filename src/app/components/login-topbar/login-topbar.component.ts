import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/app.layout.service';

@Component({
  selector: 'login-topbar',
  templateUrl: './login-topbar.component.html',
  styleUrls: ['./login-topbar.component.scss']
})
export class LoginTopbarComponent implements OnInit {

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
