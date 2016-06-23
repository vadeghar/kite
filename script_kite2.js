
var ORDER_QTY = 10000;
var NO_OF_ORDERS = 2;
var MAX_QTY_WITHOUT_NO_OF_ORDS = 20000;

$( ".menu-right-wrap" ).append("<div id='popupCntnr' class='' style='background-color : inherit; width : 50px;'></div>")
function giveAlert() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}
$(function(){setInterval(getLatestNetBuySellQty, 500);console.log("WORKING...")}); 
var BUY_MSG = '';var SELL_MSG = '';var ITER = 1;
function getLatestNetBuySellQty(){
	$('#instruments').each(function (){
		$(this).find('li').each(function(){
			var symbol = $(this).find('.symbol');
			var symName = $(symbol)
			.clone()    //clone the element
			.children() //select all the children
			.remove()   //remove all the children
			.end()  //again go back to selected element
			.text();
			var data = symName.split(' ').join('_');
			var marketDepth = $(this).find('.market-depth');
			var marketDepthBuy = $(marketDepth).find('.market-depth-buy');
			var tbody = $(marketDepthBuy).find('tbody');
			$(tbody).find('tr').each(function(){
				var priceAt = $('td:nth-child(1)', this).text();
				var totalOrders = $('td:nth-child(2)', this).text();
				var orderQty = $('td:nth-child(3)', this).text();
				var trIndex = $(this).index()+1;
				if (typeof window["temp_" + data] === 'undefined') {
					window["temp_"+data] = symName;
					console.log('1. Created var '+'temp_'+data);
				}
				if (typeof window["temp_"+data+'BuyOrderQty'] === 'undefined') {
					window["temp_"+data+'BuyOrderQty'] = 0;
					console.log('Created var '+'temp_'+data+'BuyOrderQty');
				}
				if (typeof window["temp_"+data+'BuyTotalOrders'] === 'undefined') {
					window["temp_" +data+'BuyTotalOrders'] = 0;
					console.log('Created var '+'temp_'+data+'BuyTotalOrders');
				}
				if (typeof window["temp_" + data+'BuyPriceAt'] === 'undefined') {
					window["temp_"+data+'BuyPriceAt'] = 0;
					console.log('Created var '+'temp_'+data+'BuyPriceAt');
				}
				
				
				if (typeof window["temp_"+data+'SellOrderQty'] === 'undefined') {
					window["temp_"+data+'SellOrderQty'] = 0;
					console.log('Created var '+'temp_'+data+'SellOrderQty');
				}
				if (typeof window["temp_"+data+'SellTotalOrders'] === 'undefined') {
					window["temp_" +data+'SellTotalOrders'] = 0;
					console.log('Created var '+'temp_'+data+'SellTotalOrders');
				}
				if (typeof window["temp_" + data+'SellPriceAt'] === 'undefined') {
					window["temp_"+data+'SellPriceAt'] = 0;
					console.log('Created var '+'temp_'+data+'SellPriceAt');
				}
				if (typeof window["temp_" + data] === 'undefined') {
					window["temp_"+data] = symName;
					console.log('2. Created var '+'temp_'+data);
				}
				
				if((orderQty >= ORDER_QTY && totalOrders <= NO_OF_ORDERS) || totalOrders >= MAX_QTY_WITHOUT_NO_OF_ORDS){
					var msg = "Symbol : "+symName+"<br/>BUY Price : "+priceAt+"<br/>Quantity : "+orderQty+"<br/>No. Orders : "+totalOrders;
					var d = new Date();
					console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'-Look at '+trIndex+':'+msg);
					if(BUY_MSG != msg){
						BUY_MSG = msg;
						$( "#popupCntnr" ).append( "<div id='ppDivBuy"+ITER+"' class='btn abcde' style='border-radius:10px; background: white; border: 1px solid #ccc; text-align:left; width:140px; background-color : #4a90e2' onclick='closeThisPP(id)'>"
													+   msg+"</div>" );
						giveAlert();
					}
					if(window["temp_" + data+'BuyOrderQty'] ==0){
						window["temp_" + data+'BuyOrderQty'] = orderQty;
						window["temp_" + data+'BuyPriceAt'] = priceAt;
						window["temp_" + data+'BuyTotalOrders'] = totalOrders;
						console.log('INITIALIZED ALL BUY VALUES AT BUY SIDE OF'+
						' temp_'+data+': '+window["temp_" + data]+
						' temp_'+data+'BuyOrderQty: '+window["temp_" + data+'BuyOrderQty']+
						' temp_'+ data+'BuyPriceAt: '+window["temp_" + data+'BuyPriceAt']+
						' temp_'+ data+'BuyTotalOrders: '+window["temp_" + data+'BuyTotalOrders']);
					}
					if(window["temp_" + data] == symName && orderQty > window["temp_" + data+'BuyOrderQty']){
						window["temp_" + data+'BuyOrderQty'] = orderQty;
						window["temp_" + data+'BuyPriceAt'] = priceAt;
						window["temp_" + data+'BuyTotalOrders'] = totalOrders;
						console.log('UPDATED ALL BUY VALUES AT BUY SIDE OF'+
						' temp_'+data+': '+window["temp_" + data]+
						' temp_'+data+'BuyOrderQty: '+window["temp_" + data+'BuyOrderQty']+
						' temp_'+ data+'BuyPriceAt: '+window["temp_" + data+'BuyPriceAt']+
						' temp_'+ data+'BuyTotalOrders: '+window["temp_" + data+'BuyTotalOrders']);
					}
				}
				
			});
			
			var marketDepthSell = $(marketDepth).find('.market-depth-sell');
			var SellTbody = $(marketDepthSell).find('tbody');
			$(SellTbody).find('tr').each(function(){
				var SellPriceAt = $('td:nth-child(1)', this).text();
				var SellOrderQnty = $('td:nth-child(2)', this).text();
				var qNpSell = SellOrderQnty.split(" "); 
				var trIndex2 = $(this).index()+1;
				var SellTotalOrders = $('td:nth-child(2)', this).text();
				var SellOrderQnty1 = $('td:nth-child(3)', this).text();;
				//alert(SellPriceAt+" - totalOrders "+SellTotalOrders+" Qnty "+SellOrderQnty1);
				
				if(SellOrderQnty1 >= ORDER_QTY && SellTotalOrders <= NO_OF_ORDERS){
					
					var msg2 = "Symbol : "+symName+"<br/>SELL Price : "+SellPriceAt+"<br/>Quantity : "+SellOrderQnty1+" <br/>No. Orders : "+SellTotalOrders;
					var d = new Date();
					console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'Look at '+trIndex2+':'+msg2);
					if(SELL_MSG != msg2){ 
						SELL_MSG = msg2;
						$( "#popupCntnr" ).append( "<div id='ppDivBuy"+ITER+"' class='btn abcde' style='border-radius:10px; background: white; border: 1px solid #ccc; text-align:left; width:140px; background-color : #ff5c10' onclick='closeThisPP(id)'>"
													+   msg2+"</div>" );
						giveAlert();
					}
					if(window["temp_" + data] == symName && window["temp_" + data+'SellOrderQty'] ==0){
						window["temp_" + data+'SellOrderQty'] = SellOrderQnty1;
						window["temp_" + data+'SellPriceAt'] = SellPriceAt;
						window["temp_" + data+'SellTotalOrders'] = SellTotalOrders;
						console.log('INITIALIZED ALL SELL VALUES AT SELL SIDE OF '+
						' temp_'+ data+': '+window["temp_" + data]+
						' temp_'+ data+'SellOrderQty: '+window["temp_" + data+'SellOrderQty']+
						' temp_'+ data+'SellPriceAt: '+window["temp_" + data+'SellPriceAt']+
						' temp_'+ data+'SellTotalOrders: '+window["temp_" + data+'SellTotalOrders']);
					}
					if(window["temp_" + data] == symName && SellOrderQnty1 > window["temp_" + data+'SellOrderQty']){
						window["temp_" + data+'SellOrderQty'] = SellOrderQnty1;
						window["temp_" + data+'SellPriceAt'] = SellPriceAt;
						window["temp_" + data+'SellTotalOrders'] = SellTotalOrders;
						console.log('UPADATED ALL SELL VALUES AT BUY SELL OF '+
						' temp_'+ data+': '+window["temp_" + data]+
						' temp_'+ data+'SellOrderQty: '+window["temp_" + data+'SellOrderQty']+
						' temp_'+ data+'SellPriceAt: '+window["temp_" + data+'SellPriceAt']+
						' temp_'+ data+'SellTotalOrders: '+window["temp_" + data+'SellTotalOrders']);
					}
				}
				
			});
			
		});
	});
	ITER++;
}
function closeThisPP(idVal){SELL_MSG = '';BUY_MSG = '';	$('#'+idVal).remove();}function closeDiv(){console.log("Closing all popups");SELL_MSG = '';BUY_MSG = '';$('div.btn').hide();}