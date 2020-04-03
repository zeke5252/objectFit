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

class ImgDom {
  constructor(src) {
    this.img = document.createElement("img");
    this.img.src = src;
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
  let img1 = new Img("img1");
  let img2 = new Img("img2");
  let img3 = new Img("img3");
  img2.scaleToFit();
  img3.scaleToFill();

  let img4 = new ImgDom("./images/img3.jpg");
  img4.scaleToFit();
  img4.setPosition("imgDonContainer");
})();
