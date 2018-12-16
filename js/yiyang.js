function zjck() {
	var ckq = document.getElementById('ckq');
	var node = ckq.nextSibling;
	oDiv = document.createElement('div');
	oDiv.innerHTML = '<div class="cjr kq"><div class="bt">第一位乘机人：<b>刘某某</b><span class="right smallFont">添加常用姓名 <b style="color: red;">X</b></span></div><div class="tj"><ul><li><span class="xz">购票类型：</span><select class="input"><option value="" disabled selected hidden>成人票</option></select><span class="smallFont">$2200/成人（含税费）<span class="blueFont smallFont">退改签</span></span></li><li><span class="xz">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input placeholder="刘某某 " class="input"></input><span class="blueFont smallFont">填写说明</span></li><li><span class="xz">护照类型：</span><select class="input"><option value=" " disabled selected hidden>成人票</option></select></li><li><span class="xz">证件号码：</span><input placeholder="120120120120120120" class="input"></input></li></ul></div></div>'
	ckq.parentNode.insertBefore(oDiv, node)
	node = oDiv.nextSibling;
//	alert(ckq.style.height+=180)
//	alert("66666");
}

function test(test) {
	test.parentNode.parentNode.removeChild(test.parentNode);
}


