import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Awesome images!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://petguidereviews.com/wp-content/uploads/2019/02/cartoon-dog-names-768x461.jpg';
  image3 = 'https://previews.123rf.com/images/siridhata/siridhata1702/siridhata170200078/71854477-cartoon-dog-vector-illustration.jpg';

  constructor() { }

  ngOnInit() {
  }

}