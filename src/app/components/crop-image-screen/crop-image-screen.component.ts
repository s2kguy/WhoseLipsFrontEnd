import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';

@Component({
  selector: 'crop-image-screen',
  templateUrl: './crop-image-screen.component.html',
  styleUrls: ['./crop-image-screen.component.css']
})
export class CropImageScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) { }

  ngOnInit() {
  }

}
