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

(function init() {
  let img1 = new Img("img1");
  let img2 = new Img("img2");
  let img3 = new Img("img3");
  img2.scaleToFit();
  img3.scaleToFill();
})();
