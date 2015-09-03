	function clock(){
		var now = new Date();
		var h = 360/12*now.getHours();
		var m = 360/60*now.getMinutes();
		var s = 360/60*now.getSeconds();

		$("#hourLine").css("transform", "rotate(" + h + "deg)");
		$("#minLine").css("transform", "rotate(" + m + "deg)");
		$("#secLine").css("transform", "rotate(" + s + "deg)");
	}

	 function refresh(){
	 	clock(), setTimeout(refresh, 500);
	 }

	 refresh();