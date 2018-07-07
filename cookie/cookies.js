/*
	cookie 以名/值对 的形式展示			cookie1=value1; cookie2-value2
	设置cookie document.cookie = "username = wj1"		更改cookie，同设置cookie一样，覆盖住就是更改  document.cookie = "username = wj2"
	删除cookie 直接覆盖设置为空值就行	document.cookie = "username = ''"
	封装cookie 常用函数
 */
			
//获取cookie、 首先获取cookie，接着用正则表达式匹配筛选出参数对应的信息
function getCookie(name) {
 	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
 	if (arr = document.cookie.match(reg)){
  		return (arr[2]);
 	}
 	else{
  		return null;
 	}
}
 
//设置cookie,增加到vue实例方便全局调用
function setCookie (c_name, value, expiredays) {
 	var exdate = new Date();
 	exdate.setDate(exdate.getDate() + expiredays);
 	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};
 
//删除cookie
function delCookie (name) {
 	var exp = new Date();
 	exp.setTime(exp.getTime() - 1);
 	var cval = getCookie(name);
 	if (cval != null){
  		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
 	}
};

export default NengLong.Cookies