import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSearchArticlesComponent } from './chatbot-search-articles.component';

describe('ChatbotSearchArticlesComponent', () => {
  let component: ChatbotSearchArticlesComponent;
  let fixture: ComponentFixture<ChatbotSearchArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotSearchArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotSearchArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
