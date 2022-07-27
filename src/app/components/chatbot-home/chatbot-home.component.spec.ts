import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotHomeComponent } from './chatbot-home.component';

describe('ChatbotHomeComponent', () => {
  let component: ChatbotHomeComponent;
  let fixture: ComponentFixture<ChatbotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
