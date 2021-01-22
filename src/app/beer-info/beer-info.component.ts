import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../api/beer-manager/v1/services';
import { BeerResultDto } from '../api/beer-manager/v1/models/beer-result-dto';

@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.scss'],
})
export class BeerInfoComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly beerService: BeerService,
    private router: Router
  ) {}

  public beer: BeerResultDto;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const beerId = String(routeParams.get('id'));
    this.beerService.getBeerByGuid({ guid: beerId }).subscribe((response) => {
      this.beer = response;
      console.log(this.beer);
    });
  }

  public backToList() {
    this.router.navigate(['/beers']);
  }
}
