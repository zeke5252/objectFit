# Fit and Fill

## Demo
https://zeke5252.github.io/objectFit/

![](https://i.imgur.com/JM2RhB7.jpg)



I created a class named ImgDom. 

To use ImgDom,

**1. create an instance, pass an image path as the first parameter**

`    let img1 = new ImgDom("./images/img1.jpg");`


**2. Use setPosition method, and pass an id name as the first parameter to set the position of the image.**

`    img1.setPosition("imgDonContainer1");`


**3. Use scaleToFit() and scaleToFill() to re-scale the image.**

`    img1.scaleToFit();`
`    img1.scaleToFill();`

**4. If necessary, use scaleToReset() to re-scale image to default.**

`    img3.scaleToReset();`


***Note.** In approach2.html, I created another solution. In this solution, the class will be implemented by using getElementById() to access the dom tree*

