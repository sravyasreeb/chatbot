import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VIEW_TYPE } from '../chatbot-container/chatbot-container.component';

@Component({
  selector: 'app-chatbot-search-articles',
  templateUrl: './chatbot-search-articles.component.html',
  styleUrls: ['./chatbot-search-articles.component.scss']
})
export class ChatbotSearchArticlesComponent implements OnInit {
  @Output() viewType = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

   onSendClick() {
    this.viewType.emit(VIEW_TYPE.MESSANGER);
   }

   onNavigationClick() {
    this.viewType.emit(VIEW_TYPE.HOME_PAGE);
   }

  messages = [
    {
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '3'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '43'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '30'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },{
      query: 'What is Intercom?',
      resolution: `Here for the first time? See how Intercom can help; from sales and marketing, to customer engagement and support.`,
      count: '13'
    },
  ];

}
