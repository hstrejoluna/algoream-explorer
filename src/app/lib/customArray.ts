export class MyArray<T>{
  private data: { [key: number]: T };
  private _length: number;

  constructor() {
    this.data = {};
    this._length = 0;
  }
  // Get the value at a specific index
  get(index: number): T | undefined {
    return this.data[index];
  }

  // Set value at a specific index
  set(index: number, value: T): void {
    if (index >= this._length) {
      this._length = index + 1;
    }
    this.data[index] = value;
  }
  // Add an element to the end
  push(value: T): number {
    this.data[this._length] = value;
    this._length++;
    return this._length;
  }

  // Remove the last element
  pop(): T | undefined {
    if (this._length === 0) return undefined;
    const lastItem = this.data[this._length - 1];
    delete this.data[this._length - 1];
    this._length--;
    return lastItem;
  }

  // Get the length of the array
  get length(): number {
    return this._length;
  }

  // Custom map that works for ReactNode Type, transforms to native array only for practice
  map<U>(callback: (value: T, index: number, array: MyArray<T>) => U): U[] {
    const result: U[] = [];
    for (let i = 0; i < this._length; i++) {
        const value = this.get(i);
        if (value !== undefined) {
            const newValue = callback(value, i, this);
            result.push(newValue);
        }
    }
    return result;
}


  // Custom classic map
  mapClassic<U>(callback: (value: T, index: number, array: MyArray<T>) => U): MyArray<U> {
    const newArray = new MyArray<U>();
    for (let i = 0; i < this._length; i++) {
      const value = this.get(i);
      if (value !== undefined) { // Type guard
        const newValue = callback(value, i, this);
        newArray.push(newValue);
    }
    }
    return newArray;
  }


}