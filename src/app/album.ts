// В нем пропишите класс Album с экземплярами свойств “id” и “title”. Допишите в сервисе задания выше метод pipe к get запросу. Используйте функцию map библиотеки RxJs и преобразуйте данные полученные с сервера в массив объектов Ablum, у которых не будет свойства “userId” по сравнению с серверным массивом. Выведите к console.log() массив до преобразования. 

export class Album {

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
  }
  id: any;
  title: any;

}