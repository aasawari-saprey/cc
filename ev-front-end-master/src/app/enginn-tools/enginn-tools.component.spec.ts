import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginnToolsComponent } from './enginn-tools.component';

describe('EnginnToolsComponent', () => {
  let component: EnginnToolsComponent;
  let fixture: ComponentFixture<EnginnToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginnToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginnToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
