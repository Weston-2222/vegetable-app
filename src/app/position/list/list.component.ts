import { Component, computed, inject, input } from '@angular/core';
import { VegetableService } from '../../vegetable/vegetable.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  vegetableService = inject(VegetableService);
  searchKeyword = input<string>('');
  searchResults = computed(() => {
    return this.vegetableService.search(this.searchKeyword());
  });
}
