function changeBtn(btn){
	if($(btn).attr('sel') == "true"){
		btn.style.color = "red";
		$(btn).attr({'sel':'false','value':'已忽略'});
	}else{
		btn.style.color = "black";
		$(btn).attr({'sel':'true','value':'已选择'});
	}
	window.frames["packageListFrame"].getScore();
}