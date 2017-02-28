import { Router } from 'aurelia-router';

export class AppViewModel {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      { route: '', name: 'hello', moduleId: 'hello' },
      { route: 'about', name: 'about', moduleId: 'about' },
    ]);
  }
}