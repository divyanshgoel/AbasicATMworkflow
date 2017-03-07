
	  	$(document).ready(function(){
			
			var note2000 = 0, note500 = 0, note100 = 0, withdrawAmount;
			function ATM()
			{
				this.obj = {
				  count_2000 : 0,
					   count_500 : 0,
					   count_100 : 0,
					   max_limit: 0
					  };
				this.withdrawalAmount = 0;
				this.leftAmount = 0;
				this.fillATM = function()
				{
					var value=$("#max_limit").val();
           			//if(value % 100 ==0){
		   
						o.obj.count_2000 = $("#2000").val();
						o.obj.count_500 = $("#500").val();
						 o.obj.count_100 = $("#100").val();
						   o.obj.max_limit = $("#max_limit").val();
						o.leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100;
						var str = "<tr id='fillatm'>" +
						"<td>" + o.leftAmount +"<\/td>" +
						"<td>" + o.obj.count_2000 +"<\/td>" +
						"<td>" + o.obj.count_500 +"<\/td>" +
						"<td>" + o.obj.count_100 +"<\/td>" +
						"<td>" + o.leftAmount +"<\/td>" +
						"</tr>";
						$('#table1').find('tbody').append(str);
					$('#currentAmount').html(o.leftAmount);
						$('#fillatm').css({ 'background-color' : 'green'});

					/*}else
						{
							
               				alert("limit should be multiple of 100");
						}*/
				}

				
				
				
			}
            
			
			var o = new ATM();
			
			function addLog()
				{
					o.leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100;
					var str = "<tr>" +
					"<td>" + o.withdrawalAmount +"<\/td>" +
					"<td>" + o.obj.count_2000 +"<\/td>" +
					"<td>" + o.obj.count_500 +"<\/td>" +
					"<td>" + o.obj.count_100 +"<\/td>" +
					"<td>" + o.leftAmount +"<\/td>" +
					"</tr>";
					$('#table1').find('tbody').append(str);
					$('#currentAmount').html(o.leftAmount);
					$('#table1 tbody tr').css({ 'background-color' : 'red'});
					$('#fillatm').css({ 'background-color' : 'green'});
				}
			
			function checkError(){
					
				var dailyWithdrawLimit = o.obj.max_limit;
               
					
                withdrawAmount = document.getElementById("amount").value;

                

                if (withdrawAmount % 100 != 0 || withdrawAmount == 0 || withdrawAmount < 0){

                    document.getElementById("amount").value = "";
                    document.getElementById("currencyDenominations").innerHTML = "";

                    var error = "OOPS ! You have Entered Wrong Denominations. Please Enter in Multiples of Hundred."
                    document.getElementById("error").innerHTML = error;
                }

                else {
                    
                    withdrawAmount = parseInt(withdrawAmount);

                    

                    if(withdrawAmount > dailyWithdrawLimit){

                        
                        var limitError = "Your Daily Withdrawl Limit is " + dailyWithdrawLimit + " only , Please Re-Enter the Amount" ;
                        document.getElementById("amount").value = "";
                        document.getElementById("currencyDenominations").innerHTML = "";

                        document.getElementById("error").innerHTML = limitError;

                    }

                    else{

						o.withdrawalAmount = withdrawAmount;
                        while (withdrawAmount >= 100)
                        {
                            if (withdrawAmount >= 2000) {

                                withdrawAmount -= 2000;
                                note2000++;

                            }
                            else if (withdrawAmount >= 500) {

                                withdrawAmount -= 500;
                                note500++;

                            }

                            else {

                                withdrawAmount -= 100;
                                note100++;

                            }
							
                        }
						if(o.obj.count_2000 >= note2000 && o.obj.count_500 >= note500 && o.obj.count_100 >= note100)
							{
								o.obj.count_2000 -= note2000;
								o.obj.count_500 -= note500;
								o.obj.count_100 -= note100;
								addLog();
							}
							
						else
							document.getElementById("error").innerHTML = "Cannot withdraw Amount";
						
													
						
						
					}
					
                        document.getElementById("currencyDenominations").innerHTML = "<emp>The Denominations for the above amount will be </emp> <br>  <label> 2000 :- <span>" + note2000 +"</span> </label> <br> <label> 500 :- <span>" + note500 +"</span></label> <br/> <label> 100 :- <span>" + note100 + "</span></label>"
						note2000 = 0, note500 = 0, note100 = 0;
                        document.getElementById("error").innerHTML = "";
                    }
					
					
					
					console.log(this.obj.count_2000, this.obj.count_500 , this.obj.count_100);
					console.log(leftAmount);
                }
		  
		  
			$( "#btn1" ).on('click',function() {
				 o.fillATM();
				$("#btn1").attr("disabled", true);
				});
			
			
			$( "#btn2" ).on('click',function() {
					checkError();
							 
				});
			
			
            
            
								
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

		
		  
	  