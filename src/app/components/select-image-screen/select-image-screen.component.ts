import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'select-image-screen',
  templateUrl: './select-image-screen.component.html',
  styleUrls: ['./select-image-screen.component.css']
})
export class SelectImageScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
