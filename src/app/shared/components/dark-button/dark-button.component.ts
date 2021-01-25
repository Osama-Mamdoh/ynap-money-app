import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-button',
  templateUrl: './dark-button.component.html',
  styleUrls: ['./dark-button.component.scss'],
})
export class DarkButtonComponent implements OnInit {
  @Input() text: string;
  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
