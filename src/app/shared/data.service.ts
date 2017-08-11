import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shop } from './shop';

export class InMemoryDataService implements  InMemoryDbService {
  createDb() {
    const shops: Shop[] = [
      {
        id: 1,
        title: 'Shop.by',
        work_time: {
          start: {
            hours: 10,
            minutes: 0
          },
          end: {
            hours: 21,
            minutes: 0
          }
        },
        address: 'г. Минск, ул.Притыцкого, д.105',
        products: [
          {
            id: 1,
            title: 'Apple iPhone 7 32GB',
            description: 'Apple iOS, экран 4.7" IPS (750x1334), ОЗУ 2 ГБ, ' +
            'флэш-память 32 ГБ, камера 12 Мп, аккумулятор 1960 мАч, 1 SIM, цвет черный'
          },
          {
            id: 2,
            title: 'Apple iPhone 6 16GB',
            description: 'Apple iOS, экран 4.7" IPS (750x1334), ОЗУ 1 ГБ, ' +
            'флэш-память 16 ГБ, камера 8 Мп, аккумулятор 1810 мАч, 1 SIM, цвет темно-серыйй'
          }
        ]
      },
      {
        id: 2,
        title: 'Market.by',
        work_time: {
          start: {
            hours: 9,
            minutes: 0
          },
          end: {
            hours: 16,
            minutes: 0
          }
        },
        address: 'г. Минск, ул. Уборевича, 95а',
        products: [
          {
            id: 1,
            title: 'Samsung 960 Evo 250GB',
            description: 'M.2, PCI Express 3.0 x4, контроллер Samsung Polaris,' +
            ' микросхемы NAND TLC, последовательный доступ: 3200/1500 MBps, случайный доступ: 330000/300000 IOps'
          },
          {
            id: 2,
            title: 'Kingston SSDNow UV400 240GB',
            description: '2.5", SATA 3.0, контроллер Marvell 88SS1074, микросхемы NAND TLC, ' +
            'последовательный доступ: 550/490 MBps, случайный доступ: 90000/25000 IOps'
          },
          {
            id: 3,
            title: 'Kingston SSDNow V300 120GB',
            description: '2.5", SATA 3.0, контроллер SandForce SF-2281, микросхемы NAND MLC, ' +
            'последовательный доступ: 450/450 MBps, случайный доступ: 85000/55000 IOps'
          }
        ]
      },
      {
        id: 3,
        title: 'Store.by',
        work_time: {
          start: {
            hours: 7,
            minutes: 0
          },
          end: {
            hours: 23,
            minutes: 0
          }
        },
        address: 'г. Минск, ул. Даумана, 23, офис 63',
        products: [
          {
            id: 1,
            title: 'Samsung 850 Evo 250GB',
            description: '2.5", SATA 3.0, контроллер Samsung MGX, микросхемы 3D V-NAND, последовательный доступ: 540/520 MBps'
          }
        ]
      }
    ];

    return { shops };
  }
}
