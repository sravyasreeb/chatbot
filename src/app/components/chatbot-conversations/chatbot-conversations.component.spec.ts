import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotConversationsComponent } from './chatbot-conversations.component';

describe('ChatbotConversationsComponent', () => {
  let component: ChatbotConversationsComponent;
  let fixture: ComponentFixture<ChatbotConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotConversationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
