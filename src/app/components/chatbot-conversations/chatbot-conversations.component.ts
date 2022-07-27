import { Component, Output,EventEmitter } from '@angular/core';
import { VIEW_TYPE } from '../chatbot-container/chatbot-container.component';

@Component({
  selector: 'app-chatbot-conversations',
  templateUrl: './chatbot-conversations.component.html',
  styleUrls: ['./chatbot-conversations.component.scss']
})
export class ChatbotConversationsComponent {
  @Output() viewType = new EventEmitter();
  constructor() { }

  messages = [
    {
      elaspedTime: '1d',
      content: `No problem. Just chat in below if you need us. We're always here to help`,
    },
    {
      elaspedTime: '2d',
      content: `No problem. Just chat in below if you need us. We're always here to help`,
    },
    {
      elaspedTime: '20',
      content: `No problem. Just chat in below if you need us. We're always here to help`,
    },
    {
      elaspedTime: '3',
      content: `No problem. Just chat in below if you need us. We're always here to help`,
    },
  ];

   onSendClick() {
    this.viewType.emit(VIEW_TYPE.MESSANGER);
   }
}
