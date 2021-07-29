import { Component, ViewChild } from '@angular/core';
import { GALLERY_IMAGE, NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';

@Component({
  selector: 'app-generate-meme',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GenerateMemeComponent {
  @ViewChild(NgxImageGalleryComponent, { static: true }) ngxImageGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  images: GALLERY_IMAGE[] = [
    {
      url: '/assets/images/research-projects/generate-meme/0.png',
      thumbnailUrl: '/assets/images/research-projects/generate-meme/0.png'
    },
    {
      url: '/assets/images/research-projects/generate-meme/1.png',
      thumbnailUrl: '/assets/images/research-projects/generate-meme/1.png'
    },
    {
      url: '/assets/images/research-projects/generate-meme/2.png',
      thumbnailUrl: '/assets/images/research-projects/generate-meme/2.png'
    },
  ];

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
}
