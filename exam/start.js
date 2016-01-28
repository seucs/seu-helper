var seuHead = document.getElementsByTagName('HEAD').item(0); 
var seuScript= document.createElement("script"); 
seuScript.type ="text/javascript"; 
seuScript.src = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";
seuScript.text= "";
seuHead.appendChild(seuScript);

function mmm(){
	$("#second5",window.frames["packageListFrame"].document).each(function() {
	    $(this).attr({'onclick':'setTimeout(getScore,1500)'});
	});
	$.get(chrome.extension.getURL('exam/ExamResult.js'), function(data){
	var doc = window.frames["packageListFrame"].document;
    var seuHead = doc.getElementsByTagName('HEAD').item(0); 
	var seuScript= doc.createElement("script"); 
	seuScript.type ="text/javascript"; 
	seuScript.text= data;
	seuHead.appendChild(seuScript); 
});
	$.get(chrome.extension.getURL('exam/ExamBtn.js'), function(data){
    var seuHead = document.getElementsByTagName('HEAD').item(0); 
	var seuScript= document.createElement("script"); 
	seuScript.type ="text/javascript"; 
	seuScript.text= data;
	seuHead.appendChild(seuScript); 	
});

}


setTimeout(mmm,1000);