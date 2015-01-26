(function($){
	$.fn.extend({
		tab:function(options){
			var defaults={
				closeW:true,//可关闭tab
				closeAll:true,//可关闭所有tab
				height:"auto",//tab内容高度
				width:"auto",//tab内容宽度
				k:0
			};
			var options=$.extend(defaults,options);
			return this.each(function(){
				var o=options,
					$self=$(this),
					len=$self.find("li").length,
					tabList=$self.find("li").find("span"),
					closeIcon=$self.find("li").find("i"),
					tabContent=$self.siblings();
				var control={
					//tab关闭
					tabClose:function(){
						if(o.closeW){
							closeIcon.show();
							if(o.closeAll){
								closeIcon.show();
							}else{
								closeIcon.eq(0).hide();
							}
							closeIcon.click(function(){
								var index=$(this).parent().index();
								if($(this).parent().hasClass("on")){
									$(this).parent().removeClass("on").next().addClass("on");
									tabContent.children().eq(index).next().show();
									var currentLen=$self.find("li").length;
									if(index==currentLen-1){
										$(tabContent).children().eq(index).siblings().eq(0).show();
										$(this).parent().siblings().eq(0).addClass("on");
									}
									tabContent.children().eq(index).remove();
								}else{
									tabContent.children().eq(index).remove();
								}
								$(this).parent().remove();
							})
						}
					},
					//tab切换
					change:function(){
						tabList.click(function(){
							var index=$(this).parent().index();
							tabContent.children().height(o.height).width(o.width);
							tabContent.children().eq(index).show().siblings().hide();
							tabList.parent().removeClass("on");
							$(this).parent().addClass("on");
						}).eq(o.k).click();	
					},
					init:function(){
						this.change();
						this.tabClose();
					}
				}
				control.init();	
			})
		}
	})
})(jQuery);
