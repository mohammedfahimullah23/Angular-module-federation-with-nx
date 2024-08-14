import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataAccesUserComponent } from './shared-data-acces-user.component';

describe('SharedDataAccesUserComponent', () => {
  let component: SharedDataAccesUserComponent;
  let fixture: ComponentFixture<SharedDataAccesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDataAccesUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDataAccesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
