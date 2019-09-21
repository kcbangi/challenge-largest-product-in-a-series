class LargestProduct {
  constructor(number) {
    this.number = number;
    let thousandNum = this.number.split('');
    let product = 0;
    let position = 0;

    for (let i = 0; i < thousandNum.length; i++) {
      let fiveNum = thousandNum.slice(i, i + 5);
      let current = 1;
      for (let j = 0; j < fiveNum.length; j++) {
        current *= fiveNum[j];
      }
      if (current > product) {
        product = current;
        position = i;
      }
    }
    this.product = product;
    this.position = position;
  }

  getLargestProductIndex() {
    return this.position;
  }

  getLargestProduct() {
    return this.product;
  }
}

module.exports = LargestProduct;
