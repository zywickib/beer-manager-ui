import { Component, OnInit, ViewChild } from '@angular/core';
import { BeerService, BreweryService } from '../api/beer-manager/v1/services';
import { BeerResultDto } from '../api/beer-manager/v1/models/beer-result-dto';
import { BreweryDto } from '../api/beer-manager/v1/models/brewery-dto';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  constructor(
    private readonly beerService: BeerService,
    private readonly breweryService: BreweryService,
    private router: Router
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

  public displayPhoto: boolean = false;

  public deleteBeer(beer: BeerResultDto) {
    this.beerService.deleteBeerByGuid({ guid: beer.id }).subscribe(() => {
      this.beers = this.beers.filter((obj) => obj !== beer);
    });
  }

  public beerInfo(beer: BeerResultDto) {
    this.router.navigate(['/beers/info', beer.id]);
  }

  public editBeer(beer: BeerResultDto) {
    this.router.navigate(['/beers/edit', beer.id]);
  }

  public addNewBeer() {
    this.router.navigate(['/beers/add']);
  }

  public resetTable(table: Table) {
    table.reset();
    this.selectedBrewery = [];
    this.selectedStyle = [];
  }
  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe((response) => {
      this.beers = response;
      this.beers.forEach((beer) => {
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
    this.table.filter(event.value, 'brewery', 'in');
  }

  public showPhotoDialog() {
    this.displayPhoto = true;
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
