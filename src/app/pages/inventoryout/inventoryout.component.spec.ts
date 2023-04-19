import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryoutComponent } from './inventoryout.component';

describe('InventoryoutComponent', () => {
  let component: InventoryoutComponent;
  let fixture: ComponentFixture<InventoryoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
