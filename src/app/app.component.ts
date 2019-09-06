import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doorselector';
  isMobile$: Observable<boolean>;
  dark$: Observable<boolean>;
  open$: Observable<boolean>;
  public innerWidth: any;

  @HostListener('window:resize', ['$event']) onResize() {
    this.innerWidth = window.innerWidth;
    const mobile = this.innerWidth < 765 ? true : false;
    this.isMobile$ = of(mobile);
  }

  constructor() {
    matchMedia('(prefers-color-scheme: dark)').matches ?
      this.dark$ = of(true) :  this.dark$ = of(false);
    this.open$ = of(false);
   }

  ngOnInit() {
      this.onResize();
  }
}
