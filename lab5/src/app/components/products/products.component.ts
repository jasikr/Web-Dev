import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = ['Phones', 'Cameras', 'Accessories', 'Laptops'];
  
  selected = 'Phones'; 

  products = [
    {
      id: 1,
      category: 'Phones',
      name: 'Apple iPhone 13',
      description: 'Смартфон Apple iPhone 13 128Gb черный',
      rating: 4.5,
      likes: 0,
      image: './assets/iPhone13.jpeg', 
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },
    {
      id: 2,
      category: 'Phones',
      name: 'Samsung Galaxy S21',
      description: 'Смартфон Samsung Galaxy S21 FE 6 ГБ/128 ГБ зеленый',
      rating: 4.6,
      likes: 0,
      image: './assets/samsungS21.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-6-gb-128-gb-zelenyi-103394377/?c=750000000',
    },
    {
      id: 3,
      category: 'Phones',
      name: 'Google Pixel 7',
      description: 'Смартфон Google Pixel 7 Pro 12 ГБ/256 ГБ белый',
      rating: 4.2,
      likes: 0,
      image: './assets/googlePixel5.jpg',
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-256-gb-belyi-107066176/?c=750000000',
    },
    {
      id: 4,
      category: 'Phones',
      name: 'OnePlus 9 Pro',
      description: 'Смартфон OnePlus 9 Pro 8 ГБ/128 ГБ черный',
      rating: 4.4,
      likes: 0,
      image: './assets/oneplus9Pro.jpg',
      link: 'https://kaspi.kz/shop/p/oneplus-9-pro-8-gb-128-gb-chernyi-107222599/?c=750000000',
    },
    {
      id: 5,
      category: 'Phones',
      name: 'Xiaomi Mi 11',
      description: 'Смартфон Xiaomi Mi 11 Lite 5G NE 8 ГБ/256 ГБ синий',
      rating: 4.3,
      likes: 0,
      image: './assets/xiaomiMi11.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-11-lite-5g-ne-8-gb-256-gb-sinii-102591404/?c=750000000',
    },

    {
      id: 6,
      category: 'Cameras',
      name: 'Canon EOS 90D',
      description: 'Высококачественная камера для профессионалов.',
      rating: 4.7,
      likes: 0,
      image: './assets/canon90D.jpg',
      link: 'https://kaspi.kz/shop/p/canon-eos-90d-kit-ef-s-18-55mm-f-3-5-5-6-is-stm-chernyi-100086925/?c=750000000',
    },
    {
      id: 7,
      category: 'Cameras',
      name: 'Sony A7 III',
      description: 'Фотокамера для профессионалов.',
      rating: 4.8,
      likes: 0,
      image: './assets/sonyA7III.jpg',
      link: 'https://kaspi.kz/shop/p/sony-alpha-a7-iii-chernyi-102454243/?c=750000000',
    },
    {
      id: 8,
      category: 'Cameras',
      name: 'Nikon D850',
      description: 'Новая камера Nikon для профессионалов.',
      rating: 4.6,
      likes: 0,
      image: './assets/nikonD850.jpg',
      link: 'https://kaspi.kz/shop/p/nikon-d850-body-chernyi-102151361/?c=750000000',
    },
    {
      id: 9,
      category: 'Cameras',
      name: 'Fujifilm X-T4',
      description: 'Компактная камера Fujifilm с высокой чувствительностью.',
      rating: 4.7,
      likes: 0,
      image: './assets/fujifilmXT4.jpg',
      link: 'https://kaspi.kz/shop/p/fujifilm-x-s20-kit-xc-15-45-mm-f3-5-5-6-ois-pz-112459199/?c=750000000',
    },
    {
      id: 10,
      category: 'Cameras',
      name: ' PanasonicLumix GH5',
      description: 'Профессиональная видеокамера Panasonic.',
      rating: 4.5,
      likes: 0,
      image: './assets/panasonicGH5.jpg',
      link: 'https://kaspi.kz/shop/p/panasonic-lumix-dc-gh5-ii-body-chernyi-102152041/?c=750000000',
    },

    {
      id: 11,
      category: 'Accessories',
      name: 'Apple AirPods Pro',
      description: 'Высококачественные наушники с активным шумоподавлением.',
      rating: 4.8,
      likes: 0,
      image: './assets/airpodsPro.jpg',
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      id: 12,
      category: 'Accessories',
      name: 'Logitech Mouse',
      description: 'Качественная мышь для работы и игр.',
      rating: 4.6,
      likes: 0,
      image: './assets/logitechMouse.jpg',
      link: 'https://kaspi.kz/shop/p/logitech-wireless-mouse-m280-usb-chernyi-9000151/?c=750000000',
    },
    {
      id: 13,
      category: 'Accessories',
      name: 'Samsung Galaxy Watch',
      description: 'Смарт-часы с множеством функций.',
      rating: 4.5,
      likes: 0,
      image: './assets/galaxyWatch.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-ultra-47-mm-serebristyi-chernyi-122020632/?c=750000000',
    },
    {
      id: 14,
      category: 'Accessories',
      name: 'Bose QC35 II',
      description: 'Наушники с отменным качеством звука.',
      rating: 4.7,
      likes: 0,
      image: './assets/boseQC35II.jpg',
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-earbuds-ii-chernyi-108241816/?c=750000000',
    },
    {
      id: 15,
      category: 'Accessories',
      name: 'Anker Power Bank',
      description: 'Мощный внешний аккумулятор для зарядки ваших устройств.',
      rating: 4.4,
      likes: 0,
      image: './assets/ankerPowerBank.jpg',
      link: 'https://kaspi.kz/shop/p/anker-nano-power-bank-black-ank-a1653h11-bk-5000-mach-chernyi-132720692/?c=750000000',
    },

    {
      id: 16,
      category: 'Laptops',
      name: 'Apple MacBook Pro 13',
      description: 'Профессиональный ноутбук для работы и творчества.',
      rating: 4.9,
      likes: 0,
      image: './assets/macbookPro.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxt3-118723338/?c=750000000',
    },
    {
      id: 17,
      category: 'Laptops',
      name: 'Dell XPS 13',
      description: 'Ультрабук для мобильной работы.',
      rating: 4.7,
      likes: 0,
      image: './assets/dellXPS.jpg',
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-32-gb-ssd-1000-gb-win-11-pro-210-bdvf-13-109120938/?c=750000000',
    },
    {
      id: 18,
      category: 'Laptops',
      name: 'Lenovo ThinkPad X1',
      description: 'Легкий и мощный ноутбук для профессионалов.',
      rating: 4.6,
      likes: 0,
      image: './assets/lenovoThinkPad.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-g12-14-32-gb-ssd-1024-gb-win-11-pro-21kc00byrt-135170663/?c=750000000',
    },
    {
      id: 19,
      category: 'Laptops',
      name: 'HP Spectre x360',
      description: 'Ноутбук с экраном 2 в 1 для работы и развлечений.',
      rating: 4.8,
      likes: 0,
      image: './assets/hpSpectre.jpg',
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-16-gb-ssd-1000-gb-win-11-14-eu0003ci-a19gjea-118723256/?c=750000000',
    },
    {
      id: 20,
      category: 'Laptops',
      name: 'Microsoft Surface Laptop 4',
      description: 'Мощный и стильный ноутбук от Microsoft.',
      rating: 4.5,
      likes: 0,
      image: './assets/surfaceLaptop4.jpg',
      link: 'https://kaspi.kz/shop/p/microsoft-surface-laptop-6-13-5-64-gb-ssd-1024-gb-win-11-zkg-00026-121339127/?c=750000000',
    },
  ];

  getfilteredProducts() {
    return this.products.filter(product => product.category === this.selected);
  }

  selectCategory(event: any) {
    this.selected = event.target.innerText; 
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  likeProduct(id: number) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      product.likes += 1;
    }
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
