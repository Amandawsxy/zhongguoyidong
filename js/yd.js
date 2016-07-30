window.onload=function(){
	//轮播
	var banner=$(".banner")[0];
	var img=$(".lunbo");
	var len=img.length;
	var lis=$(".yuandian");
	var btn=$(".btn",banner)[0];
	var btnL=$(".btnL",banner)[0];
	var btnR=$(".btnR",banner)[0];
	var flag=true;
	var num=0;

	for(var i=0;i<len;i++){
		if(i==0){
			btn.style.opacity=0;
			lis[0].style.background="#D50B83";
			continue;
		}
		img[i].style.opacity=0;
	}
	var t;
	t=setInterval(moveR,2000);

	banner.onmouseover=function(){
		animate(btn,{opacity:1});
		clearInterval(t);
	}
	banner.onmouseout=function(){
		animate(btn,{opacity:0});
		t=setInterval(moveR,2000);
	}

	btnR.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
		
	}
	btnL.onclick=function(){
		if(flag){
			flag=false;
			moveL();
		}
	}


	function moveR(){
		num++;
		if(num==len){
			num=0;
		}
		for(var i=0;i<len;i++){
			animate(img[i],{opacity:0},function(){
				flag=true;
			});
			lis[i].style.background="#C0B7C9";
		}
		animate(img[num],{opacity:1});
		lis[num].style.background="#D50B83";
	}
	function moveL(){
		num--;
		if(num<0){
			num=len-1;
		}
		for(var i=0;i<len;i++){
			animate(img[i],{opacity:0},function(){
				flag=true;
			});
			lis[i].style.background="#C0B7C9";
		}
		animate(img[num],{opacity:1});
		lis[num].style.background="#D50B83";
	}

	for(var i=0;i<len;i++){

		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<len;j++){
				num=this.index;
				animate(img[j],{opacity:0});
				lis[j].style.background="#C0B7C9";
			}
			animate(img[this.index],{opacity:1});
			lis[this.index].style.background="#D50B83";
		}
	}


	//选项卡菜单

	var zuob=$(".zuob2");
	var son=$(".son");
	for(var i=0;i<son.length;i++){
		zuob[i].index=i;
		zuob[i].onmouseover=function(){
			for(var j=0;j<son.length;j++){
				son[j].style.display="none";
			}
			son[this.index].style.display="block";
		}
		zuob[i].onmouseout=function(){
			for(var j=0;j<son.length;j++){
				son[j].style.display="none";
			}
		}
	}


	var dropdown=$(".dropdown")[0];
	var son1=$(".son1")[0];
	dropdown.onmouseover=function(){
		son1.style.display="block";
	}
	dropdown.onmouseout=function(){
		son1.style.display="none";
	}

	var topright1=$(".topright1")[0];
	var son2=$(".son2")[0];
	topright1.onmouseover=function(){
		son2.style.display="block";
	}
	topright1.onmouseout=function(){
		son2.style.display="none";
	}


	var taiyuan = $(".taiyuan")[0];
	var taiyuan2 = $(".taiyuan2")[0];
	taiyuan.onmouseover=function(){
		taiyuan2.style.display="block";
	}
	taiyuan.onmouseout=function(){
		taiyuan2.style.display="none";
	}

	
	

}