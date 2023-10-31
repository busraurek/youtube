import { Component } from '@angular/core';
import homeData from '../../assets/data/home.json';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  videos: {
    title: string;
    author: string;
    views: string;
    ago: string;
    duration: number;
    id: number;
  }[] = [];
  segments: any[] = [];

  constructor() {
    this.segments = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computer program',
      'Documentary',
      'Music',
    ].map((val) => ({
      title: val,
      selected: false,
    }));

    setTimeout(() => {
      this.selectSegment(0);
      this.videos = homeData;
    }, 1000);
  }
  selectSegment(index: number) {
    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
  }

  doRefresh(event: Event) {
    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 1500);
  }
}
