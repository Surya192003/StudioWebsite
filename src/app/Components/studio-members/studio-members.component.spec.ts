import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioMembersComponent } from './studio-members.component';

describe('StudioMembersComponent', () => {
  let component: StudioMembersComponent;
  let fixture: ComponentFixture<StudioMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudioMembersComponent]
    });
    fixture = TestBed.createComponent(StudioMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
