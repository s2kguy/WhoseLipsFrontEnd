import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'join-or-host',
  templateUrl: './join-or-host.component.html',
  styleUrls: ['./join-or-host.component.css']
})
export class JoinOrHostComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
