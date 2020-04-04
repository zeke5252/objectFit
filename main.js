// Approach 1 - Control doms which are generated in html

class Img {
  constructor(id) {
    this.dom = document.getElementById(`${id}`);
    this.setFit("none");
  }
  scaleToFit() {
    this.setFit("contain");
  }
  scaleToFill() {
    this.setFit("fill");
  }
  scaleToReset() {
    this.setFit("none");
  }
  setFit(str) {
    this.dom.style.objectFit = str;
  }
}

// Approach 2 - Generate doms directly in JavaScript

class ImgDom {
  constructor(src) {
    this.img = document.createElement("img");
    this.img.src = src;
    this.setFit("none");
    this.img.setAttribute("class", "img");
  }
  scaleToFit() {
    this.setFit("contain");
  }
  scaleToFill() {
    this.setFit("fill");
  }
  scaleToReset() {
    this.setFit("none");
  }
  setFit(method) {
    this.img.style.objectFit = method;
  }
  setPosition(id) {
    document.getElementById(id).appendChild(this.img);
  }
}

(function init() {
  // Approach 1
  let img1 = new Img("img1");
  let img2 = new Img("img2");
  let img3 = new Img("img3");
  img2.scaleToFit();
  img3.scaleToFill();

  // Approach 2
  let img4 = new ImgDom("./images/img1.jpg");
  let img5 = new ImgDom("./images/img2.jpg");
  let img6 = new ImgDom("./images/img3.jpg");
  img4.setPosition("imgDonContainer1");
  img5.scaleToFit();
  img5.setPosition("imgDonContainer2");
  img6.scaleToFill();
  img6.setPosition("imgDonContainer3");
})();
