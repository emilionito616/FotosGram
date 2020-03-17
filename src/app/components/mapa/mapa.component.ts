import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {
  @Input() coords: string;
  @ViewChild('mapa', {static: false}) mapa: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbGlvbnIxMyIsImEiOiJjazd3OXp4M28wMDBnM2txa3U0M29tbWZnIn0.w5vZGPxq4W1ZZVQf5-EDUA';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15
    });

    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  }

  ngOnInit() {
  }
}
