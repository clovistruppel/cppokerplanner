import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NameSelectDialog} from "./name-select-dialog.component";


describe('NameSelectDialogComponent', () => {
  let component: NameSelectDialog;
  let fixture: ComponentFixture<NameSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameSelectDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSelectDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
