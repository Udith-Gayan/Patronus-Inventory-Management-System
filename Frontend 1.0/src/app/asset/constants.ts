import { HttpHeaders } from '@angular/common/http';

export class Constants {
    static BASE_URL : string = 'http://192.168.1.150:8080';
    static ASSET_API : string = Constants.BASE_URL + '/assets'

    static HTTP_OPTIONS = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
} 