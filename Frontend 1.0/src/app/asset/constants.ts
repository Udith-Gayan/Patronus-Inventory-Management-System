import { HttpHeaders } from '@angular/common/http';

export class Constants {
    static BASE_URL : string = 'http://localhost:8080';
    static ASSET_API : string = Constants.BASE_URL + '/asset'

    static HTTP_OPTIONS = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
} 