import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements AfterViewInit {
  /** Template reference to the canvas element */
  @ViewChild('canvasEl1') canvasEl1: ElementRef;
  @ViewChild('canvasEl2') canvasEl2: ElementRef;
  @ViewChild('canvasEl3') canvasEl3: ElementRef;

  private canvas: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit() {
    var ctx1 = this.canvas = (this.canvasEl1.nativeElement as HTMLCanvasElement).getContext('2d');
    ctx1.lineWidth = 10;
    ctx1.beginPath();
    ctx1.strokeStyle = "#707070";
    ctx1.setLineDash([5, 12])
    ctx1.moveTo(0, 264.18);
    ctx1.lineTo(303.93, 0);
    ctx1.stroke();

    var ctx2 = this.canvas = (this.canvasEl2.nativeElement as HTMLCanvasElement).getContext('2d');
    ctx2.lineWidth = 10;
    ctx2.beginPath();
    ctx2.strokeStyle = "#707070";
    ctx2.setLineDash([5, 12])
    ctx2.moveTo(0, 151.96);
    ctx2.lineTo(287.56, 0);
    ctx2.stroke();

    var ctx3 = this.canvas = (this.canvasEl3.nativeElement as HTMLCanvasElement).getContext('2d');
    ctx3.lineWidth = 10;
    ctx3.beginPath();
    ctx3.strokeStyle = "#707070";
    ctx3.setLineDash([5, 12])
    ctx3.moveTo(0, 65.46);
    ctx3.lineTo(241.27, 0);
    ctx3.stroke();
  }


}