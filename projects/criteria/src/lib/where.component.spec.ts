import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereComponent } from './where.component';

describe('WhereComponent', () => {
  let component: WhereComponent;
  let fixture: ComponentFixture<WhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhereComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to append equals', () => {
    component.where('test').equals('abc');
    expect(component.getValues()).toEqual(['test', '=', 'abc']);
  })

  it('should be able to append and', () => {
    component.where('test').equals('test').and('abc').equals('abc');
    expect(component.getValues()).toEqual(['test', '=', 'test', 'and', 'abc', '=', 'abc']);
  })

  it('should be able to append or', () => {
    component.where('test').equals('test').or('abc').equals('abc');
    expect(component.getValues()).toEqual(['test', '=', 'test', 'or', 'abc', '=', 'abc']);
  })

  it('should be able to append bracket', () => {
    component.where('test').equals('test').or().openBracket('abc').equals('abc').closeBracket();
    expect(component.getValues()).toEqual(['test', '=', 'test', 'or', '(', 'abc', '=', 'abc', ')']);
  })

  it('should be able to append not', () => {
    component.where().not('test').equals('test');
    expect(component.getValues()).toEqual(['not', 'test', '=', 'test']);
  })

  it('should be able to append not equals', () => {
    component.where('test').notEquals('test');
    expect(component.getValues()).toEqual(['test', '<>', 'test']);
  })

  it('should be able to append not like', () => {
    component.where('test').notLike('test');
    expect(component.getValues()).toEqual(['test', 'not like', 'test']);
  })

  it('should be able to append like', () => {
    component.where('test').like('test');
    expect(component.getValues()).toEqual(['test', 'like', 'test']);
  })

  it('should be able to append greater than', () => {
    component.where('test').greaterThan('test');
    expect(component.getValues()).toEqual(['test', '>', 'test']);
  })

  it('should be able to append greater than or equals', () => {
    component.where('test').greaterThanOrEquals('test');
    expect(component.getValues()).toEqual(['test', '>=', 'test']);
  })

  it('should be able to append less than', () => {
    component.where('test').lessThan('test');
    expect(component.getValues()).toEqual(['test', '<', 'test']);
  })

  it('should be able to append less than or equals', () => {
    component.where('test').lessThanOrEquals('test');
    expect(component.getValues()).toEqual(['test', '<=', 'test']);
  })

  it('should be able to append in', () => {
    component.where('test').in(['test1', 'test2', 'test3']);
    expect(component.getValues()).toEqual(['test', 'in', '(', 'test1', ',', 'test2', ',', 'test3', ')']);
  })

  it('should be able to preview', () => {
    component.where('test').in(['test1', 'test2', 'test3']);
    expect(component.preview()).toEqual('test in ( test1 , test2 , test3 ) ');
  })
});
