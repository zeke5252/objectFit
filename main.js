class ImgDom {
  constructor(src) {
    this.img = document.createElement("img");
    this.setSrc(src);
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
  setSrc(src) {
    try {
      if (src) {
        this.img.src = src;
      } else {
        throw "Invalid src";
      }
    } catch (e) {
      console.log(e);
    }
  }
}

(function init() {
  try {
    let img1 = new ImgDom("./images/img1.jpg");
    let img2 = new ImgDom("./images/img2.jpg");
    let img3 = new ImgDom("./images/img3.jpg");
    img1.setPosition("imgDonContainer1");
    img2.scaleToFit();
    img2.setPosition("imgDonContainer2");
    img3.scaleToFill();
    img3.setPosition("imgDonContainer3");
  } catch (e) {
    console.log(e.message);
  }
})();
