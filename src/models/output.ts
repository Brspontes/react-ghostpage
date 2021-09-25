export class Person {

  private _param: string;

  public get param(): string {
    return this._param;
  }

  public set param(value: string) {
    this._param = value;
  }

}
