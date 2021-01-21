import { Component, OnInit } from '@angular/core';
import { BeerService } from '../api/beer-manager/v1/services';
import { BeerResultDto } from '../api/beer-manager/v1/models/beer-result-dto';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  constructor(private readonly beerService: BeerService) {}

  public beers: BeerResultDto[];

  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe((response) => {
      this.beers = response;
    });
  }
}
