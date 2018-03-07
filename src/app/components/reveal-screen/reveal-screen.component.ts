import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'reveal-screen',
  templateUrl: './reveal-screen.component.html',
  styleUrls: ['./reveal-screen.component.css']
})
export class RevealScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
