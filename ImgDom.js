export default  class ImgDom {
    constructor(src) {
      this.img = document.createElement("img");
      this.setSrc(src);
      this.setObjFit("none");
      this.img.setAttribute("class", "img");
    }
    scaleToFit() {
      this.setObjFit("contain");
    }
    scaleToFill() {
      this.setObjFit("fill");
    }
    scaleToReset() {
      this.setObjFit("none");
    }
    setObjFit(method) {
      this.img.style.objectFit = method;
    }
    appendTo(id) {
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
        console.log(e.message);
      }
    }
  }