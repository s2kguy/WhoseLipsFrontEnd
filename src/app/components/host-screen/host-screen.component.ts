import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'host-screen',
  templateUrl: './host-screen.component.html',
  styleUrls: ['./host-screen.component.css']
})
export class HostScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
