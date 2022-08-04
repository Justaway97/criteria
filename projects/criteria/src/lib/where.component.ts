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

  and(key: string) {
    this.values.push('and');
    this.values.push(key);
  }

  or(key: string) {
    this.values.push('or');
    this.values.push(key);
  }

  equals(key: string) {
    this.values.push('=');
    this.values.push(key);
  }

  not(key: string) {
    this.values.push('not');
    this.values.push(key);
  }

  like(key: string) {
    this.values.push('like');
    this.values.push(key);
  }

  notLike(key: string) {
    this.values.push('not like');
    this.values.push(key);
  }

  greaterThan(key: any) {
    this.values.push('>');
    this.values.push(key);
  }

  greaterThanOrEquals(key: any) {
    this.values.push('>=');
    this.values.push(key);
  }

  lessThan(key: any) {
    this.values.push('<');
    this.values.push(key);
  }

  lessThanOrEquals(key: any) {
    this.values.push('<=');
    this.values.push(key);
  }

  in(keys: string[]) {
    this.values.push('in');
    this.values.push('(');
    keys.forEach(key => {
      this.values.push(key)
    })
    this.values.push(')');
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
