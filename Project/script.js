	  	$(document).ready(function(){
			
			var note2000 = 0, note500 = 0, note100 = 0,note50=0, withdrawAmount;
            var numbers = /^\d+$/;
			function ATM()
			{
				this.obj = {
				  count_2000 : 0,
					   count_500 : 0,
					   count_100 : 0,
						count_50 : 0,
					   max_limit: 0
					  };
				this.withdrawalAmount = 0;
				this.leftAmount = 0;
               
                
				this.fillATM = function()
				{
					var value=$("#max_limit").val();
                     
					
					if($("#2000").val() == '' || $("#500").val() == '' || $("#100").val() == '' || $("#50").val() == '')
						{
							if($("#2000").val() == '' || !($("#2000").val().match(numbers)))
                            {                                
                                $("#2000").focus();
                                document.getElementById("f2000Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                            }
                            if($("#500").val() == '' || !($("#500").val().match(numbers)))
                            {
                                $("#500").focus();
                                document.getElementById("f500Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                            }
                            if($("#100").val() == '' || !($("#100").val().match(numbers)))
                            {
                                $("#100").focus();
                                document.getElementById("f100Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                            }
                            if($("#50").val() == '' || !($("#50").val().match(numbers)))
                            {
                                $("#50").focus();
                                document.getElementById("f50Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                            }
						}
					else
           			if(value % 50 !=0 || value == 0 || value < 0 || !(value.match(numbers))) {
						document.getElementById("formError").innerHTML = "Enter Limit in multiple of 50 and value cannot be alpha ";
						$("#max_limit").focus();
					}else {
						document.getElementById("formError").innerHTML = "";
               			o.obj.count_2000 = $("#2000").val();
						o.obj.count_500 = $("#500").val();
						o.obj.count_100 = $("#100").val();
                        o.obj.count_50=$("#50").val();
						o.obj.max_limit = $("#max_limit").val();
						o.leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100+o.obj.count_50*50;
						var str = "<tr id='fillatm'>" +
						"<td>" + o.leftAmount +"<\/td>" +
						"<td>" + o.obj.count_2000 +"<\/td>" +
						"<td>" + o.obj.count_500 +"<\/td>" +
						"<td>" + o.obj.count_100 +"<\/td>" +  
						"<td>" + o.obj.count_50 +"<\/td>" +
						"<td>" + o.leftAmount +"<\/td>" +
						"</tr>";
						$('#table1').find('tbody').append(str);
						$('#currentAmount').html(o.leftAmount);
						$('#fillatm').css({ 'background-color' : 'green'});
						$("#btn1").attr("disabled", true);
					}
				}

			}
			
			var o = new ATM();
			
			function addLog()
				{
					o.leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100+o.obj.count_50*50;
					var str = "<tr>" +
					"<td>" + o.withdrawalAmount +"<\/td>" +
					"<td>" + o.obj.count_2000 +"<\/td>" +
					"<td>" + o.obj.count_500 +"<\/td>" +
					"<td>" + o.obj.count_100 +"<\/td>" +
					"<td>" + o.obj.count_50 +"<\/td>" +
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
				
                if (withdrawAmount % 50 != 0 || withdrawAmount == 0 || withdrawAmount < 0){

                    document.getElementById("amount").value = "";
                    document.getElementById("currencyDenominations").innerHTML = "";

                    var error = "OOPS ! You have Entered Wrong Denominations. Please Enter in Multiples of Hundred."
                    document.getElementById("error").innerHTML = error;
					$("#amount").focus() ;
                }

                else { 
					withdrawAmount = parseInt(withdrawAmount);
                    if(withdrawAmount > dailyWithdrawLimit) {
                        var limitError = "Your Daily Withdrawl Limit is " + dailyWithdrawLimit + " only , Please Re-Enter the Amount" ;
                        document.getElementById("amount").value = "";
                        document.getElementById("currencyDenominations").innerHTML = "";
                        document.getElementById("error").innerHTML = limitError;
						$("#amount").focus() ;
					}
                    else {
						note2000 = 0, note500 = 0, note100 = 0,note50=0;
						o.withdrawalAmount = withdrawAmount;
                        while (withdrawAmount >= 50)
                        {
                            if (withdrawAmount >= 2000 ){

                                withdrawAmount -= 2000;
                                note2000++;
								
								

                            }
                            else if (withdrawAmount >= 500) {

                                withdrawAmount -= 500;
                                note500++;

                            }

                            else if(withdrawAmount >= 100){

                                withdrawAmount -= 100;
                                note100++;

                            }
                            else{
                                    withdrawAmount -= 50;
                                note50++;

                            }
							
                        }
						
						/*if((o.obj.count_2000-note2000) > note2000 && o.obj.count_2000 >= note2000)
							{
								o.obj.count_2000 -= note2000;
							}
						if((o.obj.count_500 - note500) > note500 && o.obj.count_500 >= note500)
							{
								o.obj.count_500 -= note500;
							}
						if((o.obj.count_100 - note100) > note100 && o.obj.count_100 >= note100)
							{
								o.obj.count_100 -= note100;
							}*/
						
						if((o.obj.count_2000 >= note2000) && (o.obj.count_500 >= note500) && (o.obj.count_100 >= note100) &&(o.obj.count_50 >= note50) ) {
								o.obj.count_2000 -= note2000;
								o.obj.count_500 -= note500;
								o.obj.count_100 -= note100;
                                o.obj.count_50 -= note50;
								document.getElementById("currencyDenominations").innerHTML = "<emp>The Denominations for the above amount will be </emp> <br>  <label> 2000 :- <span>" + note2000 +"</span> </label> <br> <label> 500 :- <span>" + note500 +"</span></label> <br/> <label> 100 :- <span>" + note100 + "</span></label>"+"</span></label> <br/> <label> 50 :- <span>" + note50 + "</span></label>";
								addLog();
							document.getElementById("error").innerHTML = "";
						}							
						else {
							document.getElementById("currencyDenominations").innerHTML = "";
							document.getElementById("error").innerHTML = "<emp>Cannot withdraw amount cash is not available! Only Cash Available </emp> <br>  <label> 2000 :- <span>" + o.obj.count_2000 +"</span> </label> <br> <label> 500 :- <span>" + o.obj.count_500 +"</span></label> <br/> <label> 100 :- <span>" + o.obj.count_100 + "</span></label>"+"</span></label> <br/> <label> 50 :- <span>" + o.obj.count_50 + "</span></label>";
							$("#amount").focus() ;
						}
					}
				}
			}
            
            
            $( "#2000" ).blur(function() {
                
              if($("#2000").val() == '' || !($("#2000").val().match(numbers)))
                {                                
                    $("#2000").focus();
                    
                    document.getElementById("f2000Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                }
                
            });
            
            $( "#2000" ).focusout(function() {
                document.getElementById("f2000Err").innerHTML = '';
            });
            
            
            $( "#500" ).blur(function() {
                
                if($("#500").val() == '' || !($("#500").val().match(numbers)))
                {
                    $("#500").focus();
                    document.getElementById("f500Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                }
            });
            
            $( "#500" ).focusout(function() {
                document.getElementById("f500Err").innerHTML = '';
            });
            
            $( "#100" ).blur(function() {
               
                if($("#100").val() == '' || !($("#100").val().match(numbers)))
                {
                    $("#100").focus();
                    document.getElementById("f100Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                }
            });
            
            $( "#100" ).focusout(function() {
                document.getElementById("f100Err").innerHTML = '';
            });
            
            $( "#50" ).blur(function() {
               
                if($("#50").val() == '' || !($("#50").val().match(numbers)))
                {
                    $("#50").focus();
                    document.getElementById("f50Err").innerHTML = "Value Cannot be null and cannot contain any alpha value, Please ReEnter!";
                }
            });
            
            $( "#50" ).focusout(function() {
                document.getElementById("f50Err").innerHTML = '';
            });
            
            $( "#max_limit" ).blur(function() {
               
                var value=$("#max_limit").val();
                if(value % 50 !=0 || value == 0 || value < 0 || !(value.match(numbers))) {
						document.getElementById("formError").innerHTML = "Enter Limit in multiple of 50 and value cannot be alpha ";
						$("#max_limit").focus();
					}
            });
            
            $( "#max_limit" ).focusout(function() {
                document.getElementById("formError").innerHTML = '';
            });
		  
            
			$( "#btn1" ).on('click',function() {
				 o.fillATM();
				
				});
			
			$( "#btn2" ).on('click',function() {
					checkError();
							 
				});
			$( "#2000" ).focusout(function() {
				if($(this).val() < 0){
					$(this).val('0');
				}
		  	});
			$( "#500" ).focusout(function() {
				if($(this).val() < 0){
					$(this).val('0');
				}
		  	});
			$( "#100" ).focusout(function() {
				if($(this).val() < 0){
					$(this).val('0');
				}
		  	});
            
			$( "#50" ).focusout(function() {
				if($(this).val() < 0){
					$(this).val('0');
				}
		  	});
			
			$( "#max_limit" ).focusout(function() {
				if($(this).val() < 0){
					$(this).val('0');
				}
		  	});
			$( "#amount" ).focusout(function() {
				if($(this).val() < 0){
					$(this).val('0');
				}
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

		
		  
	  