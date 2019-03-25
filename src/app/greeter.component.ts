import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // prevent people to use the component directly
  // selector: 'app-do-greet',
  template: `
    <div>
      Hi {{name}}!
    </div>
    <button (click)="doGreet()">Greet</button>
  `,
  styles: []
})
export class GreeterComponent implements OnInit {
  @Input() name;
  @Output() greet = new EventEmitter();
  constructor() { }

  doGreet() {
    this.greet.emit('Hi, ${this.name}');
  }

  ngOnInit() { }
}
