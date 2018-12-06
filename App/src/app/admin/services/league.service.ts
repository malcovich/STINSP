// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class AdminLeagueService {
    constructor(private http: HttpClient) { }

    getPages() {
        // return this.http.get('http://localhost:3000/pages')
        //     .map(res => res.json());
        return this.http.get('http://localhost:3000/pages');
    }

    getPage(slug) {
        // return this.http.get('http://localhost:3000/pages/' + slug)
        //     .map(res => res.json());
        return this.http.get('http://localhost:3000/pages/' + slug);
    }

    postAddPage(value) {
        // return this.http.post('http://localhost:3000/pages/add-page', value)
        //     .map(res => res.json());
        return this.http.post('http://localhost:3000/leagues/add', value);
    }

    getEditPage(id) {
        // return this.http.get('http://localhost:3000/pages/edit-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:3000/pages/edit-page/' + id);
    }

    postEditPage(value) {
        // return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value)
        //     .map(res => res.json());
        return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value);
    }


}
