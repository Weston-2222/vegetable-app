import { Component, inject, signal } from '@angular/core';
import { VegetableService } from '../vegetable/vegetable.service';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-position',
  imports: [
    FormsModule,
    CommonModule,
    ChartComponent,
    KeyboardComponent,
    ListComponent,
  ],
  templateUrl: './position.component.html',
  styleUrl: './position.component.css',
})
export class PositionComponent {
  vegetableService = inject(VegetableService);
  searchKeyword = signal('');
  setSearchKeyword(keyword: any) {
    this.searchKeyword.set(keyword);
  }
}
