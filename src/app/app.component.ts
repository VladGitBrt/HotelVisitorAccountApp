import { Component } from '@angular/core';


export interface Visitors {
  id: number;
  name: string;
  time: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelVisitors';
  public visitors: Visitors[] = [];
  public exit = [];
  t;
  totalTime = 0;
  visitorTime = 0;
  AddVisitor(name): void{
    let currVisitor = 1;
    this.t = setInterval(() => { this.visitorTime = currVisitor++; console.log(name + ' ' + this.visitorTime); }, 1000);
    const newVisitor: Visitors = {id: this.visitors.length + 1 , name, time: this.visitorTime};
    this.visitors.push(newVisitor);
  }

  DeleteVisitor(id): void{
    this.visitors.forEach(visitor => {if (visitor.id === id){
      clearInterval(this.t);
      visitor.time = this.visitorTime;
      this.totalTime += this.visitorTime;
      this.visitorTime = 0;
      this.exit.push(visitor);
    }} );
    this.visitors = this.visitors.filter(visitors => id !== visitors.id);
  }
}
