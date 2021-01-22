import { Component, OnInit } from '@angular/core';
import { BreweryDto } from '../api/beer-manager/v1/models/brewery-dto';
import { BreweryService, BeerService } from '../api/beer-manager/v1/services';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerResultDto } from '../api/beer-manager/v1/models/beer-result-dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-beer-add',
  templateUrl: './beer-add.component.html',
  styleUrls: ['./beer-add.component.scss'],
})
export class BeerAddComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly breweryService: BreweryService,
    private readonly beerService: BeerService,
    private router: Router
  ) {
    this.beerGroup = this.fb.group({
      abv: [
        '',
        [
          Validators.min(0),
          Validators.max(100),
          Validators.pattern('^(([0-9]*)|(([0-9]*).([0-9]*)))$'),
        ],
      ],
      brewery: ['', [Validators.required]],
      description: null,
      ibu: [
        '',
        [
          Validators.min(0),
          Validators.max(1000),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      name: ['', [Validators.required]],
      style: null,
    });
  }

  public beerGroup: FormGroup;

  public breweries: BreweryDto[];
  public uniqueBreweries: BreweryDto[] = new Array();
  public brewery: SelectItem[] = new Array();
  public beer: BeerResultDto;
  public selectedBrewery: any;
  public currentBeerName: string;

  ngOnInit(): void {
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

  public backToList() {
    this.router.navigate(['/beers']);
  }

  submitCriteria() {
    this.beerService
      .addNewBeer({
        body: this.beerGroup.value,
      })
      .subscribe(
        (response) => {
          this.beer = response;
          this.router.navigate(['/beers/info', this.beer.id]);
        },
        (error) => {
          console.log(error);
        }
      );
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
