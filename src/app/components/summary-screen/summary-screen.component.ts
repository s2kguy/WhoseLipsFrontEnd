import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'summary-screen',
  templateUrl: './summary-screen.component.html',
  styleUrls: ['./summary-screen.component.css']
})
export class SummaryScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
