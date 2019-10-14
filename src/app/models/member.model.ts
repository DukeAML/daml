export class MemberModel {
  image: string;
  name: string;
  team: string;
  bullets: string[];
  resume: string;
  linkedin: string;

  constructor() {
    this.image = '';
    this.name = '';
    this.team = '';
    this.bullets = [];
    this.resume = '';
    this.linkedin = '';
  }
}
