import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Vale';
  username = '';
  showPassword = false;
  showPasswordArray = [];

  onClearUsername(){
    this.username = '';
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
    this.showPasswordArray.push(new Date());
    console.log(this.showPasswordArray);
  }
}
