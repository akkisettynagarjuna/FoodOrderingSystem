import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFoodsComponent } from './explore-foods.component';

describe('ExploreFoodsComponent', () => {
  let component: ExploreFoodsComponent;
  let fixture: ComponentFixture<ExploreFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
