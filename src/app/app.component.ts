import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  username: string = '';
  password: string = '';
  wasWelcomed = false;
  theForm: FormGroup = new FormGroup({
    theUser: new FormControl('', Validators.required),
    thePassword: new FormControl('', Validators.required),
  });


  subsub = " veeeeery noisy";
  sub = 'woohoo'
  showWelcome() {
    alert('Welcome !');
    this.wasWelcomed = true;

  }


}
