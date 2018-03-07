import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'join-screen',
  templateUrl: './join-screen.component.html',
  styleUrls: ['./join-screen.component.css']
})
export class JoinScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
    this._SignalRService.EventWatcher.subscribe();
  }

}
