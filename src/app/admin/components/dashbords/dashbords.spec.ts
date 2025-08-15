import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbords } from './dashbords';

describe('Dashbords', () => {
  let component: Dashbords;
  let fixture: ComponentFixture<Dashbords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dashbords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashbords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
