import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'waiting-for-host-screen',
  templateUrl: './waiting-for-host-screen.component.html',
  styleUrls: ['./waiting-for-host-screen.component.css']
})
export class WaitingForHostScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
