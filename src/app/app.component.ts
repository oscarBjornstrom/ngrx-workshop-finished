import {Component, OnInit} from '@angular/core';
import {interval, Observable, of, ReplaySubject, throwError} from 'rxjs';
import {catchError, delay, retryWhen, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-workshop-start';

  customOBS = new Observable((observer) => {
    observer.next('haj');
    observer.next('Wurld');
    // observer.complete();
    observer.next('something');
    observer.error('catch me');
    observer.next('I will not be emiited');
    observer.complete();
  });

  customSubject = new ReplaySubject(5);

  ngOnInit(): void {
    this.customOBS.pipe(
      catchError((err) => switchMap(() => interval(1000)))
    ).subscribe(
      next => console.log(next),
      error => console.log('errored', error),
      () => console.log('Completed')
    );


    this.customSubject.next(1);
    this.customSubject.next(2);
    this.customSubject.next(3);
    this.customSubject.next(4);
    this.customSubject.next(5);
    this.customSubject.next(6);
    this.customSubject.next(7);

    this.customSubject.subscribe(console.log);
  }
}
