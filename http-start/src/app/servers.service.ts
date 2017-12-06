import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServersService {
  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(
    //   'https://udemy-ng-http-b5d36.firebaseio.com/data.json',
    //   servers,
    //   {
    //     "headers": headers
    //   }
    // );

    return this.http.put(
      'https://udemy-ng-http-b5d36.firebaseio.com/data.json',
      servers,
      {
        "headers": headers
      }
    );
  }

  getServers() {
    return this.http.get(
      'https://udemy-ng-http-b5d36.firebaseio.com/data.json'
    ).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
}
