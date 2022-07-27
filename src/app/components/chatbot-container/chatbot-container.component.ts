import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
export interface DialogData {
  viewType: VIEW_TYPE;
  name: string;
}
export const enum VIEW_TYPE {
   HOME_PAGE ='HOME_PAGE',
   MESSANGER = 'MESSANGER',
   SEARCH_ARTICLES = 'SEARCH_ARTICLES',
}

@Component({
  selector: 'app-chatbot-container',
  templateUrl: './chatbot-container.component.html',
  styleUrls: ['./chatbot-container.component.scss']
})
export class ChatbotContainerComponent implements OnInit {
  viewType: VIEW_TYPE = VIEW_TYPE.HOME_PAGE;
  constructor(public dialogRef: MatDialogRef<ChatbotContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.viewType = data.viewType;
  }

  ngOnInit(): void {

  }

  changeSelection(type: VIEW_TYPE): void {
    this.viewType = type;
  }
}
