import { Component } from '@angular/core';
import { sha256 } from 'js-sha256';

import { userIcon } from '@cds/core/icon/shapes/user.js';
import { ClarityIcons } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';


  constructor() {
    var hash = sha256.create();
    hash.update('Message to hash');
    hash.hex();
    console.log(hash.toString());
  }
}
