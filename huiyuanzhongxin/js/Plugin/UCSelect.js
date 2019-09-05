/***********************************************************************
 * jQuery UCSelect V1.0.0                                              *
 * Dual licensed under the MIT and GPL licenses.                       *
 *                                                                     *
 * Copyright (c) 2014          *
 *                                                                     *
 * Autor: uc.Loyaoo                                                    *                      *
 * Date: 星期四 2015-09-24                                              *
 * Version: 1.0.0                                                      *
 ***********************************************************************/
(function($){
	var UCFormSelect = {
		init:function(){
			return this.each(function(i){
				var Select = $(this).UCFormSelect('destroy');
				var Sindex,SFirst,SLast;
				var UCSelectFocus = false;
				var UCSDragging = false;
				var SelectSize = this.size||10;
				var SelectDom = this;
				var UCSelectWrap = $('<div class="UCSelect'+(Select[0].multiple&&' Multiple'||'')+'"'+(!Select[0].disabled&&' tabIndex="'+(this.tabIndex||0)+'"'||'')+'></div>');
				var UCSelectSearch = $('<div class="SelectSearch"><div class="SearchInput"><input type="text" value="请输入内容" placeholder="请输入内容" style="color:#aaa" autocomplete="off" /></div></div>');
				var UCSelectList = $('<div class="SelectList"></div>').css('overflow-y','auto').html(Select.UCFormSelect('list'));
				var UCSelectVal = $('<div class="SelectVal"><b>一级标签（最多选择两个）</b><span></span><em></em></div>').addClass(Select[0].disabled?' Disabled':'');
				var UCSelectBox = $('<div class="SelectBox"></div>').append(Select[0].multiple?'':UCSelectSearch,UCSelectList);
				var UCSelect = Select.hide().wrap(UCSelectWrap).parent().append(UCSelectVal,UCSelectBox);
				var UCSelectItemHeight = UCSelectList.css({'height':(Select.find('option').length>SelectSize?UCSelectList.find('dd.option').outerHeight()*SelectSize:'')}).find('dd.option').outerHeight();
				Select.UCFormSelect('update');
				Select.UCFormSelect('close');
				if(!($.browser.msie && $.browser.version<9)){
					var UCSelectBoxHeight = UCSelectBox.outerHeight();
					var UCSelectBoxBottom = ($(window).scrollTop()+document.documentElement.clientHeight)-UCSelect.offset().top-UCSelect.outerHeight();
					var UCSelectBoxTop = UCSelect.offset().top-$(window).scrollTop();
					UCSelectBoxBottom<UCSelectBoxHeight&&UCSelectBoxTop>UCSelectBoxBottom?UCSelectBox.css({top:-UCSelectBoxHeight+(UCSelectVal.offset().top-UCSelect.offset().top)}):UCSelectBox.css({top:UCSelectVal.outerHeight()+(UCSelectVal.offset().top-UCSelect.offset().top)});
					$(window).scroll(function(){
						UCSelectBoxHeight = UCSelectBox.outerHeight();
						UCSelectBoxBottom = ($(window).scrollTop()+document.documentElement.clientHeight)-UCSelect.offset().top-UCSelect.outerHeight();
						UCSelectBoxTop = UCSelect.offset().top-$(window).scrollTop();
						var UCSelectBoxBottom = ($(window).scrollTop()+document.documentElement.clientHeight)-UCSelect.offset().top;
						if(UCSelectBoxBottom<UCSelectBoxHeight&&UCSelectBoxTop>UCSelectBoxBottom){
							UCSelectBox.css({top:-UCSelectBoxHeight+(UCSelectVal.offset().top-UCSelect.offset().top)});
						} else {
							UCSelectBox.css({top:UCSelectVal.outerHeight()+(UCSelectVal.offset().top-UCSelect.offset().top)});
						}
					});
				}
		 
				UCSelectList.find('dd.optgroup').click(function(){
					return false;
					UCSelectSearch.find('input').focus();
				})
		 		UCSelectSearch.find('input').bind('click',function(){return false;})
				.bind('focus',function(){
					$(this).val()===$(this).attr('placeholder')&&$(this).val(null).css('color', '');
				})
				.bind('blur',function(){
					!$(this).val()&&$(this).val($(this).attr('placeholder')).css('color', '#aaa');
				})
				.bind('keyup',function(e){
					if(e.keyCode==33||e.keyCode==34||e.keyCode==35||e.keyCode==36||e.keyCode==37||e.keyCode==38||e.keyCode==39||e.keyCode==40){return false;}
					if(e.keyCode==13&&$(this).val()!==''&&UCSelectList.find('.option:visible').length!==0&&UCSelectList.find('.over:visible').length!==0){
						UCSelectFocus = false;
						keyDown(this,Sindex);
						Select.UCFormSelect('close');
						UCSelect.focus();
					}
					var str = this.value;
					var num = 0;
					if (str.length==0){
						UCSelectList.find('.UCSelectAll').show();
						UCSelectList.find('.NoResults').remove();
						UCSelectList.find('dd,dt').each(function(){
							$(this).show();
						})
					} else {
						UCSelectList.find('.UCSelectAll').hide();
						UCSelectList.find('dt').hide();
						UCSelectList.find('.option').each(function(){
							if($(this).find('span').text().match(str)){
								$(this).siblings('dt').show();
								$(this).show();
								num++;
							} else {
								$(this).hide();
							}
						})
						if(num==0){
							if(UCSelectList.find('.NoResults').length==0){
								UCSelectList.append($('<div class="NoResults">没有找到您要的选项</div>').css({'height':(UCSelectList.find('dd').outerHeight()*SelectSize),'line-height':(UCSelectList.find('dd').outerHeight()*SelectSize)+'px','text-algin':'center'}));
							}
						} else {
							UCSelectList.find('.NoResults').remove();
						}
					}
				})

				UCSelectBox.bind('click',function(){return false;})
				UCSelect.find('select').bind("change",function(){
					Select.UCFormSelect('update');
				})
				UCSelect
				.bind('click',function(){
					if(Select.is(':disabled')){return false}
					if(UCSelectBox.is(':hidden')){
						UCSelectFocus = true;
						Select.UCFormSelect('open');
					} else {
						UCSelectFocus = false;
						Select.UCFormSelect('close');
					}
					return false;
				})
				.bind('focus',function(){UCSelectVal.addClass('over');})
				.bind('blur',function(){
					if(!UCSelectFocus){
						UCSelectVal.removeClass('over');
					}
				})
				.bind('keydown',function(e){
						if(Select.is(':disabled')){return false;}
						SFirst = UCSelectList.find('.option').index(UCSelectList.find('.option:not(.Disabled):visible:first'));
						SLast = UCSelectList.find('.option').index(UCSelectList.find('.option:not(.Disabled):visible:last'));
						Sindex = UCSelectList.find('.option').index(UCSelectList.find('.over:not(.Disabled):visible:first'));
						if(Sindex<0){
							if(Select.find('option').eq(Sindex).is(':disabled')){
								if(!Select.find('option').eq(Sindex).next().parent('optgroup').length!==0&&!Select.find('option').eq(Sindex).next().parent('optgroup').is(':disabled')){
									Sindex=0;
								}
							}
						}
						if(!Select[0].multiple){
							if(UCSelectBox.is(':hidden')){
								SFirst = UCSelectList.find('.option').index(UCSelectList.find('.option:not(.Disabled):first'));
								SLast = UCSelectList.find('.option').index(UCSelectList.find('.option:not(.Disabled):last'));
							}
							Sindex = Select[0].selectedIndex<0?0:Select[0].selectedIndex;
						}
						var SearchOn = false;
						if(UCSelectSearch.find('input').val()!=='请输入内容'&&UCSelectSearch.find('input').val().length!==0){
							SearchOn = true;
						} else {
							SearchOn = false;
						}
						if(e.altKey&&e.keyCode==40){
							$(this).css({'position':'relative','z-index':'999'}).find('.SelectBox').css({'position':'absolute','z-index':'9999'});
							UCSelectFocus = true;
							Select.UCFormSelect('open');
							return false;
						}
						switch(e.keyCode){
							case 9:
								UCSelectFocus = false;
								Select.UCFormSelect('close');
								return true;
								break;
							case 13:case 27:
								if(Select[0].multiple){
									UCSelectFocus = false;
									Select.UCFormSelect('close');
									$(this).focus();
								} else{
									if($(this).find('.SelectSearch').find('input').val().length==0||UCSelectList.find('.option:visible').length==0||$(this).find('.SelectSearch').find('input').val()=='请输入内容'){
										UCSelectFocus = false;
										Select.UCFormSelect('close');
										$(this).focus();
									}
								}
								break;
							case 32:
								e.preventDefault();
								if(Select[0].multiple){UCSelectBox.find('.option').eq(Sindex).click();}
								break;
							case 33:case 36:
								e.preventDefault();
								if(UCSelectList.find('.option:visible').length==0&&!UCSelectBox.is(':hidden')){return false;}
								Sindex=SFirst;
								keyDown(this,Sindex);
								break;
							case 34:case 35:
								e.preventDefault();
								if(UCSelectList.find('.option:visible').length==0&&!UCSelectBox.is(':hidden')){return false;}
								Sindex=SLast;
								keyDown(this,Sindex);
								break;
							case 38:
								e.preventDefault();
								if(UCSelectList.find('.option:visible').length==0&&!UCSelectBox.is(':hidden')){return false;}
								if(Sindex<=SFirst){
									Sindex=SFirst;
								} else {
									if(SearchOn){
										for(Sindex;Sindex>SFirst;Sindex--){
											if(!UCSelectList.find('.option').eq(Sindex).prev().is(':hidden')&&!Select.find('option').eq(Sindex).prev().is(':disabled')){
												if(!Select.find('option').eq(Sindex).prev().parent('optgroup').length!==0&&!Select.find('option').eq(Sindex).prev().parent('optgroup').is(':disabled')){
													Sindex--;
													break;
												}
											}
										}
									} else {
										for(Sindex;Sindex>SFirst;Sindex--){
											if(!Select.find('option').eq(Sindex).prev().is(':disabled')){
												if(!Select.find('option').eq(Sindex).prev().parent('optgroup').length!==0&&!Select.find('option').eq(Sindex).prev().parent('optgroup').is(':disabled')){
													Sindex--;
													break;
												}
											}
										}
									}
								}
								keyDown(this,Sindex);
								break;
							case 40:
								e.preventDefault();
									if(Select[0].multiple&&UCSelectBox.is(':hidden')){
										$(this).css({'position':'relative','z-index':'999'}).find('.SelectBox').css({'position':'absolute','z-index':'9999'});
										UCSelectFocus = true;
										Select.UCFormSelect('open');
										return false;
									}
									if(UCSelectList.find('.option:visible').length==0&&!UCSelectBox.is(':hidden')){return false;}
									if(Sindex==SLast){
										Sindex=SLast;
									} else {
										if(SearchOn){
											for(Sindex;Sindex<SLast;Sindex++){
												if(!UCSelectList.find('.option').eq(Sindex).next().is(':hidden')&&!Select.find('option').eq(Sindex).next().is(':disabled')){
													if(!Select.find('option').eq(Sindex).next().parent('optgroup').length!==0&&!Select.find('option').eq(Sindex).next().parent('optgroup').is(':disabled')){
														Sindex++;
														break;
													}
												}
											}
										} else {
											for(Sindex;Sindex<SLast;Sindex++){													
												if(!Select.find('option').eq(Sindex).next().is(':disabled')){
													if(!Select.find('option').eq(Sindex).next().parent('optgroup').length!==0&&!Select.find('option').eq(Sindex).next().parent('optgroup').is(':disabled')){
														Sindex++;
														break;
													}
												}
											}
										}
									}
									keyDown(this,Sindex);
								break;
							};
						
					})
					function keyDown(o,i){
						if(Select.is(':disabled')){return false;}
						if(!Select[0].multiple){SelectDom.selectedIndex = i;}
						UCSelectList.find('.option').removeClass('over').eq(i).addClass('over');
						UCSelectList.scrollTop(UCSelectList.find('.option').eq(i).offset().top-UCSelectList.offset().top+UCSelectList.scrollTop()-UCSelectList.outerHeight()+UCSelectList.find('.option').eq(i).outerHeight());
						Select.UCFormSelect('update');
					}
				// UCSelectList.find('dd.UCSelectAll').click(function(e){
				// 	var obj = $(this);
				// 	if($(this).hasClass('Selected')){
				// 		Select.find('option:enabled').each(function(){
				// 			if(!$(this).parent('optgroup').length!==0&&!$(this).parent('optgroup').is(':disabled')){
				// 				$(this).attr("selected",false);
				// 				obj.removeClass('Selected');
				// 			}
				// 		})
				// 	} else {
				// 		Select.find('option:enabled').each(function(){
				// 			if(!$(this).parent('optgroup').length!==0&&!$(this).parent('optgroup').is(':disabled')){
				// 				$(this).attr("selected",true);
				// 				obj.addClass('Selected');
				// 			}
				// 		})
				// 	}
				// 	Select.UCFormSelect('update');
				// 	UCSelectSearch.find('input').focus();
				// 	return false;
				// });
				UCSelectList.find('dd.option').click(function() {

					if(Select.is(':disabled')||Select.find('option').eq(UCSelectList.find('.option').index(this)).is(':disabled')){return false;}
					if(Select.find('option').eq(UCSelectList.find('.option').index(this)).parent('optgroup').length!==0&&Select.find('option').eq(UCSelectList.find('.option').index(this)).parent('optgroup').is(':disabled')){return false;}
					var Selected = Select.find("option").eq(UCSelectList.find('dd.option').index(this));

					if(Select[0].multiple){
						if(Selected[0].selected){

							Selected.attr("selected",false).trigger("change");
						} else {
							Selected.attr("selected",true).trigger("change");
						}
					} else {
						Selected.attr("selected",true).trigger("change");
						UCSelectFocus = false;
						Select.UCFormSelect('close');
					}
                    // var aa =$(".SelectVal span").text();
                    // console.log(aa);
					UCSelectSearch.find('input').focus();

					return false;
				})
				$(document).bind('mousedown',function(e){
					var Event = e.target;
					$('.UCSelect .SelectBox').each(function(){
						var Select = $(this).parents(".UCSelect").find("select").get(0);
						var Events = $(Event).parents(".UCSelect").find("select").get(0);
						if(!(Event && Select && Select == Events)){ 
							$(this).parents(".UCSelect").find('.SelectVal').removeClass('over');
							$(this).parents(".UCSelect").find("select").UCFormSelect('close');
						}
					});
				});
			})
		},
		update: function(){
			var val = '';
			var UCS = $(this).siblings('.SelectBox');
			var Select = $(this);
			var sed = $(this).find('option:selected').length;
			var opt = $(this).find('option').length;
			var str = sed==opt?'All selected':('# of % selected').replace('#', sed).replace('%', opt);
			// console.log(sed);
            if (sed > 2) {
                var oTwo = $(this).parent().parent();
            	if ( oTwo.is(".select_center_1")) {
                    alert("超出选择了");
                    return false
				}
			}
            if (sed > 3){
                alert("超出选择了");
                return false
            }
			UCS.find('.option').removeClass('Selected');
			Select.find('option').each(function(){
				if(this.disabled){
					UCS.find('.option').eq(Select.find('option').index(this)).addClass('Disabled');
				}else if($(this).parent('optgroup').length>0&&this.parentNode.disabled){
					UCS.find('.option').eq(Select.find('option').index(this)).parents('.optgroup').addClass('Disabled');
					UCS.find('.option').eq(Select.find('option').index(this)).addClass('Disabled');
				}
			});

			if(!Select[0].multiple){
				UCS.find('.option').removeClass('Selected').removeClass('over');
				Select.find('option:enabled:selected:first').each(function(){
					UCS.find('.option').eq(Select.find('option').index(this)).addClass('over');
				})
			};

			$(this).find('option:selected').each(function(){
				UCS.find('.option').eq(Select.find('option').index(this)).addClass('Selected');
				val+=((val==''?'':', ')+$(this).text());
			});
			$(this).siblings('.SelectVal').find('span').html(sed<5?val:str);
            if ( val != "") {
                $(this).siblings('.SelectVal').find('b').css("display","none");
                // console.log("aa");
			}else {
                $(this).siblings('.SelectVal').find('b').css("display","inline-block");
			}
            $(this).parent().prev().val(val);		//添加到需要传输数据的input
            // console.log(val);
            // console.log( $(this).parent().prev().val());
		},
		destroy: function(){
			$(this).siblings('.SelectVal,.SelectBox').remove();
			$(this).unwrap('.UCSelect').css('display','');
			return $(this);
		},
		open: function(){
			if(!$(this).is(':disabled')){
				$(this).siblings('.SelectVal').addClass('over');
				$(this).siblings('.SelectBox').css({'position':'absolute','z-index':'9999'}).show().parent('.UCSelect').css({'position':'relative','z-index':'999'});
				$(this).siblings('.SelectBox').find('input').focus();
			}
		},
		close: function(){
			$(this).siblings('.SelectBox').css({'position':'','z-index':''}).hide().parent('.UCSelect').css({'position':'','z-index':''});
			$(this).siblings('.SelectBox').find('.SelectSearch').find('input').val('请输入内容');
			$(this).siblings('.SelectBox').find('.NoResults').remove();
			$(this).siblings('.SelectBox').find('dd,dt').show();
		},
		enable: function(){
			$(this).attr('disabled',false);
			$(this).siblings('.SelectVal').removeClass('Disabled');
			$(this).parent('.UCSelect').attr('tabIndex',$(this).tabIndex||0);
		},
		disabled: function(){
			$(this).attr('disabled',true);
			$(this).siblings('.SelectVal').addClass('Disabled');
			$(this).parent('.UCSelect').removeAttr('tabIndex');
		},
		list: function(){
			var List = [];
			var UCS = $(this);
			var SelectAll = UCS.find(':selected').length==UCS.find('option').length?' Selected':'';
			List.push("<dl>");
			// if(UCS[0].multiple){
			// 	List.push('<dd class="UCSelectAll'+SelectAll+'"><a href="javascript:void(0)"><span>选择全部</span></a></dd>');
			// }
			$('*',this).each(function() {
				switch($(this).get(0).tagName.toLowerCase()){
					case 'option':
						if($(this).parent('optgroup').length==0){
							List.push('<dd class="option"><a href="javascript:void(0)"><span>'+$(this).text()+'</span></a></dd>');
						}
						break;
					case 'optgroup':
						List.push('<dd class="optgroup"><dl><dt><a href="javascript:void(0)"><span>'+$(this).attr('label')+'</span></a></dt>');
						$(this).find('option').each(function() {
							List.push('<dd class="option"><a href="javascript:void(0)"><span>'+$(this).text()+'</span></a></dd>');
                           });
						List.push('</dl></dd>');
						break;
				}
			});
			List.push("</dl>");
			return List.join('');
		}
	}
	$.fn.UCFormSelect = function(method) {
		if (UCFormSelect[method]) {
			return UCFormSelect[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return UCFormSelect.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.UCSELECT');
		}
	};  
})(jQuery);