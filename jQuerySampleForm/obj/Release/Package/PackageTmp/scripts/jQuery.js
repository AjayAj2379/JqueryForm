/// <reference path="country.js" />
/// <reference path="country.js" />
/// <reference path="country.js" />

$(document).ready(function () {
   

    var fName="";
    var lName = "";
    var gender;
    // Ajax Call for age
    $.getJSON('/Registration/Age', function (data) {
        var ageLimit;
       // console.log("ready")
        $.each(data, function (i, age) {

            ageLimit += "<option value=" + age + ">" + age + "<br>";
        });
        $("#agefactor").after(ageLimit);

      
    });

    // Country call

    $.getJSON('../scripts/country.js', function (countrylist) {
        var countries;
      // console.log("ajay")
        $.each(countrylist, function (i, country) {

            countries += "<option value=" + country.code + ">" +country.name+ "<br>"
        });
       
       
        $("#country").after(countries);

    });

    // state

    $("#countrylist").change(function () {
       // console.log($("#countrylist").val())
        if ($("#countrylist").val() == "IN") {
           // console.log("if");
            $.getJSON('../scripts/IndianStates.js', function (statelist) {
                var states;

                $.each(statelist, function (i, state) {

                    states += "<option value=" + state.code + ">" + state.name + "<br>"
                });

                $("#statelist").html(states);
                $("#statelist").prepend("<option value='none' selected disabled>None</option>")

            });
        }
        else {
          //  console.log("else");
            alert("Choose India ");
            $("#statelist").html("<option id=\"state\" selected disabled>None</option>");
        }
    });

    //city
    $("#statelist").change(function () {
       
        
            var state = $("#statelist").val();
            if ($("#statelist").val() == "PY" || $("#statelist").val() == "TN") {
                var selectCity;
                $.getJSON('../scripts/cities.js', function (citylist) {
                    
                    var city;

                  //  console.log(citylist)

                    $.each(citylist, function (i, cities) {

                        if (state == cities.state) {

                            selectCity = citylist[i];
                        }


                    });
                  //  console.log("sc=" + selectCity)

                    $.each(selectCity, function (i) {
                      
                        
                        if (i == "districts") {

                            $.each(selectCity[i], function (j, value) {

                                
                             city += "<option value=" + j + ">" + value + "<br>"

                            });
                        }


                    });
                    //console.log(city)


                    $("#citylist").html(city);
                    $("#citylist").prepend("<option value='none' selected disabled>None</option>")
                  

                });
            }

            else {
                alert("Choose TamilNadu or Puducherry")
                $("#citylist").html("<option id=\"city\" selected disabled>None</option>");
            }
        
    });

    // OnSubmit
    $("#submit").click(function () {
        var registrationForm={
            firstName : $("#fName").val(),
        lastName : $("#lName").val(),
        age : $("#age option:selected").val(),
        gender : $("#gender option:selected").val(),
        date : $("#date").val(),
        address1 : $("#address1").val(),
        address2 : $("#address2").val(),
        country : $("#countrylist option:selected").text(),
        state : $("#statelist option:selected").text(),
        city : $("#citylist option:selected").text(),
        mobileNumber : $("#mobile").val(),
        relocation : $("input[name='relocationRadio']:checked").val(),
        comments: $("#comments").val()

        }

       
        if ($('#checkbox').is(":checked"))
        {
            $("#check").html("<div></div>")



            if ($("#myform").valid()) {
                $.ajax({

                    type: 'POST',
                    url: '/Registration/Submit',
                    data: { "registrationForm": registrationForm },
                    success: function () {
                        console.log("Success");
                        alert("Open the console and see the results");
                        console.log(registrationForm);
                       // window.location = "/Registration/Submit";

                    },
                    failure: () => { console.log("failed") }

                });
            }
        }
        else {
            $("#check").html("<div class=text-danger>Please accept our policy</div>")
        }

    });
    
    // OnColorchangeButton

    $("#changecolor").click(function () {
       
        $(".jumbotron").toggleClass("color");
        
          
    });

    //Gender
        $("#fName").on('input',function () {
            fName = $("#fName").val();
           
            salutation();
        });

        $("#lName").on('input',function () {
            lName = $("#lName").val();
          
            salutation();
        });

        $("#gender").change(function () {
            gender = $("#gender option:selected").val();
           
            salutation();
     });

        function salutation()
        {
           
            if (fName.length == 0 || lName.length == 0)
            {
                $("#salutation").html("<div><center><strong>Hi User</strong></center></div>");
            }
            if(gender=="Male" && fName.length!=0 && lName.length!=0)
            {
                $("#salutation").html("<div><center><strong>Hi Mr." + fName + " " + lName+"</strong></center></div>");
            }
            else if (gender == "Female" && fName.length != 0 && lName.length != 0)
            {
                $("#salutation").html("<div><center><strong>Hi Ms." + fName + " " + lName+"</strong></center></div>");
            }
        
        }


  
});