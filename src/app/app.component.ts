import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="add()">Add</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public valor: number = 1;

  constructor() {}

  public add(): number {
    return (this.valor += 1);
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('ngDoCheck');
    // throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    // throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    // throw new Error('Method not implemented.');
  }
}
