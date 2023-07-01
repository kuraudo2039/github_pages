
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

  document.getElementById("generateBingo").addEventListener("click", (event) => {
    let numbers = new Array(75).fill().map((item, index) => index+1);
    let tables = new Array(5);
    for(let i = 0; i < 5; i++){
      tables[i] = new Array(5);
      for(let j = 0; j < 5; j++){
        if(i == 2 && j == 2){/* 真ん中を除外 */
        tables[i][j] = '';
      }
        else{
          tables[i][j] = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        }
      }
    }

    let bingoHtml='';
    let rowHtml='';
    let CellHtml='';
    for(let i = 0; i < tables.length; i++){
      for(let j = 0; j < tables[i].length; j++){
        rowHtml+=`<td class="bingo_cell">${tables[i][j]}</td>`;
      }
      bingoHtml+=`<tr class="bingo_row">${rowHtml}</tr>`
      rowHtml = '';
    }

    document.getElementById("targetBingo").innerHTML=bingoHtml;

    generateBingoImage();
  })
});