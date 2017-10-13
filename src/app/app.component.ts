import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails = [
		{email: "vincentsnow@gmx.com", importance: "Urgent", subject: "THERE'S NO MORE FUCKING TEA.", content: "There's no tea on the 3rd floor. Please buy some."},
		{email:"rbell@codingdojo.com", importance: "Low", subject: "I DON'T HAVE AN INSIDE VOICE.", content: "WHAT THE HELL IS A QUIET???" }
  ]
}
