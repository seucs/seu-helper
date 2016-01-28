function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      var dataURL = canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
      var text = encodeURIComponent(dataURL);
      //console.log(text);
      $.ajax({
        url: 'http://121.42.203.161:8000/captcha?img='+text,
        type: 'GET',
        success: function(data){
            try{
              $("input[name=vercode]")[0].value= data;
            }
            catch(e){

            }
          $("input[name=checkCode]")[0].value= data;
        },
      }); 
    }



function main() {
  var img = document.getElementsByTagName('img')[0];
  console.log(img)
  img.width = 210;
  img.height = 100;
  getBase64Image(img);
  img.width = 73;
  img.height = 29;
}

setTimeout(main,100);