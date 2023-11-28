import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, effect, signal } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-signal-ref',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './signal-ref.component.html',
  styleUrl: './signal-ref.component.scss',
})
@UntilDestroy()
export class SignalRefComponent {
  //declarations

  isActive = signal(0);
  isActiveLabel = computed(() => this.isActive() * 6);



  constructor(private http: HttpClient) {

    effect(() => {
      console.log(`The isActive signal changed value to ${this.isActive()}`);
    });



    /**
     * basic http get function for future reference
     * npm i @ngneat/until-destroy
     * to use the pipe until destoy
     * 
     * 
     */
    setTimeout(() => {
      this.http
      .get('https://api.kanye.rest/')
      .pipe(untilDestroyed(this),
      catchError((error) => {
        console.log(error);
        return of(null);
      }))
      .subscribe(result => console.log(result));
      this.isActive.set(3);
      console.log(this.isActive());
    }, 1500);
  }
}
