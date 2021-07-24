```css
  
/\*--------------------------------------------------------------  
\# Homepage (Carousel/Video)  
\--------------------------------------------------------------\*/  
  
.carousel,  
.carousel-inner {  
    height: 100vh;  
}  
  
.carousel img {  
    position: absolute;  
 top: 0;  
 left: 0;  
 min-width: 100vw;  
 height: 100vh;  
 max-width: none;  
}  
  
.carousel-caption {  
    padding-top: 50vh;  
 top: 50%;  
 transform: translateY(-50%);  
 margin: 10vh;  
}  
  
.carousel-caption h1 {  
    font-size: 3em;  
 color: #fff;  
 font-weight: bold;  
 text-align: center;  
 padding-top: 3vh;  
 padding-bottom: 3vh;  
}  
  
.carousel-caption p {  
    font-size: 1.25em;  
 color: #fff;  
 text-align: center;  
}  
  
.carousel-caption h5 {  
    font-size: 1.5em;  
 color: #fff;  
 text-align: center;  
  
}  
  
@media (max-width: 575.98px) {  
    .carousel-caption h1 {  
        font-size: 2em;  
 color: #fff;  
 font-weight: bold;  
 text-align: center;  
 }  
  
    .carousel-caption p {  
        font-size: 1em;  
 color: #fff;  
 text-align: center;  
 }  
  
    .carousel-caption h5 {  
  
    }  
  
    .carousel-caption h5 {  
        font-size: 0;  
  
 }  
}  
  
.carousel-caption .btn-primary {  
    margin-top: 3vh;  
 font-weight: bold;  
}  
  
.vimeo-wrapper {  
    position: fixed;  
 top: 0;  
 left: 0;  
 width: 100%;  
 height: 100%;  
 z-index: -1;  
 pointer-events: none;  
 overflow: hidden;  
}  
  
.vimeo-wrapper iframe {  
    width: 100vw;  
 height: 56.25vw; /\* Given a 16:9 aspect ratio, 9/16\*100 = 56.25 \*/  
 min-height: 100vh;  
 min-width: 177.77vh; /\* Given a 16:9 aspect ratio, 16/9\*100 = 177.77 \*/  
 position: absolute;  
 top: 50%;  
 left: 50%;  
 transform: translate(-50%, \-50%);  
}

```


```html
<div class\="vimeo-wrapper"\>  
 <iframe src\="https://player.vimeo.com/video/536244344?background=1&autoplay=1&loop=1&byline=0&title=0"  
 frameborder\="0" webkitallowfullscreen mozallowfullscreen allowfullscreen\></iframe>  
</div>  
  
<div id\="carouselExampleCaptions" class\="carousel slide" data-bs-ride\="carousel"\>  
 <ol class\="carousel-indicators"\>  
 <li data-bs-target\="#carouselExampleCaptions" data-bs-slide-to\="0" class\="active"\></li>  
 <li data-bs-target\="#carouselExampleCaptions" data-bs-slide-to\="1"\></li>  
 </ol> <div class\="carousel-inner"\>  
  
 <!-- SLIDE 1 -->  
  
 <div class\="carousel-item active"\>  
 <div class\="carousel-caption"\>  
 <h5>Reports collected today</h5> <!--: {% now "jS F Y H:i" %}</h5> -->  
 <h1><span data-purecounter-start\="0" data-purecounter-end\="{{ reports }}"  
 data-purecounter-duration\="3"  
 class\="purecounter"\>  
 </span></h1> <p>Clearwater is connected to more than 350,000 data points globally collecting over 1,700 reports  
                    every second<br>  
 <a href\="{% url 'enterprise' %}" target\="\_blank"\>  
 <button type\="button" class\="btn btn-lg btn-primary"\>ABOUT US</button>  
 </a> </p> </div> </div>  
 <!-- SLIDE 2 -->  
  
 <div class\="carousel-item"\>  
 <div class\="carousel-caption"\>  
 <h5>Vessel Tracking | Monitoring | Global Intelligence</h5>  
 <h1>Clearwater Actionable Insights</h1>  
 <p class\="caption"\>Clearwater’s actionable maritime insights create financial savings, accelerate  
                    digital transformation and mitigate risk at sea<br>  
 <a href\="{% url 'services' %}" target\="\_blank"\>  
 <button type\="button" class\="btn btn-lg btn-primary"\>OUR SERVICES</button>  
 </a> </p> </div> </div>  
 <!-- END -->  
  
 </div>  
 <a class\="carousel-control-prev" href\="#carouselExampleCaptions" role\="button" data-bs-slide\="prev"\>  
 <span class\="carousel-control-prev-icon" aria-hidden\="true"\></span>  
 <span class\="visually-hidden"\>Previous</span>  
 </a> <a class\="carousel-control-next" href\="#carouselExampleCaptions" role\="button" data-bs-slide\="next"\>  
 <span class\="carousel-control-next-icon" aria-hidden\="true"\></span>  
 <span class\="visually-hidden"\>Next</span>  
 </a></div>
```

#Code/html #Code/django #Code/css