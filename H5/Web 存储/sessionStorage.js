/*  
	sessionStorage api 同 sessionStorage一样，但sessionStorage 关闭浏览器所保存的信息就会丢失，sessionStorage关闭浏览器还存在

    设置sessionStorage
	sessionStorage.setItem(key,value)

	删除单个sessionStorage
	sessionStorage.removeItem(key)

	删除所有sessionStorage
	sessionStorage.clear()

	读取sessionStorage
	sessionStorage.getItem(key)

	得到某个索引的key
	sessionStorage.key(index)

 */
// 读取sessionStorage
function getsessionStorage(key) {
	if(typeof(Storage) !== "undefined") {
		return sessionStorage.getItem(key);
	}else {
		alert('抱歉，您的浏览器不制作sessionStorage')
	}
}

// 设置sessionStorage
function setsessionStorage(key,val) {
	if(typeof(Storage) !== "undefined") {
		sessionStorage.setItem(key,val);
	}else {
		alert('抱歉，您的浏览器不制作sessionStorage')
	}
}

// 删除单个sessionStorage
function removesessionStorage(key) {
	if(typeof(Storage) !== "undefined") {
		sessionStorage.removeItem(key);
	}else {
		alert('抱歉，您的浏览器不制作sessionStorage')
	}
}
// 删除所有sessionStorage
function clearsessionStorage() {
	if(typeof(Storage) !== "undefined") {
		sessionStorage.clear();
	}else {
		alert('抱歉，您的浏览器不制作sessionStorage')
	}
}

// 得到某个索引的key
function keysessionStorage(index) {
	if(typeof(Storage) !== "undefined") {
		return sessionStorage.key(index);
	}else {
		alert('抱歉，您的浏览器不制作sessionStorage')
	}
}