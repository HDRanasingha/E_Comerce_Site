import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // <-- fixed property name
})
export class LayoutComponent {

}
