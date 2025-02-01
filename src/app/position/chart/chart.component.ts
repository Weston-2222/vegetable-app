import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { positionList } from './chart.model';
import { escapeRegExp } from '../../utils/string.utils';

@Component({
  selector: 'app-chart',
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  //輸入關鍵字
  searchKeyword = input.required<string>();

  //位置資料
  positionList = positionList;

  isHighlight(regex: RegExp) {
    return regex.test(this.searchKeyword());
  }
}
