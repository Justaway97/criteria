import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'lib-criteria',
  template: `
    <p>
      criteria works!
    </p>
  `,
  styles: [
  ]
})
export class CriteriaComponent implements OnInit {

  createCriteria: CreateCriteria;
  readCriteria: ReadCriteria;
  updateCriteria: UpdateCriteria;
  deleteCriteria: DeleteCriteria;

  constructor() {
    this.createCriteria = {
      key: {}
    };
    this.readCriteria = {
      where: {},
      orderBy: {},
      rowFrom: 0,
      rowTo: 0,
    };
    this.updateCriteria = {
      key: {},
      where: {}
    };
    this.deleteCriteria = {
      where: {}
    };
  }

  ngOnInit(): void {
  }

  getCreateCriteria() {
    return this.createCriteria;
  }

  getReadCriteria() {
    return this.readCriteria;
  }

  getUpdateCriteria() {
    return this.updateCriteria;
  }

  getDeleteCriteria() {
    return this.deleteCriteria;
  }

  alterCreateCriteria(key: string, value: string) {
    this.createCriteria.key[key] = value;
  }

  alterReadCriteria(type: 'where' | 'orderBy' | 'rowFrom' | 'rowTo', key?: string, value?: any) {
    if (type == 'orderBy' && key) {
      this.readCriteria.orderBy[key] = value;
    } else if (type == 'where') {
      this.readCriteria.where = value;
    } else if ((type == 'rowFrom' || type == 'rowTo')) {
      this.readCriteria[type] = value as unknown as number;
    }
  }

  alterUpdateCriteria(type: 'key' | 'where', key: string, value: any) {
    if (type == 'key') {
      this.updateCriteria[type][key] = value;
    } else {
      this.updateCriteria.where = value;
    }
  }

  alterDeleteCriteria(value: any) {
    this.deleteCriteria.where = value;
  }

}
