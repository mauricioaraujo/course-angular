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
    <app-data-binding></app-data-binding>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public destruir: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public destruirComponent() {
    this.destruir = false;
  }
}
