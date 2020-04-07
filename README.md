# Fit and Fill
I created a class named ImgDom. Users could create an intance of the class to generate an image and use scaleToFit() and scaleToFill() to re-scale the image.


## Demo

* The 3 images on top of the screen demonstrate different types of object-fit property.
* A simple interactive prototype is at the bottom of the screen.

https://zeke5252.github.io/objectFit/

![](https://i.imgur.com/U6cFBEG.jpg)


## Installation
1. `git clone https://github.com/zeke5252/objectFit.git`
2. open `index.html`

## Usage

To use ImgDom class, 

**1. In main.js, import ImgDom, create an instance and pass an image path as the first parameter**

`    import ImgDom from "./ImgDom.js";`
`    let img1 = new ImgDom("./images/img1.jpg");`

**2. Use appendTo() method and pass an id name as the first parameter to set the position of the image.**

`    img1.appendTo("imgDonContainer1");`


**3. Use scaleToFit() and scaleToFill() to re-scale the image.**

`    img1.scaleToFit();`
`    img1.scaleToFill();`

**4. You could use scaleToReset() to re-scale image to default.**

`    img3.scaleToReset();`
