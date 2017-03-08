/**
 * Created by divyansh on 8/3/17.
 */
$(document).ready(function () {

    var atm_machine = new Init();


    function checkWithdraw(withdrawlAmount) {

        var error;

        withdrawlAmount = parseInt(withdrawlAmount);
        if (withdrawlAmount % atm_machine.denominations[atm_machine.denominations.length - 1] != 0 || withdrawlAmount == 0 || withdrawlAmount < 0) {

            error = "OOPS ! You have Entered Wrong Denominations. Please Enter in Multiples of Fifty."
            printError(error);
            // return "Error Occured";
        }
        else if (withdrawlAmount > atm_machine.max_limit) {
            error = "Your Daily Withdrawl Limit is " + atm_machine.max_limit + " only , Please Re-Enter the Amount";
            printError(error);
            // return "Error Occured";
        }
        else if(atm_machine.totalAmount < withdrawlAmount){
            error = "OOPS!!! Insuffiecient Money in Bank"
            printError(error);
        }

        else {
            console.log(typeof withdrawlAmount);
            var check = countDenominations(withdrawlAmount);
            printError("");
        }

    }

    function Init() {

        this.denominations = [2000, 500, 100, 50];
        this.denominationsCount = [0, 0, 0, 0];
        this.max_limit = 0;
        this.totalAmount = 0;

    }

    function transactionManager(count_notes) {

        for (var count = 0; count < atm_machine.denominations.length; count++) {

            atm_machine.denominationsCount[count] -= count_notes.denominationsCount[count];

        }

        atm_machine.totalAmount -= count_notes.totalAmount;

        var str = "<tr>" +
            "<td>" + count_notes.totalAmount + "<\/td>" +
            "<td>" + atm_machine.denominationsCount[0] + "<\/td>" +
            "<td>" + atm_machine.denominationsCount[1] + "<\/td>" +
            "<td>" + atm_machine.denominationsCount[2] + "<\/td>" +
            "<td>" + atm_machine.denominationsCount[3] + "<\/td>" +
            "<td>" + atm_machine.totalAmount + "<\/td>" +
            "</tr>";
        $('#table1').find('tbody').append(str);
        $('#currentAmount').html(atm_machine.totalAmount);
        $('#table1 tbody tr').css({'background-color': 'red'});
        $('#newRow  ').css({'background-color': 'green'});


    }

    function addMoney() {

        var tmp2000 = parseInt($("#2000").val());
        var tmp500 = parseInt($("#500").val());
        var tmp100 = parseInt($("#100").val());
        var tmp50 = parseInt($("#50").val());
        var temp_max_limit = parseInt($("#max_limit").val());;
        console.log("inside add money");

            atm_machine.max_limit = temp_max_limit;

        if (temp_max_limit % 50 != 0 || temp_max_limit == 0 || temp_max_limit < 0) {
            var error = "Invalid Max-Limit";
            printError(error)
            $("#max_limit").focus();
            console.log("if")
        }
        else {
            console.log("fififfiifif")
            // console.log($("#2000").val());
            if (tmp2000 != "" && tmp2000 >= 0) atm_machine.denominationsCount[0] = tmp2000;
            else if(tmp2000 == "") atm_machine.denominationsCount[0] = 0;
             else   document.getElementById("error").innerHTML = "Invalid Data Entry"

            if (tmp500 != "" && tmp500 >= 0) atm_machine.denominationsCount[1] = tmp500;
            else if(tmp500 == "") atm_machine.denominationsCount[1] = 0;
            else document.getElementById("error").innerHTML = "Invalid Data Entry"

            if (tmp100 != "" && tmp100 == 0) atm_machine.denominationsCount[2] = tmp100;
            else if(tmp100 == "") atm_machine.denominationsCount[2] = 0;
            else document.getElementById("error").innerHTML = "Invalid Data Entry"

            if (tmp50 != "" && tmp50 >= 0) atm_machine.denominationsCount[3] = tmp50;
            else if(tmp50 == "") atm_machine.denominationsCount[3] = 0;
            else document.getElementById("error").innerHTML = "Invalid Data Entry"

            console.log(atm_machine.denominationsCount);


            if(atm_machine.denominationsCount[0]= atm_machine.denominationsCount[1] =atm_machine.denominationsCount[2] =atm_machine.denominationsCount[3] ==0)
            {
                printError("bhai kuch toh daal le ");
                return;

            }
            if (temp_max_limit != null) {
                for (count = 0; count < atm_machine.denominationsCount.length; count++) {

                    atm_machine.totalAmount += atm_machine.denominationsCount[count] * atm_machine.denominations[count];
                }
            }
            var str = "<tr id='newRow'>" +
                "<td>" + atm_machine.totalAmount + "<\/td>" +
                "<td>" + atm_machine.denominationsCount[0] + "<\/td>" +
                "<td>" + atm_machine.denominationsCount[1] + "<\/td>" +
                "<td>" + atm_machine.denominationsCount[2] + "<\/td>" +
                "<td>" + atm_machine.denominationsCount[3] + "<\/td>" +
                "<td>" + atm_machine.totalAmount + "<\/td>" +
                "</tr>";
            $('#table1').find('tbody').append(str);
            $('#currentAmount').html(atm_machine.totalAmount);
            $('#newRow').css({'background-color': 'green'});
            // $("#btn1").attr("disabled", true);
            $("#fillatm").hide();
            $('#maxLimit').html("Your Daily Max-Limit is :- " + atm_machine.max_limit);
        }
    }

    function takeInput() {

        var amount = document.getElementById("amount").value;
        console.log("dfbf" + amount);
        if(amount == ""){
            printError("You need to enter Some amount for Withdrawl");
            return
        }
        else if(atm_machine.totalAmount == 0){
            printError("Ask Bank to Add some Amount in the ATM as there is no cash");
            return;
        }
        checkWithdraw(amount);

    }

    function printError(error) {

        document.getElementById("currencyDenominations").innerHTML = "";
        document.getElementById("error").innerHTML = error;
        $("#amount").focus();
    }

    function countDenominations(amount) {

        var count_notes = new Init();

        var temp_amount = amount;

        count_notes.totalAmount = amount;

        for (var i = 0; i < count_notes.denominationsCount.length; i++) {

            count_notes.denominationsCount[i] = Math.floor(count_notes.totalAmount / count_notes.denominations[i]);
            count_notes.totalAmount -= count_notes.denominationsCount[i] * count_notes.denominations[i];
        }
        console.log(" dfbsdgsndgf" + count_notes.denominationsCount);

        /*
         finding the denominations that will be needed.
         */
        for (var j = 0; j < count_notes.denominationsCount.length; j++) {

            if (atm_machine.denominationsCount[j] < count_notes.denominationsCount[j]) {

                if (j == count_notes.denominationsCount.length - 1) {
                    printError("Combination isn't Availbale");
                    return;
                }
                else {
                    count_notes.denominationsCount[j + 1] += (count_notes.denominations[j] / count_notes.denominations[j + 1])
                        * (count_notes.denominationsCount[j] - atm_machine.denominationsCount[j]);
                    count_notes.denominationsCount[j] -= count_notes.denominationsCount[j] - atm_machine.denominationsCount[j] ;
                }
            }
        }

        console.log(" hello world" + count_notes.denominationsCount);

        count_notes.totalAmount = temp_amount;
        transactionManager(count_notes);
    }

    $("#btn1").on('click', function () {
        addMoney();

    });
    $("#btn2").on('click', function () {
        takeInput();

    });

});

