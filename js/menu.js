(function($){
	$.fn.menuBar=function(options){
		var settings=$.extend({
			items:[],
			width:100,
			speed:600
		},options);
		return this.each(function(){
			var self=$(this),
				menuLength=settings.items.length,
				menuDiv='';
			var control={
				render:function(){
					for(i=0;i<menuLength;i++){
						menuDiv+="<div class='menuItem'><span>"+settings.items[i].text+"</span><ul class='menuBox'></ul></div>";
					}
					self[0].innerHTML=menuDiv;
					//self.append(menuDiv);
					for(i=0;i<menuLength;i++){
						var menuList='';
						if(settings.items[i].menu){
							listLen=settings.items[i].menu.list.length;
							var childMenu=settings.items[i].menu;
							for(var k=0;k<listLen;k++){
								menuList+='<li><a href="'+childMenu.list[k].url+'">'+childMenu.list[k].text+'</a></li>';
							}
							$('.menuItem').eq(i).find("ul")[0].innerHTML=menuList;
							//$('.menuItem').eq(i).find("ul").append(menuList);	
							//console.log($('.menuItem').eq(i).find("ul")[0]);
						}
					}
				},
				show:function(item){
					self.find('div.menuItem').hover(function(){
						$(this).find('ul').width(settings.width).stop(true,false).show(settings.speed);						
					},function(){
						$(this).find('ul').hide();
					});
				},
				init:function(){
					this.render();
					this.show();
				}
			}
			control.init();
		})
	}
})(jQuery);


function fn(arg1, arg2, callback){
    var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(num);　　//传递结果
}

fn(10, 20, function(num){
   console.log("Callback called! Num: " + num); 
});　　

function cc(num){
   console.log("Callback called! Num: " + num); 
}
function fn(arg1, arg2, callback){
    var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(num);　　//传递结果
}

fn(10, 20,cc );　