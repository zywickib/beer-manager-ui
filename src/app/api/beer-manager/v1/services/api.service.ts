/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation untappdCrawlGet
   */
  static readonly UntappdCrawlGetPath = '/untappd/crawl';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `untappdCrawlGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  untappdCrawlGet$Response(params?: {
    clientId?: string;
    clientSecret?: string;
    username?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.UntappdCrawlGetPath, 'get');
    if (params) {
      rb.query('clientId', params.clientId, {});
      rb.query('clientSecret', params.clientSecret, {});
      rb.query('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `untappdCrawlGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  untappdCrawlGet(params?: {
    clientId?: string;
    clientSecret?: string;
    username?: string;
  }): Observable<void> {

    return this.untappdCrawlGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
