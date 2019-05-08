var ASSET=['/iron/img/1.jpg',
    '/iron/img/4.png',
    '/iron/img/3.png',
    '/iron/img/1.png',
    '/iron/img/2.jpg',
    '/iron/img/black.png',
    '/iron/img/btn1.png',
    '/iron/img/box_.png',
    '/iron/img/btn2.png',
    '/iron/img/box.png',
    '/iron/img/fly_f1.png',
    '/iron/img/diwen_f1.png',
    '/iron/img/burnout.png',
    '/iron/img/fly_f4.png',
    '/iron/img/fly_f3.png',
    '/iron/img/fly_btn.png',
    '/iron/img/fly_f2.png',
    '/iron/img/fly_f5.png',
    '/iron/img/iron1.png',
    '/iron/img/home.jpg',
    '/iron/img/kuzi_tankuang.png',
    '/iron/img/jk_low.png',
    '/iron/img/loading.gif',
    '/iron/img/kujiao.png',
    '/iron/img/iron2.png',
    '/iron/img/page2_3.jpg',
    '/iron/img/page3_f2.png',
    '/iron/img/page3_f1.png',
    '/iron/img/page3_f3.png',
    '/iron/img/pants.jpg',
    '/iron/img/logo.png',
    '/iron/img/pants.png',
    '/iron/img/pants_box.png',
    '/iron/img/pants_burnout.png',
    '/iron/img/pants_di.png',
    '/iron/img/pants_f3.png',
    '/iron/img/pants_f1.png',
    '/iron/img/pants_f2.png',
    '/iron/img/pants_f4.png',
    '/iron/img/pants_good.png',
    '/iron/img/result1.png',
    '/iron/img/result2.png',
    '/iron/img/result3.png',
    '/iron/img/result4.png',
    '/iron/img/result5.png',
    '/iron/img/result6.png',
    '/iron/img/result_bg.jpg',
    '/iron/img/shangyi_tankuang.png',
    '/iron/img/result_end.jpg',
    '/iron/img/time.png',
    '/iron/img/yuntang.gif']

    var p=0
