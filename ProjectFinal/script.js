
		  var obj = {
			  count_2000 : 0,
				   count_500 : 0,
				   count_100 : 0,
				   max_limit: 0
		  };
		  var leftAmount = 0;
		  var withdrawalAmount = 1000;
		  
	  	$(document).ready(function(){
			$( "#btn1" ).on('click',function() {
				 fillATM();
				$("#btn1").attr("disabled", true);
				});
			
			function fillATM()
			{
				obj.count_2000 = $("#2000").val();
				obj.count_500 = $("#500").val();
				 obj.count_100 = $("#100").val();
				   obj.max_limit = $("#max_limit").val();
          		leftAmount = obj.count_2000*2000 + obj.count_500*500 + obj.count_100*100;
				var str = "<tr id='fillatm'>" +
				"<td>" + leftAmount +"<\/td>" +
		 		"<td>" + obj.count_2000 +"<\/td>" +
				"<td>" + obj.count_500 +"<\/td>" +
				"<td>" + obj.count_100 +"<\/td>" +
				"<td>" + leftAmount +"<\/td>" +
		  		"</tr>";
				$('#table1').find('tbody').append(str);
				$('#fillatm').css({ 'background-color' : 'green'});
			}
			$( "#btn2" ).on('click',function() {
				 addLog();
				});
			
			function addLog()
			{
				var str = "<tr>" +
				"<td>" + withdrawalAmount +"<\/td>" +
		 		"<td>" + obj.count_2000 +"<\/td>" +
				"<td>" + obj.count_500 +"<\/td>" +
				"<td>" + obj.count_100 +"<\/td>" +
				"<td>" + leftAmount +"<\/td>" +
		  		"</tr>";
				$('#table1').find('tbody').append(str);
				$('#table1 tbody tr').css({ 'background-color' : 'red'});
				//$('#fillatm').css({ 'background-color' : 'green'});
			}
								
		});
		
			  
		  
	  