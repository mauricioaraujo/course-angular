import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public checkedDisabled: boolean = false;

  public alertaInfo(valor: string) {
    alert(valor);
  }

  public title: string = 'exemplo';

  constructor() {}

  ngOnInit(): void {}
}
