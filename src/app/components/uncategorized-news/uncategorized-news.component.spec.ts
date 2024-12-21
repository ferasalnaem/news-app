import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncategorizedNewsComponent } from './uncategorized-news.component';

describe('UncategorizedNewsComponent', () => {
  let component: UncategorizedNewsComponent;
  let fixture: ComponentFixture<UncategorizedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncategorizedNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncategorizedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
