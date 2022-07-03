import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-albumslist',
  templateUrl: './albumslist.component.html',
  styleUrls: ['./albumslist.component.css']
})
export class AlbumslistComponent implements OnInit {

  constructor(private albumsService: AlbumsService,) { }
  albums: any[] = [];

  ngOnInit(): void {
    this.albumsService.getItems()
    .pipe(map((data: any) => {
      console.log(data);
      return data.map((item: any) => new Album(item));
    }))
      .subscribe((data) => {
        console.log(data);
        this.albums.push(data);
      });
  }
}
