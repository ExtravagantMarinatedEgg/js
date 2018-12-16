function zjck() {
	var ckq = document.getElementById('ckq');
	var node = ckq.nextSibling;
	oDiv = document.createElement('div');
	oDiv.innerHTML = '<div class="cjr kq"><div class="bt"><span class="kt">第一位乘机人：<b>刘某某</b><span class="right smallFont">添加常用姓名 <b class="pointer" onclick="deleteCJR(this)" style="color: red;">X</b></span></span></div><div class="tj"><ul><li><span class="xz">购票类型：</span><select class="input"><option value="" disabled selected hidden>成人票</option></select><span class="smallFont">$2200/成人（含税费）<span class="blueFont smallFont pointer">退改签</span></span></li><li><span class="xz">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input placeholder="刘某某 " class="input"></input><span class="blueFont smallFont pointer">填写说明</span></li><li><span class="xz">护照类型：</span><select class="input"><option value=" " disabled selected hidden>护照</option></select></li><li><span class="xz">证件号码：</span><input placeholder="120120120120120120" class="input" onblur="checkUserName(this)"></input><span class="smallFont redFont"></span></li></ul></div></div>'
	ckq.parentNode.insertBefore(oDiv, node)
	node = oDiv.nextSibling;
	//	alert(ckq.style.height+=180)
	//	alert("66666");
}

function checkUserName(username) {
	if(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(username.value)) {
		username.nextSibling.innerText="";
	} else {
		username.nextSibling.innerText="请填写正确的身份证号码";
	}

}

function checkPhone(phone) {
	if(/^1[3|4|5|8][0-9]\d{8}$/.test(phone.value)) {
		phone.nextSibling.innerText="";
	} else {
		phone.nextSibling.innerText="请输入正确的手机号";
	}
}

function eMail(mail) {
	if(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(mail.value)) {
		mail.nextSibling.innerText="";
	} else {
		mail.nextSibling.innerText="请输入正确的邮箱";
	}
}

function deleteCJR(cjr) {
	cjr.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(cjr.parentNode.parentNode.parentNode.parentNode);
}