import EvaluationResult from "./EvaluationResult";
import Exam from "./Exam";
import Person from "./Person";
import Student from "./Student";
import Teacher from "./Teacher";
import crypto from "node:crypto";

class Item {
  constructor(private _name: string, private _price: number) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw Error("Mínimo 3 caracteres.");
    this.name = this._name;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw Error("O valor não pode ser negativo.");
    this.price = this._price;
  }
}

class Order {
  public _id: string;
  constructor(
    public _client: Person,
    private _items: Item[],
    private _paymentMethod: string,
    private _discount: number
  ) {
    this._id = this.generateId();
    this._client = _client;
    this.items = _items;
    this.paymentMethod = _paymentMethod;
    this.discount = _discount;
  }

  get items() {
    return this._items;
  }

  set items(value: Item[]) {
    if (value.length < 1) throw Error("Deve haver pelo menos um produto.");
    this._items = value;
  }

  get paymentMethod() {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    const paymentMethods = ["dinheiro", "cartão", "vale"];
    if (!paymentMethods.includes(value))
      throw Error("Forma de pagamento deve ser dinheiro, cartão ou vale.");
    this._paymentMethod = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) throw Error("O desconto não pode ser negativo.");
    this._discount = value;
  }

  generateId(): string {
    const id = crypto.randomUUID();
    return id;
  }

  calculateTotal() {
    return this._items.reduce((acc, cur) => acc + cur.price, 0);
  }

  calculateTotalWithDiscount() {
    const total = this.calculateTotal();
    return total * (1 - this._discount);
  }
}

class OrderRepository {
  private _orders: Order[] = [];

  addOrder(order: Order) {
    this._orders.push(order);
  }

  removeOrder(order: Order) {
    const index = this._orders.indexOf(order);
    if (index > -1) {
      this._orders.splice(index, 1);
    } else {
      throw Error("Item não consta na lista.");
    }
  }

  listByClient(client: string) {
    const filter = this._orders.filter(
      (order) => order._client.name === client
    );
    return filter;
  }

  listBySortedValue(value: "maior" | "menor") {
    const math = value === "maior" ? -1 : 1;
    const filter = this._orders.sort(
      (a, b) =>
        math * a.calculateTotalWithDiscount() + b.calculateTotalWithDiscount()
    );
    return filter;
  }
}

const birth = new Date("1993-09-15");
const teacher = new Teacher("tainha", birth, 2500, "biologia");
const evaluation1 = new Exam(10, teacher);
const grade1 = new EvaluationResult(evaluation1, 9);
const grades = [grade1];
const student = new Student("garcez", birth, grades);
const student2 = new Student("nicolau", birth, grades);
const batata = new Item("batata", 5);
const guarana = new Item("guarana", 3);
const dolly = new Item("Dolly", 1.5);
const order = new Order(student, [batata, guarana], "vale", 0.5);
const order2 = new Order(student2, [dolly, guarana], "vale", 0.5);
const orderList = new OrderRepository();

orderList.addOrder(order);
orderList.addOrder(order2);
// orderList.removeOrder(order2);
// console.log(orderList.listByClient("nicolau"));
console.log(orderList.listBySortedValue("menor"));

// console.log(order);
// console.log(order.calculateTotal());
// console.log(order.calculateTotalWithDiscount());
// console.log(orderList);
