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

import { BreweryDto } from '../models/brewery-dto';
import { BreweryResultDto } from '../models/brewery-result-dto';

@Injectable({
  providedIn: 'root',
})
export class BreweryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllBreweries
   */
  static readonly GetAllBreweriesPath = '/v1/brewery';

  /**
   * Get all breweries
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBreweries()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBreweries$Response(params?: {
  }): Observable<StrictHttpResponse<Array<BreweryResultDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BreweryService.GetAllBreweriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BreweryResultDto>>;
      })
    );
  }

  /**
   * Get all breweries
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllBreweries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBreweries(params?: {
  }): Observable<Array<BreweryResultDto>> {

    return this.getAllBreweries$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BreweryResultDto>>) => r.body as Array<BreweryResultDto>)
    );
  }

  /**
   * Path part for operation addNewBrewery
   */
  static readonly AddNewBreweryPath = '/v1/brewery';

  /**
   * Add new brewery
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addNewBrewery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addNewBrewery$Response(params?: {
    body?: BreweryDto
  }): Observable<StrictHttpResponse<BreweryResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BreweryService.AddNewBreweryPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BreweryResultDto>;
      })
    );
  }

  /**
   * Add new brewery
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addNewBrewery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addNewBrewery(params?: {
    body?: BreweryDto
  }): Observable<BreweryResultDto> {

    return this.addNewBrewery$Response(params).pipe(
      map((r: StrictHttpResponse<BreweryResultDto>) => r.body as BreweryResultDto)
    );
  }

  /**
   * Path part for operation getBreweryByGuid
   */
  static readonly GetBreweryByGuidPath = '/v1/brewery/{guid}';

  /**
   * Get brewery by guid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBreweryByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBreweryByGuid$Response(params: {
    guid: string;
  }): Observable<StrictHttpResponse<{ 'id'?: string, 'logo'?: string, 'name'?: string }>> {

    const rb = new RequestBuilder(this.rootUrl, BreweryService.GetBreweryByGuidPath, 'get');
    if (params) {
      rb.path('guid', params.guid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{ 'id'?: string, 'logo'?: string, 'name'?: string }>;
      })
    );
  }

  /**
   * Get brewery by guid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBreweryByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBreweryByGuid(params: {
    guid: string;
  }): Observable<{ 'id'?: string, 'logo'?: string, 'name'?: string }> {

    return this.getBreweryByGuid$Response(params).pipe(
      map((r: StrictHttpResponse<{ 'id'?: string, 'logo'?: string, 'name'?: string }>) => r.body as { 'id'?: string, 'logo'?: string, 'name'?: string })
    );
  }

  /**
   * Path part for operation updateBreweryByGuid
   */
  static readonly UpdateBreweryByGuidPath = '/v1/brewery/{guid}';

  /**
   * update brewery
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBreweryByGuid()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBreweryByGuid$Response(params: {
    guid: string;
    body?: BreweryDto
  }): Observable<StrictHttpResponse<BreweryResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BreweryService.UpdateBreweryByGuidPath, 'put');
    if (params) {
      rb.path('guid', params.guid, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BreweryResultDto>;
      })
    );
  }

  /**
   * update brewery
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateBreweryByGuid$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBreweryByGuid(params: {
    guid: string;
    body?: BreweryDto
  }): Observable<BreweryResultDto> {

    return this.updateBreweryByGuid$Response(params).pipe(
      map((r: StrictHttpResponse<BreweryResultDto>) => r.body as BreweryResultDto)
    );
  }

  /**
   * Path part for operation deleteBrewery
   */
  static readonly DeleteBreweryPath = '/v1/brewery/{guid}';

  /**
   * Get brewery by guid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBrewery()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBrewery$Response(params: {
    guid: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BreweryService.DeleteBreweryPath, 'delete');
    if (params) {
      rb.path('guid', params.guid, {});
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
   * Get brewery by guid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBrewery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBrewery(params: {
    guid: string;
  }): Observable<void> {

    return this.deleteBrewery$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
