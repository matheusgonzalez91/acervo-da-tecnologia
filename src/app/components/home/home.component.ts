import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('counterElement1') counterElement1!: ElementRef;
  @ViewChild('counterElement2') counterElement2!: ElementRef;
  @ViewChild('counterElement3') counterElement3!: ElementRef;
  @ViewChild('counterElement4') counterElement4!: ElementRef;

  startCounter1 = false;
  startCounter2 = false;
  startCounter3 = false;
  startCounter4 = false;

  count1 = 70;
  count2 = 0;
  count3 = 0;
  count4 = 0;

  targetCount1 = 90;
  targetCount2 = 14;
  targetCount3 = 20;
  targetCount4 = 10;

  intervalId1: any;
  intervalId2: any;
  intervalId3: any;
  intervalId4: any;

  ngOnInit() {
    this.startCounterInterval();
  }

  startCounterInterval() {
    if (this.startCounter1 && !this.intervalId1) {
      this.intervalId1 = setInterval(() => {
        if (this.count1 < this.targetCount1) {
          this.count1++;
        } else {
          clearInterval(this.intervalId1);
        }
      }, 100);
    }
    if (this.startCounter2 && !this.intervalId2) {
      this.intervalId2 = setInterval(() => {
        if (this.count2 < this.targetCount2) {
          this.count2++;
        } else {
          clearInterval(this.intervalId2);
        }
      }, 100);
    }
    if (this.startCounter3 && !this.intervalId3) {
      this.intervalId3 = setInterval(() => {
        if (this.count3 < this.targetCount3) {
          this.count3++;
        } else {
          clearInterval(this.intervalId3);
        }
      }, 100);
    }
    if (this.startCounter4 && !this.intervalId4) {
      this.intervalId4 = setInterval(() => {
        if (this.count4 < this.targetCount4) {
          this.count4++;
        } else {
          clearInterval(this.intervalId4);
        }
      }, 100);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const rect1 = this.counterElement1?.nativeElement.getBoundingClientRect();
    const rect2 = this.counterElement2?.nativeElement.getBoundingClientRect();
    const rect3 = this.counterElement3?.nativeElement.getBoundingClientRect();
    const rect4 = this.counterElement4?.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect1?.top <= windowHeight && rect1?.bottom >= 0) {
      this.startCounter1 = true;
      this.startCounterInterval();
    }

    if (rect2?.top <= windowHeight && rect2?.bottom >= 0) {
      this.startCounter2 = true;
      this.startCounterInterval();
    }

    if (rect3?.top <= windowHeight && rect3?.bottom >= 0) {
      this.startCounter3 = true;
      this.startCounterInterval();
    }

    if (rect4?.top <= windowHeight && rect4?.bottom >= 0) {
      this.startCounter4 = true;
      this.startCounterInterval();
    }
  }
}
