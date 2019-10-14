import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-about',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({

      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('.1s')
      ]),
      transition('closed => open', [
        animate('.05s')
      ]),
    ]),
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  on: boolean;
  count: number;
  openmember: number;
  members: MemberModel[];
  isOpen: boolean;

  constructor() {
    this.on = false;
    this.count = 0;
    this.openmember = -1;
    this.members = [];
    this.generateMembers();
    this.isOpen = false;
  }

  ngOnInit() {
  }

  generateMembers() {
    const luke = new MemberModel();
    luke.resume = 'https://drive.google.com/file/d/1FmLDEl-vgif4kkFzcqFe6egIFhYgoZdr/view?usp=sharing';
    luke.image = '/assets/images/SpearLuke.jpg';
    luke.bullets = ['Glasses', 'Blue Suit'];
    luke.name = 'LUKE TRUITT';
    luke.team = 'Data Team';
    luke.linkedin = 'https://www.linkedin.com/in/luke-truitt';
    this.members.push(luke);
    const varun = new MemberModel();
    varun.resume = 'https://drive.google.com/file/d/1O_EKWBR7qanXYKRSMvh7K8LPZ_JH3eWc/view?usp=sharing';
    varun.image = '/assets/images/varunnair.jpg';
    varun.bullets = ['Uizardry', 'NLP'];
    varun.name = 'VARUN NAIR';
    varun.team = 'Data Team';
    varun.linkedin = 'https://www.linkedin.com/in/varunnair18/';
    this.members.push(varun);
    const mary = new MemberModel();
    mary.resume = 'https://drive.google.com/file/d/1us0OdS23Z3Hs44fMWc99_g-O0xr2Xrvw/view?usp=sharing';
    mary.image = '/assets/images/marygooneratne.jpg';
    mary.bullets = ['Uizardry', 'NLP'];
    mary.name = 'MARY GOONERATNE';
    mary.team = 'Data Team';
    mary.linkedin = 'https://www.linkedin.com/in/marygooneratne/';
    this.members.push(mary);
    const daniel = new MemberModel();
    daniel.resume = 'https://drive.google.com/file/d/1J-FM4gRq8SAlzvF1sGetviugWdPNRA5j/view?usp=sharing';
    daniel.image = '/assets/images/chaofantao.jpg';
    daniel.bullets = ['Little Guy', 'Larry'];
    daniel.name = 'DANIEL TAO';
    daniel.team = 'Data Team';
    daniel.linkedin = 'https://www.linkedin.com/in/chaofan-daniel-tao/';
    this.members.push(daniel);
  }
}
