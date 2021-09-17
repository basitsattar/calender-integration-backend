class ExamplesDatabase {
  constructor() {
    this._data = [
      new Date(2021, 8, 3, 0, 0, 0, 0),
      new Date(2021, 8, 1, 0, 0, 0, 0),
      new Date(2021, 8, 5, 0, 0, 0, 0),
      new Date(2021, 8, 6, 0, 0, 0, 0),
      new Date(2021, 8, 11, 0, 0, 0, 0),
      new Date(2021, 8, 8, 0, 0, 0, 0),
      new Date(2021, 9, 5, 0, 0, 0, 0),
      new Date(2021, 9, 6, 0, 0, 0, 0),
      new Date(2021, 9, 7, 0, 0, 0, 0),
      new Date(2021, 9, 8, 0, 0, 0, 0),
      new Date(2021, 9, 9, 0, 0, 0, 0),
      new Date(2021, 9, 10, 0, 0, 0, 0),
      new Date(2021, 9, 12, 0, 0, 0, 0),
      new Date(2021, 10, 14, 0, 0, 0, 0),
      new Date(2021, 10, 15, 0, 0, 0, 0),
      new Date(2021, 10, 16, 0, 0, 0, 0),
      new Date(2021, 10, 17, 0, 0, 0, 0),
      new Date(2021, 10, 18, 0, 0, 0, 0),
      new Date(2021, 10, 19, 0, 0, 0, 0),
      new Date(2021, 10, 20, 0, 0, 0, 0),
    ];
    this._counter = 0;
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(month) {
    let temp = [...this._data];
    let res = [];
    temp.forEach(date => {
      if (date.getMonth() == month) {
        res.push(date.toDateString());
      }
    })
    return Promise.resolve(res);
  }

  insert(name) {
    const record = {
      id: this._counter,
      name,
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

export default new ExamplesDatabase();
