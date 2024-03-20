import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
  @Input() accounts:any;

  hoveredItem: any = null;

  toggleHover(itemId: any) {
    this.hoveredItem = itemId;
  }
} 
