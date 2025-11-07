import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasComponents } from './personas.components';

describe('PersonasComponents', () => {
  let component: PersonasComponents;
  let fixture: ComponentFixture<PersonasComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
