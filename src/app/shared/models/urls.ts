import { BaseUrl } from './base-url';

export class Urls {
  public static DevEnv: BaseUrl = new BaseUrl({
    url: 'http://localhost:8080',
    subDirectory: '',
  });

  public static BaseUrl = Urls.DevEnv;
}
