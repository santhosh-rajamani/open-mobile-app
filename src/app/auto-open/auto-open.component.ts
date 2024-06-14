import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-open',
  templateUrl: './auto-open.component.html',
  styleUrls: ['./auto-open.component.css']
})
export class AutoOpenComponent {
  ngOnInit(): void {
    this.openMobileApp();
  }

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
