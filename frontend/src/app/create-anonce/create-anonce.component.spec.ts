import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnonceComponent } from './create-anonce.component';

describe('CreateAnonceComponent', () => {
  let component: CreateAnonceComponent;
  let fixture: ComponentFixture<CreateAnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
