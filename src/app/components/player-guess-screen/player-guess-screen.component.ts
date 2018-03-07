import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'player-guess-screen',
  templateUrl: './player-guess-screen.component.html',
  styleUrls: ['./player-guess-screen.component.css']
})
export class PlayerGuessScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
