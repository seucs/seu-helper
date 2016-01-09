alert("SEU 选课助手已打开");
console.log("本插件仅供学习交流使用，如发现恶意使用,请及时联系制作者");
console.log("博客地址：http://my404.club:3000/");
//本院系抢课
// var seuHead = document.getElementsByTagName('HEAD').item(0); 
// var seuScript= document.createElement("script"); 
// seuScript.type ="text/javascript"; 
// seuScript.src="http://my404.club:3000/api/seuxk"; 
// seuHead.appendChild(seuScript); 
$.ajax({
	url: 'http://my404.club:3000/api/seuxk',
	type: 'get',
	data: {param1: 'value1'},
	success: function(data){
		var seuHead = document.getElementsByTagName('HEAD').item(0); 
		var seuScript= document.createElement("script"); 
		seuScript.type ="text/javascript"; 
		seuScript.text = data.toString(); 
		seuHead.appendChild(seuScript); 
	},
})
.fail(function() {
	console.log("error");
})
function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      var dataURL = canvas.toDataURL("image/png");
      //return canvas.toDataURL;

       return dataURL.replace("data:image/png;base64,", "");
    }
function refreshCheckCode(checkCodeImg) {
            $.ajax({
            	url: 'http://xk.urp.seu.edu.cn/jw_css/getCheckCode',
            	type: 'GET',
            	success: function(data){
            		console.log(encodeURIComponent(data));

            	},
            }); 
        }










