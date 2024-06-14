import { Component } from '@angular/core';

@Component({
  selector: 'app-manual-open',
  templateUrl: './manual-open.component.html',
  styleUrls: ['./manual-open.component.css']
})
export class ManualOpenComponent {

  openMobileApp() {
    const customUri = 'com.csx.shipcsx.mobile-dev://';

    window.location.href = customUri;

    if(!document.hidden){
      window.alert('Cannot open app...')
    }

    // setTimeout(() => {
    //   // Fallback action if needed
    //   // window.location.href = 'https://fallbackurl.com';
    // }, 500);
  }
}
