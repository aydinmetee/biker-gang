export class BaseEntity {
  public creUser: string;
  public creDate: Date;
  public updUser: string;
  public updDate: Date;
  public id: string;

  constructor() {
    this.creDate = new Date();
    this.updDate = new Date();

    this.creUser = null;
    this.updUser = null;

    this.id = '';
  }
}
