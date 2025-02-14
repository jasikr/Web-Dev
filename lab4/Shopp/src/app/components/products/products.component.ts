import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[]; 
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Apple iPhone 15 256Gb',
      description: 'Смартфон Apple iPhone 15 256Gb черный',
      rating: 4.5,
      image: './assets/i15.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000',
      gallery: [
        './assets/i15g.jpg',
        './assets/i15g1.jpg',
        './assets/i15g2.jpg'
      ]
    },
    {
      name: 'Samsung Galaxy S23 Ultra 12',
      description: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      rating: 4.7,
      image: './assets/s23.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      gallery: [
        './assets/s23g.jpg',
        './assets/s23g1.jpg',
        './assets/s23g2.jpg'
      ]
    },
    {
      name: 'Insta360 X4',
      description: 'Экшн-камера Insta360 X4 Standard Bundle',
      rating: 4.2,
      image: './assets/i.jpg',
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-insta360-x4-standard-bundle-118473430/?c=750000000',
      gallery: [
        './assets/ig.jpg',
        './assets/ig1.jpg',
        './assets/ig2.jpg'
      ]
    },
    {
      name: 'iPhone 15 256Gb',
      description: 'Смартфон Apple iPhone 15 256Gb Dual Sim зеленый',
      rating: 4.8,
      image: './assets/ii.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-dual-sim-zelenyi-114323231/?c=750000000',
      gallery: [
        './assets/ii.jpg',
        './assets/ii.jpg',
        './assets/ii.jpg'
      ]
    },
    {
      name: 'Чехол для Iphone 13 (Blue)',
      description: 'Прочный и стильный чехол, черный.',
      rating: 4.5,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
      gallery: [
        './assets/iphone13.jpeg',
        './assets/iphone13.jpeg',
        './assets/iphone13.jpeg'
      ]
    },
    {
      name: 'Apple iPhone 15 256Gb',
      description: 'Смартфон Apple iPhone 15 256Gb черный',
      rating: 4.5,
      image: './assets/i15.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000',
      gallery: [
        './assets/i15g.jpg',
        './assets/i15g1.jpg',
        './assets/i15g2.jpg'
      ]
    },
    {
      name: 'Samsung Galaxy S23 Ultra 12',
      description: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      rating: 4.7,
      image: './assets/s23.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      gallery: [
        './assets/s23g.jpg',
        './assets/s23g1.jpg',
        './assets/s23g2.jpg'
      ]
    },
    {
      name: 'Insta360 X4',
      description: 'Экшн-камера Insta360 X4 Standard Bundle',
      rating: 4.2,
      image: './assets/i.jpg',
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-insta360-x4-standard-bundle-118473430/?c=750000000',
      gallery: [
        './assets/ig.jpg',
        './assets/ig1.jpg',
        './assets/ig2.jpg'
      ]
    },
    {
      name: 'Sony PlayStation 5',
      description: 'Игровая приставка Sony PlayStation 5 Slim',
      rating: 4.5,
      image: './assets/ps5.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
      gallery: [
        './assets/ps5.jpg',
        './assets/ps5.jpg',
        './assets/ps5.jpg'
      ]
    },
    {
      name: 'iPhone 15 256Gb',
      description: 'Смартфон Apple iPhone 15 256Gb Dual Sim зеленый',
      rating: 4.8,
      image: './assets/ii.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-dual-sim-zelenyi-114323231/?c=750000000',
      gallery: [
        './assets/ii.jpg',
        './assets/ii.jpg',
        './assets/ii.jpg'
      ]
    },
  ];

  selectedProduct: Product | null = null;

  showGallery(product: Product) {
    this.selectedProduct = product;
  }

  hideGallery() {
    this.selectedProduct = null;
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
