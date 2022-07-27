import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotHomeComponent } from './components/chatbot-home/chatbot-home.component';
import { ChatbotConversationsComponent } from './components/chatbot-conversations/chatbot-conversations.component';
import { ChatbotMessagerComponent } from './components/chatbot-messager/chatbot-messager.component';
import { ChatbotContainerComponent } from './components/chatbot-container/chatbot-container.component';
import { ChatbotSearchArticlesComponent } from './components/chatbot-search-articles/chatbot-search-articles.component';
import { ChatbotFindArticlesWidgetComponent } from './components/chatbot-find-articles-widget/chatbot-find-articles-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotHomeComponent,
    ChatbotConversationsComponent,
    ChatbotMessagerComponent,
    ChatbotContainerComponent,
    ChatbotSearchArticlesComponent,
    ChatbotFindArticlesWidgetComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
