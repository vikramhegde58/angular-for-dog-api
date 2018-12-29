import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  templateUrl: './dog.component.html',
  selector: 'dogs-compo',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  public pageTitle: String = 'DOG LIST';
  public breeds: any;
  public pics: any;
  public searchText: String;
  public searchPic = '../../assets/images/default.png';

  constructor(private dogService: DogService) { }
 
  ngOnInit() {
    this.getBreedsPic();
  }

  getBreedsPic(): void {
    this.dogService.getBreedsPic()
        .subscribe(response => {
        this.pics = response.message;
    });
  }

  searchByBreed(): void{
    console.log(this.searchText);
    this.dogService.searchByBreed(this.searchText)
        .subscribe(response => {
          if(response.status === "success"){
            this.searchPic = response.message;
          } else {
            this.searchPic = '../../assets/images/default.png';
          }
    });
  }
}
