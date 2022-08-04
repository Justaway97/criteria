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

  alterCreateCriterias(criteria: any[]) {
    Object.entries(criteria).forEach(([key, value]) => {
      this.createCriteria.key[key] = value as string;
    })
  }

  alterReadCriteria(type: 'where' | 'orderBy' | 'rowFrom' | 'rowTo', key: string, value: any) {
    if (type == 'orderBy') {
      this.readCriteria[type][key] = value;
    } else if (type == 'where') {
      this.readCriteria.where = value;
    } else {
      this.readCriteria[type] = value as unknown as number;
    }
  }

  alterReadCriterias(type: 'where' | 'orderBy' | 'rowFrom' | 'rowTo', criteria: any[]) {
    Object.entries(criteria).forEach(([key, value]) => {
      if (type == 'orderBy') {
        this.readCriteria[type][key] = value as string;
      } else if (type == 'where') {
        this.readCriteria.where = value;
      } else {
        this.readCriteria[type] = value as unknown as number;
      }
    })
  }

  alterUpdateCriteria(type: 'key' | 'where', key: string, value: string) {
    if (type == 'key') {
      this.updateCriteria[type][key] = value;
    } else {
      this.updateCriteria.where = value;
    }
  }

  alterUpdateCriterias(type: 'key' | 'where', criteria: any[]) {
    Object.entries(criteria).forEach(([key, value]) => {
      if (type == 'key') {
        this.updateCriteria[type][key] = value as string;
      } else {
        this.updateCriteria.where = value;
      }
    })
  }

  alterDeleteCriteria(key: string, value: string) {
    this.updateCriteria.where[key] = value;
  }

  alterDeleteCriterias(criteria: any[]) {
    Object.entries(criteria).forEach(([key, value]) => {
      this.updateCriteria.where[key] = value as string;
    })
  }
}
