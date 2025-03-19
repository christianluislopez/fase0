import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-app';
}
