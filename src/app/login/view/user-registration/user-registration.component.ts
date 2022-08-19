import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  RegistrationForm!: FormGroup;
  submitted = false;
  responsiveOptions;

  showVideo = false;

  constructor(public fb: FormBuilder) {
    this.responsiveOptions = [
      {
        breakpoint: '1600px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1184px',
        numVisible: 2,
        numScroll: 2,
      },

      {
        breakpoint: '701px',
        numVisible: 2,
        numScroll: 2,
      },

      {
        breakpoint: '700px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  onHide() {
    this.showVideo = !this.showVideo;
  }

  program = [
    {
      name: 'Seminar',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum,.',
      image: 'program3.png',
    },
    {
      name: 'Compliance Training',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum,.',
      image: 'program1.png',
    },
    {
      name: 'Child Education',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum,.',
      image: 'program2.png',
    },
  ];

  createRegistrationForm() {
    this.RegistrationForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [''],
    });
  }

  displayVideo() {
    this.showVideo = !this.showVideo;
    console.log(this.showVideo);
  }

  onSubmit() {}
}
