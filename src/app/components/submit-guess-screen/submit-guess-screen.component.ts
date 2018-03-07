import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'submit-guess-screen',
  templateUrl: './submit-guess-screen.component.html',
  styleUrls: ['./submit-guess-screen.component.css']
})
export class SubmitGuessScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
