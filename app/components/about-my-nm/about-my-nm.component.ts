import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-my-nm',
  templateUrl: './about-my-nm.component.html',
  styleUrls: ['./about-my-nm.component.scss']
})
export class AboutMyNmComponent implements OnInit {
	card = [
    {
      src: 'assets/img/fatigue.png',
      title: 'Jar Chapman',
      icon:'icon-dashboard',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/depression.png',
      title: 'Tanya Robertson',
      icon:'icon-symptom-library',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/anxiety.png',
      title: 'Freddie Byrd',
      icon:'icon-patient-resources',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/insomnia.png',
      title: 'Bella Turner',
      icon:'icon-my-favorites',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/physical.png',
      title: 'Ronald Thomas',
      icon: 'icon-contact-us',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/physical.png',
      title: 'Claude Ellis',
      icon: 'icon-contact-us',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/physical.png',
      title: 'Rosa Reed',
      icon: 'icon-contact-us',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      src: 'assets/img/physical.png',
      title: 'Maxine Perkins',
      icon: 'icon-contact-us',
      discription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
