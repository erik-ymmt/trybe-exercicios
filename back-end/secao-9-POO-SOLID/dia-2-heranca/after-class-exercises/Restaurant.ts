import EvaluationResult from "./EvaluationResult";
import Exam from "./Exam";
import Person from "./Person";
import Student from "./Student";
import Teacher from "./Teacher";

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
  constructor(
    public _client: Person,
    private _items: Item[],
    private _paymentMethod: string,
    private _discount: number
  ) {
    this._client = _client;
    this.items = _items;
    this.paymentMethod = _paymentMethod;
    this.discount = _discount;
  }

  get items() {
    return this._items;
  }

  set items(value: Item[]) {
    if (value.length < 1) throw Error('Deve haver pelo menos um produto.');
    this._items = value;
  }

  get paymentMethod() {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    const paymentMethods = ["dinheiro", "cartão", "vale"]
    if (!paymentMethods.includes(value)) throw Error('Forma de pagamento deve ser dinheiro, cartão ou vale.');
    this._paymentMethod = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) throw Error('O desconto não pode ser negativo.');
    this._discount = value;
  }

  calculateTotal() {
    return this._items.reduce((acc, cur) => acc + cur.price, 0);
  }

  calculateTotalWithDiscount() {
    const total = this.calculateTotal();
    return total * (1 - this._discount);
  }
}

const birth = new Date("1993-09-15");
const teacher = new Teacher('tainha', birth, 2500, 'biologia');
const evaluation1 = new Exam(10, teacher);
const grade1 = new EvaluationResult(evaluation1, 9);
const grades = [grade1];
const student = new Student('garcez', birth, grades)
const batata = new Item("batata", 5);
const guarana = new Item("guarana", 3);
const order = new Order(student, [batata, guarana], "vale", 0.5);

console.log(order);
console.log(order.calculateTotal());
console.log(order.calculateTotalWithDiscount());
