import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  constructor() { }
  @Output() newVisitor = new EventEmitter<string>();
  AddVisitor(visitor): void{
  this.newVisitor.emit(visitor);
  }
}
