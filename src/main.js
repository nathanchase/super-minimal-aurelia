import { aurelia } from 'aurelia-framework';

export function configure(aurelia) {
  aurelia.use
         .standardConfiguration();
  aurelia.start().then(() => aurelia.setRoot('app'));
}