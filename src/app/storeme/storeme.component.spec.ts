import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremeComponent } from './storeme.component';

describe('StoremeComponent', () => {
  let component: StoremeComponent;
  let fixture: ComponentFixture<StoremeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoremeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