for(var i=0;i<ASSET.length;i++){
    var img=new Image()
    img.src=ASSET[i]
    img.onload=function(){
        p++
        $('.progress_num').html(parseInt(p/ASSET.length*100)+'%')
        if(p===ASSET.length){
            $('.progress_num').html('100%')
            $('.progress').hide()
        }
    }
}

	$(".home-btn1").on("touchend",function(){
		$(".hight_wen").show()
		$(".page1").hide();
		$(".iron1").attr("src","./img/iron1.png?v2")
		pt = true
		canvas_can=true

	})
	var kuzi_time = 31;
	var timer=60
	var canvas_can=false
	var tu=1
	$(".home-btn2").on("touchend",function(e){
		$(".hight_wen").show()
			
		$(".page1").hide();
		$(".iron1").attr("src","./img/iron2.png?v2")
		$(".bg").hide();
		$(".iron1").show();
		// $(".page3_tu1").eraser({
	 //         size: 150,
	 //          completeRatio: .85,
	 //    		completeFunction: function(){
	 //    			kuzi_time=timer
	 //    			tiaozhuan=true

	 //    		}
  //  		 })
  		canvas_can=true
  		 darw("3.png",1050,1401,e)
  		 tu=5
  		 // koufen[7]="没完成"
  		 koufen[12]="飞利浦"
		flp = true
		// move_pointer();
		setTimeOut();
	})

	var kujiao_kaiguan=false;
	var fly_ku_tanguang=false;
	var fly_kujiao_kaiguan = false;
	var timer_kuzi=null
	// var shangyi_diwen_wancheng=false
	var kuzi_diwen_wancheng=false
		var StartX,StartY,MoveX,MoveY
		// document.addEventListener('touchstart', function(e) {
		//     StartX=e.touches[0].clientX
		//     StartY=e.touches[0].clientY     
		// }, false);
	// $(".page3_tu1").eraser("enable")
		var complete_tu
		var iron3=false;
		document.addEventListener('touchmove', function(e) {
		    e.preventDefault();
		    MoveX=e.touches[0].pageX
		    MoveY=e.touches[0].pageY
		    
		   	if(iron3){
		   		$(".iron1").css({
		    	left:MoveX-340,
		    	top:MoveY-450
		    	})
		   	}else{
		   		$(".iron1").css({
		    	left:MoveX-240,
		    	top:MoveY-130
		    	})
		   	}
		    if(kujiao_kaiguan){
		    	
		    	kuzi_burnout()

		    }
		    if(fly_ku_tanguang){
		    	timerhide(".fly_f3")
		    	fly_ku_tanguang=false
		    }
		    if(fly_kujiao_kaiguan){
		    	kuizi_fly()
		    }

		    if(canvas_can){
		    	 draw_(e)
		    }
		   
		    if(canvas_you){
				complete_tu=getImageData(ctx, 0, 0, canvas.width, canvas.height)
				// console.log("完成度"+complete_tu)
				if(complete_tu==100){
					complete_tu=0
				}
				 if(complete_tu>97){

			    	if(tu==2){
			    		ctx.clearRect(0,0,canvas.width,canvas.height);
						koufen[1]=undefined
						kuzi_time=timer
						tiaozhuan=true
						tu=false;
						complete_tu=0
						canvas_can=false
						canvas_you=false
						console.log(kuzi_time)
						return;


			    	}
			    	if(tu==3){
		    			ctx.clearRect(0,0,canvas.width,canvas.height);
		    			timer_kuzi=2
						koufen[4]=undefined;
						console.log(koufen)
						tu=false;
						complete_tu=0
						canvas_can=false
						canvas_you=false
						return;
			    		
			    		
			    	}
			    	if(tu==4){
			    		koufen[3]=undefined
			    		ctx.clearRect(0,0,canvas.width,canvas.height);
			    		kuzi_time=timer
			    		tiaozhuan=true
			    		tu=false;
			    		canvas_can=false
						canvas_you=false
						complete_tu=0
						// shangyi_diwen_wancheng=true
						// $(".shangyi_tankuang").show()
						// $(".shangyi_tankuang_btn").show()
						// $(".iron1").hide();
						console.log("上衣中低温完成")
						return;

			    	}
			    	if(tu==5){
			    		ctx.clearRect(0,0,canvas.width,canvas.height);
			    		koufen[7]=undefined
			    		kuzi_time=timer
	 					tiaozhuan=true
	 					tu=false;
	 					complete_tu=0
						canvas_can=false
						canvas_you=false
						return;
						console.log("好的1")
			    	}
			    	if(tu==6){
			    		ctx.clearRect(0,0,canvas.width,canvas.height);
			    		timer_kuzi=2
						console.log(timer_kuzi)
						koufen[8]=undefined
						tu=false;
						complete_tu=0
						canvas_can=false
						canvas_you=false
						return;
			    	}
			    	if(tu==7){
			    			console.log(complete_tu)
			    			if(complete_tu>99.5){
			    				jietu(1)
			    				ctx.clearRect(0,0,canvas.width,canvas.height);
			    				koufen[6]=undefined
				    			timer_kuzi=2
					    		kujiao_wancheng=true;
					    		tu=false;
					    		$(".kuzi_tankuang").show()
								$(".kuzi_tankuang_btn").show()
								$(".result").hide();
								kuzi_diwen_wancheng=true
								complete_tu=0
								canvas_you=false
								canvas_can=false
								$(".iron1").hide();
					    		return;
			    			}
			    			

			    		
			    	}
			    	// canvas_can=true;
			    	// canvas_you=false
	
			    }
			}
		    

		    
		}, {passive:false});

		
		var globalID; 
		
		function animate() {

			
		  globalID=requestAnimationFrame(animate); 
	
		} 
		globalID=requestAnimationFrame(animate);

	//650 1310 1202 140
	var iron1 = document.getElementById('iron1')
	var pt_sy_gao = false
	var pt_sy_di = false
	var pt_kuzi_di=false
	var pt_kuzi_gao=false
	var pt = false
	var flp = false
	var fly_kuzi = false
	var koufen = []
	var tiaozhuan = false
	var wendu1=null;
	var wendu2=null;
	$(".page2-btn1").on("touchend",function(e){
		$(".bg").hide();
		$(".iron1").show();
		// $(".page3_tu1").eraser({
	 //         size: 150,
	 //         completeRatio: .8,
  //   		completeFunction: function(){
  //   			koufen.splice(1,1)
  //   			// timer=32
  //   			kuzi_time=timer
  //   			console.log(koufen)
  //   			tiaozhuan=true

  //   		}
  //  		 })
  		darw("3.png",1050,1401,e)
  		 tu=2
		pt_sy_gao=true
		// move_pointer();
		setTimeOut();
		koufen[0]="上衣糊了"
		koufen[1]="没完成"
		wendu1=3

	})
	$(".page2_btn2").on("click",function(){
		wendu1=2
	})
	$(".page2_btn3").on("click",function(){
		wendu1=1
	})
	$(".page2-btn3,.page2-btn2").on("touchend",function(e){
		$(".bg").hide();
		$(".iron1").show();
		$(".page3_tu2").attr("src","./img/4.png?v2")
		// $(".page3_tu1").eraser({
	 //         size: 150
	 //     //     completeRatio: .8,
  //   		// completeFunction: function(){
  //   		// 	timer=32
  //   		// 	tiaozhuan=true
  //   		// }
  //  		 })
  		timerhide(".page3_f3")
		pt_sy_di=true
		darw("3.png",1050,1401,e)
		tu=4
		koufen[3]="没完成"
		setTimeOut();
	})
	
	$(".page2-btn4").on("touchend",function(){
		canvas_can=true
		$(".bg").hide();
		$(".iron1").show();
		$(".pants_f1").hide();
		$(".page3_f2").hide();
		setTimeOut()
		$(".pants").remove()
		$("#jacket_box").append('<img src="" alt="" class="pants_good">');
		$(".pants_good").attr("src","./img/pants_good.png?v2")

 		tu=3
		canvas_you=true;
		kujiao_kaiguan = true		
		
		pt_kuzi_gao=true
		
		koufen[4]="没完成"
		wendu2=3
		if(wendu2>wendu1){
			timerhide(".wendu")
		}
	})
	$(".page2_btn5").on("click",function(){
		wendu2=2
		if(wendu2>wendu1){
			timerhide(".wendu")
		}
	})
	$(".page2_btn6").on("click",function(){
		wendu2=1
	})
	$(".page2-btn5,.page2-btn6").on("touchend",function(){
		tu=7
		canvas_can=true
		canvas_you=true;
		setTimeOut()
		pt_kuzi_di=true
		$(".bg").hide();
		$(".iron1").show();
		// $(".pants_di").show()
		$("#jacket_box").append('<img src="" alt="" class="pants_good">');
		$(".pants_good").attr("src","./img/pants_di.png?v3")
		// $("#jacket_box").append('<img src="" alt="" class="pants">');
		// $(".pants").attr("src","./img/pants.png?v2")		
		// $(".pants").eraser({
  //    		size: 150,
  //    		completeRatio: .9,
  //    		completeFunction: function(){
	 //    			timer_kuzi=2
	 //    			koufen.pop()
	 //    			console.log(koufen)
  //   		}
  //  		 })
  //  	
  		setTimeout(function(){
  			timerhide(".diwen_f1")
  		},3000)
		koufen[6]="没完成"
		
	})
	function burnout_location(Time){
		if(timer==Time){
			var iron1_clientTop =iron1.getBoundingClientRect().top
			var iron1_clientLeft =iron1.getBoundingClientRect().left
			if(iron1_clientTop<726  ){
				iron1_clientTop=726 
			}
			if(iron1_clientTop>1493 ){
				iron1_clientTop=1493 
			}

			if(iron1_clientLeft<373){
				iron1_clientLeft=373
			}
			if(iron1_clientLeft>760){
				iron1_clientLeft=760
			}
 // top: 127px;
 //    left: 533px;
			$(".burnout").css({
			   "top":iron1_clientTop-550,
			    "left":iron1_clientLeft-300
			 }).fadeIn(2000)

	    }
	}
	var n = 0
	var kujiao_wancheng=false
	
	function kuzi_burnout(){
		var iron1_clientTop =iron1.getBoundingClientRect().top
		var iron1_clientLeft =iron1.getBoundingClientRect().left
		console.log(iron1_clientTop,iron1_clientLeft)
		if((iron1_clientLeft>773)&&(iron1_clientLeft<913)&&(iron1_clientTop>1716)&&(iron1_clientTop<1903)){
			n++
			
			console.log(n)
			if(n==2){
				timerhide(".pants_f3")
			}
			if(n==12){
				koufen[5]="裤子糊了"
				timerhide(".pants_f4")
				$(".pants_f3").fadeOut()
				$(".pants_burnout").fadeIn(2000);
				
				
			}

			$(".kujiao").css({
				"opacity":1-(n/20)
			})
			if(n>20){
				kujiao_wancheng=true;
				kujiao_kaiguan=false
				
			}


		}
	}
	var y = 0;
	var fly_kujiao=false;
	var iron3_x=0;
	var iron3_y=0;
	function kuizi_fly(){
		var iron1_clientTop =iron1.getBoundingClientRect().top
		var iron1_clientLeft =iron1.getBoundingClientRect().left
		if((iron1_clientLeft>(773-iron3_x) )&&(iron1_clientLeft<(913-iron3_x))&&(iron1_clientTop>(1716-iron3_y))&&(iron1_clientTop<(1903-iron3_y))){
			y++
			if(y==2){
				$(".fly_f4").fadeIn(1000)
				setTimeout(function(){
					$(".fly_f4").fadeOut(1000)
				},1000)
			}
			if(y==15){
				$(".fly_bg,.fly_btn,.fly_btn_btn,.yuntang").show();
				$(".iron1").attr("src","./img/iron3.png")
				$(".iron1").hide()
				$(".fly_f4").hide()
				iron3=true
				iron3_x=100;
				iron3_y=310;
				// $(".pants").eraser("disable")
				clearInterval(timeraa)
			}

			
			if(fly_kujiao){
				$(".kujiao").css({
					"opacity":1-(y/15)
				})
			}
			if(y==20){
				fly_kujiao_kaiguan=false;
				kujiao_wancheng=true;
				console.log(kujiao_wancheng)
			}


		}
	}
	
	var timeraa=null;
	$(".fly_btn_btn").on("touchend",function(){
		$(".fly_bg,.fly_btn,.fly_btn_btn,.yuntang").hide();

		$(".iron1").show()
		// $(".pants").eraser("enable")
		setTimeOut()
		fly_kujiao=true
		y=16
	})
	$(".shangyi_tankuang_btn").on("click",function(){
		$(".shangyi_tankuang").hide();
		$(this).hide()
	})
	$(".kuzi_tankuang_btn").on("click",function(){
		$(".kuzi_tankuang").hide();
		$(".hight_wen").hide();
		$(".kuzi_tankuang_btn").hide()
		$(".result").show();
		setTimeOut()
		// $(".hight_wen").hide();
		console.log("xianshi1")
	})
	function setTimeOut(){	
		timeraa=setInterval(function(e){
			timer--
		    if(pt_sy_gao){
		    	burnout_location(57)
		    }
		    if(timer<10){
		    	$(".time span").html("00:0"+timer)
		    }else{
		    	$(".time span").html("00:"+timer)
		    }
	    	if(timer ==58){
	    		
	    		// if(pt_sy_di){
	    		// 	timerhide(".page3_f3")
	    		// }
	    		if(pt_sy_gao){
	    			timerhide(".page3_f1")
	    		}
	    		if(flp){
	    			console.log("123")
	    			timerhide(".fly_f1")
	    		}
	    	}

		    // if(pt_kuzi_di){
		    // 	if(timer==kuzi_time){
		    // 		timerhide(".diwen_f1")
		    // 	}
		    // }
		    

		    if(timer == kuzi_time-1){
				jietu(0)
				canvas_you=false
				canvas_can=false
				if(!tiaozhuan){
				// clearInterval(timeraa)
					if(pt_sy_di){
						$(".page3_f3").hide();
						$(".page3_f2").show();
					}else if(pt_sy_gao){
						$(".page3_f2").show();
					}else{
						// $(".fly_f1").hide();
						$(".fly_f2").show();

					}
				}
		    }
			
			if(timer==(kuzi_time-2)){

				canvas_can=false;
				canvas_you=false

				if(pt){
						$(".bg").show();
						$(".page3_f2").hide();
						$(".pants_box").show()
						$(".pants_f1").hide()
						$(".gao_box").hide();
						
						
						$(".burnout").hide();
						$(".iron1").hide();
						$(".page3_tu2").remove()
						$(".pants").show()
					clearInterval(timeraa)

					darw("pants.png",801,1529,e)
					$("canvas").css({
						    "left": "119px",
    						"zIndex": "2",

					})
				}else{
					$(".kujiao").show();
					$(".page3_tu2").remove()
					$(".pants").show()
					$("#jacket_box").append('<img src="" alt="" class="pants_good">');
					$(".pants_good").attr("src","./img/pants_good.png?v2")
					
					$("#jacket_box").append('<canvas id="canvas"></canvas>');

			  		darw("pants.png",801,1529,e)
					$(".fly_f2").hide()
					$("canvas").css({
						    "left": "119px",
    						"zIndex": "2",

					})
					// koufen[8]="没完成"
					
						canvas_can=true
						canvas_you=true
						tu=6
				
					
					fly_kuzi = true
				}
			}

			if(timer==(kuzi_time-3)){
				if(!pt){
					fly_ku_tanguang=true

				}
			}

			if(pt_kuzi_gao){
				$(".kujiao").show()
				
			}
			if(fly_kuzi){
				fly_kujiao_kaiguan=true
				
			}
			var timer_kuzi_set=null
			if((timer==1)||((kujiao_wancheng)&&(timer_kuzi==2))){
				jietu(1)
				timer_kuzi_set=setInterval(function(){
					timer_kuzi=1
				},1000);
				if(kuzi_diwen_wancheng){
					clearInterval(timeraa)
				
				}

			}
			if((timer ==0)||((timer_kuzi==1)&&(kujiao_wancheng))){
				// end_timer()
				clearInterval(timeraa)
				clearInterval(timer_kuzi_set)
				if(!kuzi_diwen_wancheng){
					$(".result").show();
					$(".hight_wen").hide();

				}
				$(".logo,.black").hide();
				// console.log(koufen)
				$(".result_sy").attr("src",ydImage_arr[0])
				$(".result_kuzi").attr("src",ydImage_arr[1])
				$(".result_kuzi2").attr("src",ydImage_arr[2])
				// console.log(ydImage_arr)
				if(koufen.indexOf("飞利浦")!=-1){
					console.log("100分")
					$(".result_image").attr("src","./img/result6.png?v3")
					$(".score").html("100")

					$(".result_sy").attr("src","./img/4.png?v2")
					$(".result_kuzi,.result_kuzi2").css({
					    "position": "absolute",
					    "top": "759px",
					    "left": "925px",
					    "width": "440px"
					}).attr("src","./img/pants_good.png?v2")
				}else if(koufen.indexOf("没完成")==-1){
					if(koufen.indexOf("上衣糊了")==-1){
						if(koufen.indexOf("裤子糊了")==-1){
						
							console.log("上衣烫平没糊，裤子没烫平")
							$(".result_image").attr("src","./img/result2.png?v3")
							$(".result_kuzi2").attr("src","./img/pants_di.png?v2").css({
								"top": "755px",
							    "left": "968px",
							    "width": "454px"
							})
							$(".score").html("75")
						}else{
							console.log("上衣烫平没糊，裤子烫平糊了")
							$(".result_image").attr("src","./img/result3.png?v3")
							$(".score").html("75")
						}
					}else{
						if(koufen.indexOf("裤子糊了")==-1){
							console.log("上衣烫平糊了，裤子没烫平")
							$(".result_image").attr("src","./img/result4.png?v3")
							$(".result_kuzi2").attr("src","./img/pants_di.png?v2").css({
								"top": "755px",
							    "left": "968px",
							    "width": "454px"
							})
							$(".score").html("50")
						}else{
							console.log("上衣烫平糊了，裤子烫平糊了")
							$(".result_image").attr("src","./img/result5.png?v3")
							$(".score").html("50")
						}
					}
				}else{
					// if(koufen.indexOf("上衣糊了")==-1){
					// 	if(koufen.indexOf("裤子糊了")==-1){
					// 		console.log("上衣没糊，裤子没糊，没完成")
					// 		$(".result_image").attr("src","./img/result3.png?v2")
					// 		$(".score").html("60")
					// 	}else{
					// 		console.log("上衣没糊，裤子糊了，没完成")
					// 		$(".result_image").attr("src","./img/result6.png?v2")
					// 		$(".score").html("30")
					// 	}
					// }else{
					// 	if(koufen.indexOf("裤子糊了")==-1){
					// 		console.log("上衣糊了，裤子没糊，没完成")
					// 		$(".result_image").attr("src","./img/result5.png?v2")
					// 		$(".score").html("30")
					// 	}else{
					// 		console.log("上衣糊了，裤子糊了，没完成")
					// 		$(".result_image").attr("src","./img/result1.png?v2")
					// 		$(".score").html("0")
					// 	}
					// }
					$(".result_image").attr("src","./img/result1.png?v2")
					$(".score").html("0")
				}
				console.log(ydImage_arr)	
			}

		},1000)
	}
					
