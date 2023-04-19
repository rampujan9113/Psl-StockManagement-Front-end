import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryinformComponent } from './inventoryinform.component';

describe('InventoryinformComponent', () => {
  let component: InventoryinformComponent;
  let fixture: ComponentFixture<InventoryinformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryinformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
