import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  value = 'salomebrack';
  domain = '@gmail.com';

  constructor(private snackBar: MatSnackBar, private clipboard: Clipboard) { }

  redirect() {
    window.location.href = 'mailto:' + this.getValue(this.value) + this.domain;
  }

  copy() {
    const successful = this.clipboard.copy(this.getValue(this.value) + this.domain);

    if (successful) {
      this.snackBar.open('"' + this.getValue(this.value) + this.domain + '" copied', '', {
        duration: 2000
      });
    }
  }

  getValue(v: string) {
    return v + '.illustration';
  }
}
