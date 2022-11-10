class Client {
  private _name: string;
  constructor(name: string) { this._name = name }
}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) { this._name = name; this._price = price }

  get price() { return this._price}
}

class Order {
  private _client: Client;
  private _items: Item[];
  private _paymentMethod: string;
  private _discount: number;

  constructor(
    client: Client,
    items: Item[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  calculateTotal() {
    return this._items.reduce((acc, cur) => (acc + cur.price), 0)
  }

  calculateTotalWithDiscount() {
    const total = this.calculateTotal();
    return total * (1 - this._discount);
  }
}

const erik = new Client('erik');
const batata = new Item('batata', 5);
const guarana = new Item('guarana', 3);
const order = new Order(erik, [batata, guarana], 'cartao', 0.5);

console.log(order.calculateTotal());
console.log(order.calculateTotalWithDiscount());
