// <td align="center" width="10%">序号</td>
// <td align="center" width="10%">学年学期</td>
// <td align="center" width="10%">课程代码</td>
// <td align="center" width="20%">课程名称</td>
// <td align="center" width="10%">学分</td>
// <td align="center" width="10%">成绩</td>
// <td align="center" width="10%">成绩性质</td>
var startBtn = 1;

function getScore(){
	var doc = $("#table2",parent.frames["packageFrame"].document)[0];
	var len = doc.getElementsByTagName("tr").length;
	var m_tr = doc.getElementsByTagName("tr");
	//var resArr = new Array();
	var res = 0;
	var sum_w = 0;
	var sum_s = 0;
	var sum_ws = 0;
	for( var i=1; i<len;i++){
		if(startBtn==1){
			m_tr[i].getElementsByTagName("td")[0].innerHTML = 
		'<input type="button" sel="true" value="已选择" onclick="parent.changeBtn(this)"/>';
		}
		if($(":input",m_tr[i].getElementsByTagName("td")[0]).attr('sel')=="false"){
			continue;
		}
		var w = parseFloat(m_tr[i].getElementsByTagName("td")[4].innerText);
		var s = m_tr[i].getElementsByTagName("td")[5].innerText.trim();
		if(s == "通过" || s == "缺考"){
			continue;
		}
		if(s == "优"){
			s = 95;
		}else if(s == "良"){
			s = 85;
		}else if(s == "中"){
			s = 75;
		}else if(s == "及格"){
			s = 65;
		}else if(s == "不及格"){
			s = 0;
		}else{
			s = parseInt(s);
		}
		sum_s += s;
		var ws = s;
		//console.log(s);
		if(s>=85){
			s = 4;
		}else if(s>=75){
			s = 3;
		}else if(s>=65){
			s = 2;
		}else if(s>=60){
			s = 1;
		}else{
			s = 0;
		}

		res += w*s;
		sum_w += w;
		sum_ws += w*ws;
	}
	startBtn = 0;
	var str = "&nbsp;&nbsp;&nbsp;&nbsp;平均绩点:"+res/sum_w+"<br>";
	str += "&nbsp;&nbsp;&nbsp;&nbsp;加权平均分:"+sum_ws/sum_w+"<br>";
	str += "&nbsp;&nbsp;&nbsp;&nbsp;算数平均分:"+sum_s/(len-1)+"<br>";
	$("p",parent.frames["packageFrame"].document)[0].innerHTML = str;
}
