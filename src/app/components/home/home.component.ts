import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nonWhitespaceRegExp } from 'src/app/util/validations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    imageObject: Array<object> = [
        {
            image: '../../../assets/asianpaints.png',
            thumbImage: '../../../assets/asianpaints.png',
            alt: 'alt of image',
            title: 'title of image',
        },
        {
            image: '../../../assets/chemical.jpeg', // Support base64 image
            thumbImage: '../../../assets/chemical.jpeg', // Support base64 image
            title: 'Image title', //Optional: You can use this key if want to show image with title
            alt: 'Image alt', //Optional: You can use this key if want to show image with alt
            order: 1, //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
        },
        {
            image: '../../../assets/ghadi.png',
            thumbImage: '../../../assets/ghadi.png',
            alt: 'alt of image',
            title: 'title of image',
        },
        {
            image: '../../../assets/asianpaints.png',
            thumbImage: '../../../assets/asianpaints.png',
            alt: 'alt of image',
            title: 'title of image',
        },
    ];

    queryForm: FormGroup = new FormGroup({});

    screenWidth: number = 0;
    imgHeightWidth: any = {
        width: '25%',
        height: 250,
    };

    constructor() {}

    ngOnInit(): void {
        this.initWinWidth();
        this.createQueryForm();
    }

    initWinWidth() {
        this.screenWidth = window.innerWidth;
        this.imgHeightWidth = {
            width: '25%',
            height: 250,
        };
        if (this.screenWidth <= 700 && this.screenWidth >= 450) {
            this.imgHeightWidth = {
                width: '50%',
                height: 250,
            };
        } else if (this.screenWidth <= 450 && this.screenWidth >= 100) {
            this.imgHeightWidth = {
                width: '100%',
                height: 150,
            };
        } else {
            this.imgHeightWidth = {
                width: '25%',
                height: 250,
            };
        }
    }

    createQueryForm(): any {
        this.queryForm = new FormGroup({
            name: new FormControl(null, [
                Validators.required,
                Validators.pattern(nonWhitespaceRegExp),
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            contact: new FormControl(null, [
                Validators.required,
                Validators.pattern(nonWhitespaceRegExp),
            ]),
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 700 && this.screenWidth >= 450) {
            this.imgHeightWidth = {
                width: '50%',
                height: 250,
            };
        } else if (this.screenWidth <= 450 && this.screenWidth >= 100) {
            this.imgHeightWidth = {
                width: '100%',
                height: 150,
            };
        } else {
            this.imgHeightWidth = {
                width: '25%',
                height: 250,
            };
        }

        // console.log('82', this.screenWidth, this.screenHeight);
    }

    // images = [
    //     { img: '../../../assets/ghadi.png', id: '1' },
    //     { img: '../../../assets/asianpaints.png', id: '2' },
    //     { img: '../../../assets/chemical.png', id: '3' },
    // ];
    // slideIndex: number = 0;
    // slides: any;
    // dots: any;

    // showSlides() {
    //     let i;
    //     this.slides = document.getElementsByClassName('mySlides');
    //     this.dots = document.getElementsByClassName('dot');
    //     this.slides = this.slides as HTMLElement;
    //     this.dots = this.dots as HTMLElement;
    //     console.log('58', this.dots);
    //     console.log('59', this.slides[0].style.display);
    //     for (i = 0; i < this.slides.length; i++) {
    //         const slide = this.slides[i] as HTMLElement;
    //         this.slides[i].style.display = 'none';
    //         // slide.style.display = 'none';
    //     }
    //     this.slideIndex++;
    //     if (this.slideIndex > this.slides.length) {
    //         this.slideIndex = 1;
    //     }
    //     for (i = 0; i < this.dots.length; i++) {
    //         this.dots[i].className = this.dots[i].className.replace(
    //             ' active',
    //             ''
    //         );
    //     }
    //     this.slides[this.slideIndex - 1].style.display = 'block';
    //     this.dots[this.slideIndex - 1].className += ' active';
    //     // setInterval(this.showSlides, 2000);
    //     setTimeout(this.showSlides, 2000); // Change image every 2 seconds
    // }
}
