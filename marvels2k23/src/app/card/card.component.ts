import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  id!: number;
  title!: string;
  description!: string;
  imagesource!: string;
  capacitetype!: string;
  capacitevaleur!: number;
  owned!: boolean;
  ownedText!: string;

  ngOnInit(): void {
    this.id = 74;
    this.title = 'RHINO';
    this.description = 'rhino';
    this.imagesource = 'assets/images/mv064.jpg';
    this.capacitetype = 'COURAGE PUISSANCE INTELLIGENCE';
    this.capacitevaleur = 6;
    this.owned = false;
    this.ownedText = 'Je l\'ai pas';
  }

  onCard() {
    if (!this.owned) {
      this.ownedText = 'Je l\'ai';
      this.owned = true;
    } else {
      this.ownedText = 'Je l\'ai pas';
      this.owned = false;
    }
  }
}
