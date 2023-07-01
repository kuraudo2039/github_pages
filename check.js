
let key = 0;
function loadImage(obj) {
    for (i = 0; i < obj.files.length; i++) {
        var fileReader = new FileReader();
        fileReader.onload = (function (e) {
            var field = document.getElementById("imgPreviewField");
            field.innerHTML='';
            var figure = document.createElement("figure");
            var img = new Image();
            img.src = e.target.result;
            figure.setAttribute("id", "img-" + key);
            figure.classList.add("bingo_base_img")
            figure.style.setProperty("width", "720px");
            figure.style.setProperty("height", "834px");
            figure.appendChild(img);
            field.appendChild(figure);
            key++;
        });
        fileReader.readAsDataURL(obj.files[i]);
    }
}

//ロードされた際の処理として実施：
window.addEventListener('DOMContentLoaded', function(){


  //ボタンを押下した際にダウンロードする画像を作る
  const generateBingoImage = () => {
    html2canvas(document.getElementById("target"),{
      onrendered: function(canvas){
        //aタグのhrefにキャプチャ画像のURLを設定
        var imgData = canvas.toDataURL();
        document.getElementById("ss").href = imgData;
      }
    });
  }
  generateBingoImage();

  this.document.querySelectorAll(".bingo_cell").forEach((element) => {
    let toggle = false;
    element.addEventListener('click', (event) => {
      const target = event.currentTarget;
      
      if(toggle){
        target.classList.remove('check');
      }else{
        target.classList.add('check');
      }
      toggle = !toggle;

      generateBingoImage();
    });
  })
});