var ydImage_arr=[]
function jietu(num){
	canvas_can=false
	html2canvas(document.getElementById('jacket_box'), {
		onrendered: function(canvas) {
			$('body').append(canvas)
			getC(canvas)
			console.log(canvas)
		},
	});

	function getC(canvas) {
		var ydImage =  canvas.toDataURL("")
		ydImage_arr[num]=ydImage
	}

}

// var nn=0;
// var timeraaa=null;
// function end_timer(){
// 	timeraaa = setInterval(function(){
// 		nn++
// 		if (nn==3) {
// 			$(".result_image").hide();
// 			$(".result_end").show();
// 			clearInterval(timeraaa)
// 		}
// 	},1000)
// }
$(".next").on("click",function(){
	$(".result_image").hide();
	$(".result_end").show();
})

$(".start_btn").on("touchend",function(){
	$(".start").hide();
	$(".home").show();
})

var timerhidea=null;
function timerhide(className,num){
		$(className).fadeIn(1000)
		var time = 0
		timerhidea = setInterval(function(){
			time++
		if (time==2) {
			$(className).fadeOut(1000)
			clearInterval(timerhidea)
		}
	},1000)

}

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation='destination-in'
var canvas_you=false
function darw(img,width,height,e){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	canvas.width = width;
	canvas.height = height;

	var imgObj = new Image();
	imgObj.src = "./img/"+img
	imgObj.onload = function(){
		ctx.drawImage(this, 0, 0,width,height);

	}
	canvas_you=true

}


function draw_(e){
	if(canvas_can){
		ctx.save()
		ctx.beginPath()
		var loc = windowToCanvas(e);
		ctx.arc(loc.x,loc.y,100,0,2*Math.PI);
		ctx.clip()
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.restore();
	}
	
}

//this即是imgObj,保持图片的原始大小：470*480
//ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768

function windowToCanvas(e) {
	
		var x = e.targetTouches[0].clientX,
			y = e.targetTouches[0].clientY,
			bbox = canvas.getBoundingClientRect();

		return {
			x: x - bbox.left,
			y: y - bbox.top,
		};

	}
function getImageData(ctx, x, y, width, height) {
	var imgData = ctx.getImageData(x, y, width, height),
		pixles = imgData.data,
		transPixs = [];
	//ctx.putImageData(imgData,0,0)
	for (var i = 0, j = pixles.length; i < j; i += 4) {
		var a = pixles[i + 3];
		if (a < 128) {
			transPixs.push(i);
		}
	}
	return ((transPixs.length / (pixles.length / 4)) * 100).toFixed(2);
}