import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { CastModel } from "src/app/interfaces/credits.model";
import Swiper from "swiper";

@Component({
  selector: "app-cast-slideshow",
  templateUrl: "./cast-slideshow.component.html",
  styleUrls: ["./cast-slideshow.component.scss"],
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() cast: CastModel[];
  private mySwiper: Swiper;
  constructor() {}

  ngOnInit(): void {
    console.log("cast");
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterViewInit' to the class.
    this.mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      //direction: 'vertical',
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
      loop: true,
    });
  }
  nextSwiper() {
    this.mySwiper.slideNext();
  }
  prevSwiper() {
    this.mySwiper.slidePrev();
  }
}
