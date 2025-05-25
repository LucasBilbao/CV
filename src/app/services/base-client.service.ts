import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlBuilder } from '../utils/urlBuilder';
import { PATHS } from '../utils/paths.enum';
import { ALIAS } from '../utils/alias.enum';

@Injectable({
  providedIn: 'root',
})
export class BaseClientService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  protected readonly ALIAS: ALIAS;

  constructor(private http: HttpClient, alias: ALIAS) {
    this.ALIAS = alias;
  }

  protected fetch<T>(
    sub: BehaviorSubject<T[]>,
    path: PATHS,
    params: { [key: string]: string | number } = {}
  ): void {
    this.isLoadingObservable = true;
    const url = new UrlBuilder().setPath(path).setParameters(params).get();
    this.http
      .get<{ [x: string]: T[] }>(url)
      .subscribe(({ [this.ALIAS]: data }) => {
        sub.next(data);
        this.isLoadingObservable = false;
      });
  }

  public set isLoadingObservable(value: boolean) {
    this.isLoading$.next(value);
  }

  public get isLoadingObservable(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
