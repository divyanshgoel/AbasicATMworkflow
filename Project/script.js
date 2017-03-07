
	  	$(document).ready(function(){
			var leftAmount = 0;
			function ATM()
			{
				this.obj = {
				  count_2000 : 0,
					   count_500 : 0,
					   count_100 : 0,
					   max_limit: 0
					  };
				this.fillATM = function()
				{
					o.obj.count_2000 = $("#2000").val();
					o.obj.count_500 = $("#500").val();
					 o.obj.count_100 = $("#100").val();
					   o.obj.max_limit = $("#max_limit").val();
					leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100;
					var str = "<tr id='fillatm'>" +
					"<td>" + leftAmount +"<\/td>" +
					"<td>" + o.obj.count_2000 +"<\/td>" +
					"<td>" + o.obj.count_500 +"<\/td>" +
					"<td>" + o.obj.count_100 +"<\/td>" +
					"<td>" + leftAmount +"<\/td>" +
					"</tr>";
					$('#table1').find('tbody').append(str);
					$('#fillatm').css({ 'background-color' : 'green'});
				}

				this.addLog = function()
				{
					var str = "<tr>" +
					"<td>" + withdrawalAmount +"<\/td>" +
					"<td>" + o.obj.count_2000 +"<\/td>" +
					"<td>" + o.obj.count_500 +"<\/td>" +
					"<td>" + o.obj.count_100 +"<\/td>" +
					"<td>" + leftAmount +"<\/td>" +
					"</tr>";
					$('#table1').find('tbody').append(str);
					$('#table1 tbody tr').css({ 'background-color' : 'red'});
					//$('#fillatm').css({ 'background-color' : 'green'});
				}
			}
			var o = new ATM();
			
		  
		  var withdrawalAmount = 1000;
			$( "#btn1" ).on('click',function() {
				 o.fillATM();
				$("#btn1").attr("disabled", true);
				});
			
			
			$( "#btn2" ).on('click',function() {
				 o.addLog();
				});
			
			var note2000 = 0, note500 = 0, note100 = 0, withdrawAmount, dailyWithdrawLimit = this.obj.max_limit;
            
            function checkError(){

                console.log("inside Function");

                withdrawAmount = document.getElementById("amount").value;

                console.log(withdrawAmount);

                if (withdrawAmount % 100 != 0 || withdrawAmount == 0 || withdrawAmount < 0){

                    document.getElementById("amount").value = "";
                    document.getElementById("currencyDenominations").innerHTML = "";

                    var error = "OOPS ! You have Entered Wrong Denominations. Please Enter in Multiples of Hundred."
                    document.getElementById("error").innerHTML = error;
                }

                else {
                    
                    withdrawAmount = parseInt(withdrawAmount);

                    console.log(withdrawAmount);

                    if(withdrawAmount > dailyWithdrawLimit){

                        console.log("hdvchkbjcjas");
                        var limitError = "Your Daily Withdrawl Limit is " + dailyWithdrawLimit + " only , Please Re-Enter the Amount" ;
                        document.getElementById("amount").value = "";
                        document.getElementById("currencyDenominations").innerHTML = "";

                        document.getElementById("error").innerHTML = limitError;

                    }

                    else{


                        while (withdrawAmount >= 100)
                        {
                            console.log("inside while loop");

                            console.log(typeof(withdrawAmount));

                            if (withdrawAmount >= 2000) {

                                withdrawAmount -= 2000;
                                note2000++;

                            }
                            else if (withdrawAmount >= 500) {

                                withdrawAmount -= 500;
                                note500++;

                            }

                            else if (withdrawAmount >= 100) {

                                withdrawAmount -= 100;
                                note100++;

                            }
                        }


                        console.log(note2000,note500,note100);

                        document.getElementById("currencyDenominations").innerHTML = "<emp>The Denominations for the above amount will be </emp> <br>  <label> 2000 :- <span>" + note2000 +"</span> </label> <br> <label> 500 :- <span>" + note500 +"</span></label> <br/> <label> 100 :- <span>" + note100 + "</span></label>"

                        document.getElementById("error").innerHTML = "";
                    }
					
					
					
					console.log(this.obj.count_2000, this.obj.count_500 , this.obj.count_100);
					console.log(leftAmount);
                }
            }
								
		});
		
		/*document.onkeydown = function(e) {
			var key;
			if (window.event) {
				key = event.keyCode
			}
			else {
				var unicode = e.keyCode ? e.keyCode : e.charCode
				key = unicode
			}
			switch (key) {//event.keyCode
				case 116: //F5 button
				event.returnValue = false;
				key = 0; //event.keyCode = 0;
				return false;
				case 82: //R button
				if (event.ctrlKey) {
					event.returnValue = false;
					key = 0; //event.keyCode = 0;
					return false;
				}
			}
		}*/	 

		
		  
	  