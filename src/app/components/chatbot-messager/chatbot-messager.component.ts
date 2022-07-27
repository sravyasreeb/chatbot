import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VIEW_TYPE } from '../chatbot-container/chatbot-container.component';

@Component({
  selector: 'app-chatbot-messager',
  templateUrl: './chatbot-messager.component.html',
  styleUrls: ['./chatbot-messager.component.scss'],
})
export class ChatbotMessagerComponent implements OnInit {
  @Output() viewType = new EventEmitter();

  msgs = [];
  constructor() {}

  ngOnInit(): void {}

  onNavigationClick(): void {
    this.viewType.emit(VIEW_TYPE.HOME_PAGE);
  }

  onMsgQuery() {
    this.msgs.push(
      { query: 'Just Browsing!' },
      {
        botQuery: `Just chat in below if you need us. We're always here to help 👋`,
      }
    );
  }
}
