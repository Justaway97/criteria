import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-where',
  template: `
    <p>
      where works!
    </p>
  `,
  styles: [
  ]
})
export class WhereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private values: string[] = []

  where(key?: string) {
    if (key) {
      this.values.push(key);
    }
    return this;
  }

  and(key: string) {
    this.values.push('and');
    this.values.push(key);
    return this;
  }

  or(key?: string) {
    this.values.push('or');
    if (key) {
      this.values.push(key);
    }
    return this;
  }

  openBracket(key: string) {
    this.values.push('(');
    this.values.push(key);
    return this;
  }

  closeBracket() {
    this.values.push(')');
    return this;
  }

  equals(key: string) {
    this.values.push('=');
    this.values.push(key);
    return this;
  }

  notEquals(key: string) {
    this.values.push('<>');
    this.values.push(key);
    return this;
  }

  not(key: string) {
    this.values.push('not');
    this.values.push(key);
    return this;
  }

  like(key: string) {
    this.values.push('like');
    this.values.push(key);
    return this;
  }

  notLike(key: string) {
    this.values.push('not like');
    this.values.push(key);
    return this;
  }

  greaterThan(key: any) {
    this.values.push('>');
    this.values.push(key);
    return this;
  }

  greaterThanOrEquals(key: any) {
    this.values.push('>=');
    this.values.push(key);
    return this;
  }

  lessThan(key: any) {
    this.values.push('<');
    this.values.push(key);
    return this;
  }

  lessThanOrEquals(key: any) {
    this.values.push('<=');
    this.values.push(key);
    return this;
  }

  in(keys: string[]) {
    this.values.push('in');
    this.values.push('(');
    keys.forEach((key, index) => {
      if (index > 0) {
        this.values.push(',');
      }
      this.values.push(key)
    })
    this.values.push(')');
    return this;
  }

  preview() {
    let result = '';
    this.values.forEach(value => {
      result = result.trim().concat(' ', value, ' ');
    })
    return result;
  }

  getValues() {
    return this.values;
  }
}
