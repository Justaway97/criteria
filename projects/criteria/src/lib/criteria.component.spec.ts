import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaComponent } from './criteria.component';
import { WhereComponent } from './where.component';

describe('CriteriaComponent', () => {
  let component: CriteriaComponent;
  let fixture: ComponentFixture<CriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriteriaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  interface CreateCriteria {
    key: {
      [key: string]: string;
    }
  }
  interface ReadCriteria {
    where: any
    orderBy: {
      [key: string]: string;
    }
    rowFrom: number
    rowTo: number
  }

  interface UpdateCriteria {
    key: {
      [key: string]: string;
    }
    where: any
  }

  interface DeleteCriteria {
    where: any
  }

  it('should able to update createCriteria', () => {
    component.alterCreateCriteria('test', 'test');
    let testCriteria: CreateCriteria = {
      key: {
        'test': 'test'
      }
    };
    expect(component.getCreateCriteria()).toEqual(testCriteria);
  })

  it('should able to update readCriteria -> where', () => {
    const fixtureWhere = TestBed.createComponent(WhereComponent);
    const componentWhere = fixtureWhere.componentInstance;
    componentWhere.where('test').equals('abc');
    component.alterReadCriteria('where', '', componentWhere.getValues());
    let testCriteria: ReadCriteria = {
      where: componentWhere.getValues(),
      orderBy: {},
      rowFrom: 0,
      rowTo: 0,
    };
    expect(component.getReadCriteria()).toEqual(testCriteria);
  })

  it('should able to update readCriteria -> orderBy', () => {
    component.alterReadCriteria('orderBy', 'test', 'asc');
    let testCriteria: ReadCriteria = {
      where: {},
      orderBy: {
        'test': 'asc'
      },
      rowFrom: 0,
      rowTo: 0,
    };
    expect(component.getReadCriteria()).toEqual(testCriteria);
  })

  it('should able to update readCriteria -> orderBy', () => {
    component.alterReadCriteria('orderBy', 'test', 'asc');
    let testCriteria: ReadCriteria = {
      where: {},
      orderBy: {
        'test': 'asc'
      },
      rowFrom: 0,
      rowTo: 0,
    };
    expect(component.getReadCriteria()).toEqual(testCriteria);
  })

  it('should able to update readCriteria -> rowFrom', () => {
    component.alterReadCriteria('rowFrom', '', 0);
    component.alterReadCriteria('rowTo', '', 10);
    let testCriteria: ReadCriteria = {
      where: {},
      orderBy: {},
      rowFrom: 0,
      rowTo: 10,
    };
    expect(component.getReadCriteria()).toEqual(testCriteria);
  })

  it('should able to update updateCriteria -> key', () => {
    component.alterUpdateCriteria('key', 'test', 'test');
    let testCriteria: UpdateCriteria = {
      key: {
        'test': 'test'
      },
      where: {},
    };
    expect(component.getUpdateCriteria()).toEqual(testCriteria);
  })

  it('should able to update updateCriteria -> where', () => {
    const fixtureWhere = TestBed.createComponent(WhereComponent);
    const componentWhere = fixtureWhere.componentInstance;
    componentWhere.where('test').equals('abc');
    component.alterUpdateCriteria('key', 'test', 'test');
    component.alterUpdateCriteria('where', '', componentWhere.getValues());
    let testCriteria: UpdateCriteria = {
      key: {
        'test': 'test'
      },
      where: componentWhere.getValues(),
    };
    expect(component.getUpdateCriteria()).toEqual(testCriteria);
  })

  it('should able to update deleteCriteria', () => {
    const fixtureWhere = TestBed.createComponent(WhereComponent);
    const componentWhere = fixtureWhere.componentInstance;
    componentWhere.where('test').equals('abc');
    component.alterDeleteCriteria(componentWhere.getValues());
    let testCriteria: DeleteCriteria = {
      where: componentWhere.getValues(),
    };
    console.log(component.getDeleteCriteria(), testCriteria)
    expect(component.getDeleteCriteria()).toEqual(testCriteria);
  })
});
