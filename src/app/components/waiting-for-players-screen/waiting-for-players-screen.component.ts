import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'waiting-for-players-screen',
  templateUrl: './waiting-for-players-screen.component.html',
  styleUrls: ['./waiting-for-players-screen.component.css']
})
export class WaitingForPlayersScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
