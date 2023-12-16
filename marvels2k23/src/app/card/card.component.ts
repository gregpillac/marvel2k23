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

  ngOnInit(): void {
    this.id = 74;
    this.title = 'RHINO';
    this.description = 'rhino';
    this.imagesource = 'assets/images/mv064.jpg';
    this.capacitetype = 'COURAGE PUISSANCE INTELLIGENCE';
    this.capacitevaleur = 6;
  }
}
