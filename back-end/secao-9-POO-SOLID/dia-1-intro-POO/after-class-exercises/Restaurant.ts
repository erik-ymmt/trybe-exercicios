class Client {
  private _name: string;
  constructor(name: string) { this._name = name }
}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) { this._name = name; this._price = price }
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
}

export { Client, Order, Item }

