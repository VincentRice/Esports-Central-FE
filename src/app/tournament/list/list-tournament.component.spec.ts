// list.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentListComponent } from './list-tournament.component';

describe('TournamentListComponent', () => {
  let component: TournamentListComponent;
  let fixture: ComponentFixture<TournamentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TournamentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});