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

import { BeerResultDto } from '../models/beer-result-dto';
import { BeerUpdateDto } from '../models/beer-update-dto';
import { BreweryDto } from '../models/brewery-dto';

@Injectable({
  providedIn: 'root',
})
export class BeerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllBeers
   */
  static readonly GetAllBeersPath = '/v1/beer';

  /**
   * Get all beers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBeers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBeers$Response(params?: {
  }): Observable<StrictHttpResponse<Array<BeerResultDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BeerService.GetAllBeersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BeerResultDto>>;
      })
    );
  }

  /**
   * Get all beers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllBeers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBeers(params?: {
  }): Observable<Array<BeerResultDto>> {

    return this.getAllBeers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BeerResultDto>>) => r.body as Array<BeerResultDto>)
    );
  }

  /**
   * Path part for operation addNewBeer
   */
  static readonly AddNewBeerPath = '/v1/beer';

  /**
   * Add beer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addNewBeer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addNewBeer$Response(params?: {
    body?: BeerUpdateDto
  }): Observable<StrictHttpResponse<BeerResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BeerService.AddNewBeerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BeerResultDto>;
      })
    );
  }

  /**
   * Add beer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addNewBeer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addNewBeer(params?: {
    body?: BeerUpdateDto
  }): Observable<BeerResultDto> {

    return this.addNewBeer$Response(params).pipe(
      map((r: StrictHttpResponse<BeerResultDto>) => r.body as BeerResultDto)
    );
  }

  /**
   * Path part for operation getBeerByGuid
   */
  static readonly GetBeerByGuidPath = '/v1/beer/{guid}';

  /**
   * Get beer by guid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBeerByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBeerByGuid$Response(params: {
    guid: string;
  }): Observable<StrictHttpResponse<{ 'abv'?: number, 'brewery'?: BreweryDto, 'description'?: string, 'ibu'?: number, 'id'?: string, 'name'?: string, 'style'?: string }>> {

    const rb = new RequestBuilder(this.rootUrl, BeerService.GetBeerByGuidPath, 'get');
    if (params) {
      rb.path('guid', params.guid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{ 'abv'?: number, 'brewery'?: BreweryDto, 'description'?: string, 'ibu'?: number, 'id'?: string, 'name'?: string, 'style'?: string }>;
      })
    );
  }

  /**
   * Get beer by guid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBeerByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBeerByGuid(params: {
    guid: string;
  }): Observable<{ 'abv'?: number, 'brewery'?: BreweryDto, 'description'?: string, 'ibu'?: number, 'id'?: string, 'name'?: string, 'style'?: string }> {

    return this.getBeerByGuid$Response(params).pipe(
      map((r: StrictHttpResponse<{ 'abv'?: number, 'brewery'?: BreweryDto, 'description'?: string, 'ibu'?: number, 'id'?: string, 'name'?: string, 'style'?: string }>) => r.body as { 'abv'?: number, 'brewery'?: BreweryDto, 'description'?: string, 'ibu'?: number, 'id'?: string, 'name'?: string, 'style'?: string })
    );
  }

  /**
   * Path part for operation updateBeerByGuid
   */
  static readonly UpdateBeerByGuidPath = '/v1/beer/{guid}';

  /**
   * Update Beer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBeerByGuid()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBeerByGuid$Response(params: {
    guid: string;
    body?: BeerUpdateDto
  }): Observable<StrictHttpResponse<BeerResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BeerService.UpdateBeerByGuidPath, 'put');
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
        return r as StrictHttpResponse<BeerResultDto>;
      })
    );
  }

  /**
   * Update Beer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateBeerByGuid$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBeerByGuid(params: {
    guid: string;
    body?: BeerUpdateDto
  }): Observable<BeerResultDto> {

    return this.updateBeerByGuid$Response(params).pipe(
      map((r: StrictHttpResponse<BeerResultDto>) => r.body as BeerResultDto)
    );
  }

  /**
   * Path part for operation deleteBeerByGuid
   */
  static readonly DeleteBeerByGuidPath = '/v1/beer/{guid}';

  /**
   * Delete beer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBeerByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBeerByGuid$Response(params: {
    guid: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BeerService.DeleteBeerByGuidPath, 'delete');
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
   * Delete beer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBeerByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBeerByGuid(params: {
    guid: string;
  }): Observable<void> {

    return this.deleteBeerByGuid$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
