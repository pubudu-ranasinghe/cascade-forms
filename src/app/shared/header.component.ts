import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="navbar bg-secondary container">
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-2">Cascading Forms</a>
      </section>
      <section class="navbar-center">
        <img src="https://picturepan2.github.io/spectre/img/spectre-logo.svg">
      </section>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
