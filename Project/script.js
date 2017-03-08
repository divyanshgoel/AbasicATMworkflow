	  	$(document).ready(function(){
			 var numbers = /^\d+$/;
			var note2000 = 0, note500 = 0, note100 = 0,note50=0, withdrawAmount;
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
							if($("#2000").val() == '')
							{
								document.getElementById("f2000Err").innerHTML = "Value Cannot be null, Please ReEnter!";
							}
							if($("#500").val() == '')
							{
								document.getElementById("f500Err").innerHTML = "Value Cannot be null, Please ReEnter!";
							}
							if($("#100").val() == '')
							{
								document.getElementById("f100Err").innerHTML = "Value Cannot be null, Please ReEnter!";
							}
							if($("#50").val() == '')
							{
								document.getElementById("f50Err").innerHTML = "Value Cannot be null, Please ReEnter!";
							}
						}
					else
           			if(value % 50 !=0 || value == 0 || value < 0) {
						document.getElementById("formError").innerHTML = "Enter Limit in multiple of 50";
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

    var note2000 = 0, note500 = 0, note100 = 0, note50 = 0, withdrawAmount;
    var flag2000= 0 , flag500 = 0 , flag100 = 0, flag50 = 0;
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

            if(value % 50 !=0 || value == 0 || value < 0) {
                document.getElementById("error") = "Invalid Denominations."
//                alert("Enter Limit in multiple of 50");
                $("#max_limit").focus();
            }else {
                if($("#2000").val() != null )
                    o.obj.count_2000 = $("#2000").val();

                else document.getElementById("error").innerHTML = "Invalid Data Entry"

                if($("#500").val() != null )
                    o.obj.count_500 = $("#500").val();

                else document.getElementById("error").innerHTML = "Invalid Data Entry"

                if($("#100").val() != null )
                    o.obj.count_100 = $("#100").val();

                else document.getElementById("error").innerHTML = "Invalid Data Entry"
                
                if($("#50").val() != null )
                    o.obj.count_50 = $("#50").val();

                else document.getElementById("error").innerHTML = "Invalid Data Entry"

                if($("#max_limit").val() != null )
                {
                    o.obj.max_limit = $("#max_limit").val();
                    o.leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100 + o.obj.count_50*50;

                }

                else document.getElementById("error").innerHTML = "Invalid Data Entry"
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
        o.leftAmount = o.obj.count_2000*2000 + o.obj.count_500*500 + o.obj.count_100*100 + o.obj.count_50*50;
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
                note2000 = 0, note500 = 0, note100 = 0, note50 = 0;
                o.withdrawalAmount = withdrawAmount;
                
                while (withdrawAmount >= 50)
                {
                    if (withdrawAmount >= 2000) {

                        withdrawAmount -= 2000;
                        note2000++;

                    }
                    else if (withdrawAmount >= 500) {

                        withdrawAmount -= 500;
                        note500++;

                    }

                    else if (withdrawAmount >= 100){

                        withdrawAmount -= 100;
                        note100++;

                    }
                         else {

                        withdrawAmount -= 50;
                        note50++;

                    }

                }

                if(o.leftAmount >= o.withdrawalAmount)
                {
                    if(o.obj.count_2000 >= note2000) // 2000
                    {
                        o.obj.count_2000 -= note2000;//
                    }
                    else{
                        if(o.obj.count_2000 < note2000) //checking 2000 notes availability
                        {
                            var temp2000 = o.obj.count_2000;
                            o.obj.count_2000 = 0;

                            if(o.obj.count_2000 == 0 ){

                                var diff2000 = note2000 - temp2000; //cheking difference
                                var make500 = diff2000 * 4; // making 500 notes

                                if(o.obj.count_500 >= (note500+make500)) // for deduction
                                {
                                    o.obj.count_500 -= (note500+make500);
                                }
                                else{
                                    if(o.obj.count_500 < (note500+make500)){
                                        var temp500 = o.obj.count_500;
                                        o.obj.count_500 = 0;
                                        if(o.obj.count_500 == 0 ){
                                            var diff500 = (note500 + make500) - temp500;
                                            var make100 = diff500 * 5 ; // making 100 notes

                                            if(o.obj.count_100 >= (note100+make100))
                                            {
                                                o.obj.count_100 -= (note100+make100);
                                            }
                                            else{
                                                if(o.obj.count_100 < (note100 + make100)){

                                          var temp100 = o.obj.count_100;
                                        o.obj.count_100 = 0;
                                        if(o.obj.count_100 == 0 ){
                                            var diff100 = (note100 + make100) - temp100;
                                            var make50 = diff100 * 2 ; // making 50 notes

                                            if(o.obj.count_50 >= (note50+make50))
                                            {
                                                o.obj.count_50 -= (note50+make50);
                                            }
                                            else{
                                                if(o.obj.count_50 < (note50 + make50)){
                                                    document.getElementById("error").innerHTML = "OOPS!! We Cannot Process Your Request as Cash is not present";
                                                }

                                            }
                                        }
                                            }
                                        }
                                    }
                                }
                            }
                            else{
                                    withdrawAmount -= 50;
                                note50++;

                        }
                    }
                    }

                    if(o.obj.count_500 >= note500) // 500
                    {
                        o.obj.count_500 -= note500;//
                    }

                    else{

                        if(o.obj.count_500 < note500) //checking 500 notes availability
                        {
                            var temp500 = o.obj.count_500;
                            o.obj.count_500 = 0;

                            if(o.obj.count_500 == 0 ){

                                var diff500 = note500 - temp500; //cheking difference
                                var make100 = diff500 * 5; // making 100 notes

                                if(o.obj.count_100 >= (note100+make100)) // for deduction
                                {
                                    o.obj.count_100 -= (note100+make100);
                                }
                                else if(o.obj.count_100 < (note100+make100)){
                                         var temp100 = o.obj.count_100;
                                        o.obj.count_100 = 0;
                                        if(o.obj.count_100 == 0 ){
                                            var diff100 = (note100 + make100) - temp100;
                                            var make50 = diff100 * 2 ; // making 50 notes

                                            if(o.obj.count_50 >= (note50+make50))
                                            {
                                                o.obj.count_50 -= (note50+make50);
                                            }
                                            else if(o.obj.count_50 < (note50 + make50)){
                                                    document.getElementById("error").innerHTML = "OOPS!! We Cannot Process Your Request as Cash is not present";
                                                }
                                        }
                                    }
                            }
							
                        }

                        else{
                            document.getElementById("error").innerHTML = "InSufficient Cash in the ATM";
                        }
                    }

                    if(o.obj.count_100 >= note100) // 100
                    {
                        o.obj.count_100 -= note100;//
                    }
                    else if (o.obj.count_100 < note100) {
                                   var temp100 = o.obj.count_100;
                                        o.obj.count_100 = 0;
                                        if(o.obj.count_100 == 0 ){
                                            var diff100 = note100 - temp100;
                                            var make50 = diff100 * 2 ; // making 50 notes

                                            if(o.obj.count_50 >= (note50+make50))
                                            {
                                                o.obj.count_50 -= (note50+make50);
                                            }
                                            else{
                                                if(o.obj.count_50 < (note50 + make50)){
                                                    document.getElementById("error").innerHTML = "OOPS!! We Cannot Process Your Request as Cash is not present";
                                                }

                                            }
                                        }
                                    }
                    
                     if(o.obj.count_50 >= note50) // 2000
                    {
                        o.obj.count_50 -= note50;//
                    }
                    
                    else document.getElementById("error").innerHTML = "OOPS!! We Cannot Process Your Request as Cash is not present";
            
                    document.getElementById("currencyDenominations").innerHTML = "<emp>The Denominations for the above amount will be </emp> <br>  <label> 2000 :- <span>" + note2000 +"</span> </label> <br> <label> 500 :- <span>" + note500 +"</span></label> <br/> <label> 100 :- <span>" + note100 + "</span></label> <br/> <label> 50 :- <span>" + note50 + "</span></label>";
                    addLog();
                    document.getElementById("error").innerHTML = "";
                        
                }
      
                 else {
                document.getElementById("currencyDenominations").innerHTML = "";
                document.getElementById("error").innerHTML = "<emp>Cannot withdraw amount cash is not available! Only Cash Available </emp> <br>  <label> 2000 :- <span>" + o.obj.count_2000 +"</span> </label> <br> <label> 500 :- <span>" + o.obj.count_500 +"</span></label> <br/> <label> 100 :- <span>" + o.obj.count_100 + "</span></label>  <br/> <label> 50 :- <span>" + o.obj.count_50 + "</span></label>";
                $("#amount").focus() ;
            }

            }

        }
    }


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
		  
            
}
               
