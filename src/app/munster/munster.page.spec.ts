import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MunsterPage } from './munster.page';

describe('MunsterPage', () => {
  let component: MunsterPage;
  let fixture: ComponentFixture<MunsterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MunsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
