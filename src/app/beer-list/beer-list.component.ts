import { Component, OnInit, ViewChild } from '@angular/core';
import { BeerService, BreweryService } from '../api/beer-manager/v1/services';
import { BeerResultDto } from '../api/beer-manager/v1/models/beer-result-dto';
import { BreweryDto } from '../api/beer-manager/v1/models/brewery-dto';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  constructor(
    private readonly beerService: BeerService,
    private readonly breweryService: BreweryService
  ) {
    this.columns = [
      { field: 'name', header: 'name' },
      { field: 'style', header: 'style', isCustom: true },
      { field: 'brewery', header: 'brewery', isCustom: true },
      { field: 'ibu', header: 'ibu' },
      { field: 'abv', header: 'abv' },
      { field: 'description', header: 'description' },
    ];
  }

  @ViewChild('table') table: Table;

  public beers: BeerResultDto[];
  public breweries: BreweryDto[];
  public uniqueStyles: string[] = new Array();
  public uniqueBreweries: BreweryDto[] = new Array();

  public columns: any[];

  public style: SelectItem[] = new Array();
  public brewery: SelectItem[] = new Array();
  public selectedStyle: any[] = [];
  public selectedBrewery: any[] = [];

  public deleteBeer(beer: BeerResultDto) {
    console.log('deleteBeer');
    console.log(beer);
  }

  public beerInfo(beer: BeerResultDto) {
    console.log('beerInfo');
    console.log(beer);
  }

  public breweryInfo(brewery: BreweryDto) {
    console.log('beerInfo');
    console.log(brewery);
  }

  public editBeer(beer: BeerResultDto) {
    console.log('editBeer');
    console.log(beer);
  }

  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe((response) => {
      this.beers = response;
      this.beers.forEach((beer) => {
        console.log(beer);
        if (
          this.uniqueStyles.indexOf(beer.style) === -1 &&
          beer.style !== null
        ) {
          this.uniqueStyles.push(beer.style);
        }
      });
      setTimeout(() => this.loadStyleLabels());
    });
    this.breweryService.getAllBreweries().subscribe((response) => {
      this.breweries = response;
      this.breweries.forEach((brewery) => {
        if (
          this.uniqueBreweries.indexOf(brewery) === -1 &&
          brewery.name !== null
        ) {
          this.uniqueBreweries.push(brewery);
        }
      });
      setTimeout(() => this.loadBreweryLabels());
    });
  }

  public onStyleChange(event) {
    this.table.filter(event.value, 'style', 'in');
  }

  public onBreweryChange(event) {
    console.log(event);
    console.log(this.table);
    this.table.filter(event.value, 'brewery', 'in');
  }

  private loadStyleLabels(): void {
    this.uniqueStyles.forEach((style) => {
      this.style.push({
        label: style,
        value: style,
      });
    });
  }

  private loadBreweryLabels(): void {
    this.uniqueBreweries.forEach((brewery) => {
      this.brewery.push({
        label: brewery.name,
        value: brewery,
      });
    });
  }
}
