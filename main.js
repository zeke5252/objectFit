
class Img {
    constructor(id) {
      this.dom = document.getElementById(`${id}`);
      this.fitProp = 'none';
      this.dom.style.objectFit = this.fitProp
    }
    scaleToFit() {
      this.fitProp = 'contain';  
      this.dom.style.objectFit = this.fitProp
    }
    scaleToFill() {
      this.fitProp = 'fill';  
      this.dom.style.objectFit = this.fitProp
    }
    scaleToReset() {
        this.fitProp = 'none';  
        this.dom.style.objectFit = this.fitProp
      }
  }

(function init() {
    let img1 = new Img('img1');
    let img2 = new Img('img2');
    let img3 = new Img('img3');
    img2.scaleToFit();
    img3.scaleToFill();
})();

