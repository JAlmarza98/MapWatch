import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '@services/geolocation.service';
import { IGeolocationAPIResponse, IMatchedAddressResponse } from '@interfaces/geolocation.interface';
import { GeolocationStatus } from '@interfaces/enums/geolocation-status.enum';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  address!: string;
  MatchedAdress!: Array<IMatchedAddressResponse>
  loading = false

  constructor(
    private geolocationService: GeolocationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchAddress(): void {
    if (this.address) {
      this.loading = true;
      this.geolocationService.searchDirection(this.address)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe( response => {

        if((response as IGeolocationAPIResponse).status === GeolocationStatus.OK && (response as IGeolocationAPIResponse).results.length !== 0) {
          this.MatchedAdress = (response as IGeolocationAPIResponse).results;
        }

      })
    }
  }

  goToEditor(address: IMatchedAddressResponse): void {
    this.router.navigateByUrl(`/map/${address.geometry.location.lat}/${address.geometry.location.lng}`)
  }
}
