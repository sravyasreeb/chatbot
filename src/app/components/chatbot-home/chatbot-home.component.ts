import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { VIEW_TYPE } from '../chatbot-container/chatbot-container.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-chatbot-home',
  templateUrl: './chatbot-home.component.html',
  styleUrls: ['./chatbot-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatbotHomeComponent {
  @Output() viewType = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ChatbotHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  navigateToPageByViewType(type: VIEW_TYPE):void {
    this.viewType.emit(type);
  }

}
