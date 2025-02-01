import { Component, inject, OnInit } from '@angular/core';

import { PositionComponent } from './position/position.component';
import { CommonModule } from '@angular/common';
import { InstallPwaComponent } from './install-pwa/install-pwa.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [PositionComponent, CommonModule, InstallPwaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly dialog = inject(MatDialog);
  // 新增一個方法來檢查 Web App 是否已安裝
  private isWebAppInstalled(): boolean {
    // 這裡可以加入檢查邏輯，例如檢查某個標誌或狀態
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  ngOnInit() {
    if (!this.isWebAppInstalled()) {
      this.dialog.open(InstallPwaComponent);
    }
  }
}
