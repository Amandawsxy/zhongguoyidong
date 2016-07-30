function getClass(className,range){
	var range=range?range:document;
	if(document.getElementsByClassName){
		return range.getElementsByClassName(className);
	}else{
		var arr=[];
		var all=range.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,className)){
				arr.push(all[i]);
			}
		}
	}
	return arr;
}
function checkClass(obj,classname){
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}





//-------------------------------------------------------------------------------


//获取对象的兼容性问题
function getContent(obj,val){
	if(obj.innerText){
		if(val==undefined){
			return obj.innerText;
		} else{
			obj.innerText=val;
		}
	}else{
		if(val==undefined){
			return obj.textContent;
		} else{
			obj.textContent=val;
		}
	}
}





//---------------------------------------------------------------------------------


//行内样式和外部样式通用的获取方法 兼容性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}





//---------------------------------------------------------------------------------




function $(select){
	if(select.charAt(0)=="."){
		return getClass(select.slice(1));
	}else if(select.charAt(0)=="#"){
		return document.getElementById(select.slice(1));
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(select)){
		return document.getElementsByTagName(select);
	}
}
