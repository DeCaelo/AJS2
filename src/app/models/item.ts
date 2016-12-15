export class Item {
  public reference: string;
  public name: string;
  public state: number;
  public animateState: string;

  constructor(data: any) {
    this.reference = data.reference;
    this.name = data.name;
    this.state = data.state;
    this.animateState = 'inactive';
  }

  toggleAnimateState() {
    this.animateState = this.animateState === 'inactive' ? 'active' : 'inactive';
    console.log(this.animateState);
  }
}
