import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-project-directory',
  templateUrl: './national-project-directory.component.html',
  styleUrls: ['./national-project-directory.component.scss'],
})
export class NationalProjectDirectoryComponent implements OnInit {
  names: any[];

  selectedCity: any;

  constructor() {
    this.names = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit(): void {}
}
