import ImgDom from "./ImgDom.js";

init();

function init() {
  try {
    let img1 = new ImgDom("./images/img.jpg");
    let img2 = new ImgDom("./images/img.jpg");
    let img3 = new ImgDom("./images/img.jpg");
    let img4 = new ImgDom("./images/img.jpg");
    img1.appendTo("imgDonContainer1");
    img2.scaleToFit();
    img2.appendTo("imgDonContainer2");
    img3.scaleToFill();
    img3.appendTo("imgDonContainer3");
    img4.appendTo("imgDonContainer4");
    document.getElementById('btnFill').addEventListener('click', ()=>{
      img4.scaleToFill()
    })
    document.getElementById('btnFit').addEventListener('click', ()=>{
      img4.scaleToFit()
    })
    document.getElementById('btnNone').addEventListener('click', ()=>{
      img4.scaleToReset()
    })
  } catch (e) {
    console.log(e.message);
  }
}