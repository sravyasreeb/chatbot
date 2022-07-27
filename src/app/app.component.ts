import { ChatbotContainerComponent, VIEW_TYPE } from './components/chatbot-container/chatbot-container.component';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'intercomm-chatbot';
  private dialogRef: MatDialogRef<any>;
  public iconName = 'chat';
  private dialogSubscription: Subscription;

  constructor(public dialog: MatDialog) {}

  onChatbotOpen() {
    this.iconName = this.iconName === 'chat' ? 'keyboard_arrow_down' : 'chat';
    this.openDialog();
  }

  openDialog(): void {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(ChatbotContainerComponent, {
        width: '376px',
        maxHeight: '704px',
        height: 'calc(100% - 120px)',
        hasBackdrop: false,
        data: { viewType: VIEW_TYPE.HOME_PAGE },
        position: { bottom: '100px', right: '20px' },
        panelClass: 'custom-dialog-container',
      });

      this.dialogSubscription = this.dialogRef.afterClosed().subscribe(() => {
        this.iconName = 'chat';
      });
    } else {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }

  ngOnDestroy(): void {
    this.dialogSubscription?.unsubscribe();
  }
}
