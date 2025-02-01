import { Injectable } from '@angular/core';
import { vegetableList } from './vegetable.model';
import Fuse, { FuseResult } from 'fuse.js';
export type ItemList = {
  vegetableName: string;
  productName: string;
  code: string;
  voice: string;
};
@Injectable({
  providedIn: 'root',
})
export class VegetableService {
  private fuse: Fuse<ItemList>;
  vegetableList = vegetableList;

  // 將蔬菜列表轉換為包含詳細資訊的扁平化列表
  itemList = vegetableList.flatMap((vegetable) => {
    // 將每個蔬菜的詳細資訊與蔬菜名稱合併
    return vegetable.details.map((detail) => ({
      ...detail, // 保留詳細資訊
      vegetableName: vegetable.vegetableName, // 添加蔬菜名稱
    }));
  });
  constructor() {
    // 設定搜尋選項
    const options = {
      // 指定要比對的欄位
      keys: ['code', 'productName', 'vegetableName'],
      // threshold 越小代表比對越嚴謹，0 為全字匹配，數字愈大接受度更寬
      threshold: 0,
    };

    // 將資料與 options 傳給 Fuse 實例
    this.fuse = new Fuse(this.itemList, options);
  }

  search(query: string): FuseResult<ItemList>[] {
    if (!query) {
      // 若搜尋字串為空，直接回傳空陣列或整份資料
      // 可依需求做不同處理
      return [];
    }
    return this.fuse.search(query);
  }
}
