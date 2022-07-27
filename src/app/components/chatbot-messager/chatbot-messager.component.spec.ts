import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotMessagerComponent } from './chatbot-messager.component';

describe('ChatbotMessagerComponent', () => {
  let component: ChatbotMessagerComponent;
  let fixture: ComponentFixture<ChatbotMessagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotMessagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotMessagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
