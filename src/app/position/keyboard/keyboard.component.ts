import { Component, computed, inject, output, signal } from '@angular/core';
import { VegetableService } from '../../vegetable/vegetable.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keyboard',
  imports: [FormsModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
})
export class KeyboardComponent {
  vegetableService = inject(VegetableService);
  codeList = this.vegetableService.itemList.map((item) => item.code);

  //存放輸入的關鍵字
  enterKeyword = signal<string>('');
  //父元件傳遞關鍵字
  keyword = output<string>();

  //點擊鍵盤上的按鈕
  clickKeyboard(keyword: string) {
    if (!this.isInclude(keyword)) return;
    this.enterKeyword.set(this.enterKeyword() + keyword);
    this.keyword.emit(this.enterKeyword());
  }

  backButton() {
    this.enterKeyword.set(this.enterKeyword().slice(0, -1));
    this.keyword.emit(this.enterKeyword());
  }

  //要顯示在畫面上的關鍵字
  keyboardButtonList = computed(() => {
    const wordLength = this.enterKeyword().length;
    //如果關鍵字長度為0，則顯示所有第一個字母
    if (wordLength === 0) {
      const firstLetters = new Set(this.codeList.map((code) => code.charAt(0)));
      return Array.from(firstLetters);
    }
    //如果關鍵字長度大於0，則顯示所有符合關鍵字的字母
    const keywordList = this.codeList.filter((code) =>
      code.startsWith(this.enterKeyword())
    );

    const letters = new Set(keywordList.map((code) => code.charAt(wordLength)));
    if (wordLength === 3) return [];
    return Array.from(letters);
  });

  isInclude(keyword: string) {
    return this.keyboardButtonList().includes(keyword);
  }
}
