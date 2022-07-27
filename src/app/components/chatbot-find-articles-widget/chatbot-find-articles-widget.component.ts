import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VIEW_TYPE } from '../chatbot-container/chatbot-container.component';

@Component({
  selector: 'app-chatbot-find-articles-widget',
  templateUrl: './chatbot-find-articles-widget.component.html',
  styleUrls: ['./chatbot-find-articles-widget.component.scss']
})
export class ChatbotFindArticlesWidgetComponent implements OnInit {
  @Output() viewType = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSearchArticles(): void {
    this.viewType.emit(VIEW_TYPE.SEARCH_ARTICLES);
  }
}
