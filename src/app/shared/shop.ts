export class Shop {
  constructor (public id: number,
               public title: string,
               public work_time: WorkTime,
               public address: string,
               public products: Product[]) {}
}
export class Product {
  constructor(public id: number,
              public title: string,
              public description: string) {}
}
export class WorkTime {
  constructor(public start: Time,
              public end: Time) {}
}
export  class Time {
  constructor(public hours: number,
              public minutes: number) {}
}
