import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 20;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    disableDefaultUI:true,
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    minZoom: 10
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.center = {
      lat: Number(this.activatedRoute.snapshot.params['lat']) ,
      lng: Number(this.activatedRoute.snapshot.params['long']),
    }
  }

}
