import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  imagePaths: string[] = [];
  imagesPerBatch = 3;
  loading = false;

  constructor() {
    this.loadImages();
  }

  loadImages() {
    this.loading = true;
    setTimeout(() => {
      for (let i = 1; i <= this.imagesPerBatch; i++) {
        this.imagePaths.push(this.getRandomImageUrl());
      }
      this.loading = false;
    }, 1000);
  }

  getRandomImageUrl(): string {
    const baseUrl = 'https://source.unsplash.com/random/';
    const width = 700;
    const height = 700;
    const randomSeed = Math.floor(Math.random() * 1000);
    return `${baseUrl}${width}x${height}?${randomSeed}`;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition + windowSize >= bodyHeight - 200 && !this.loading) {
      this.loadImages();
    }
  }
}
