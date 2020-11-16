import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import Swiper from "swiper";
import { MovieModel } from "src/app/interfaces/movie.model";

@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html",
  styleUrls: ["./slideshow.component.scss"],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: MovieModel[];
  private mySwiper:Swiper;
  constructor() {}

  ngOnInit(): void {
    //console.log(this.movies);
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterViewInit' to the class.
    this.mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      //direction: 'vertical',
      loop: true,

      /*  // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      }, */
    });
  }
  nextSwiper() {
    this.mySwiper.slideNext();
  }
  prevSwiper() {
    this.mySwiper.slidePrev();
  }
}
