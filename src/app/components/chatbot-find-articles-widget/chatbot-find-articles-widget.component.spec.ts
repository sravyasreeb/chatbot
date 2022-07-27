import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotFindArticlesWidgetComponent } from './chatbot-find-articles-widget.component';

describe('ChatbotFindArticlesWidgetComponent', () => {
  let component: ChatbotFindArticlesWidgetComponent;
  let fixture: ComponentFixture<ChatbotFindArticlesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotFindArticlesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotFindArticlesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
