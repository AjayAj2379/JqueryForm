$(document).ready(function () {

  
     
        $("#myform").validate({
       
            rules: {
                fName: {
                    required:true,
                    maxlength: 50,
                },

                lName:{
                    required: true,
                    maxlength: 50,
                },
                address1: {
                    required: true,
                    maxlength: 150,
                },

                mobile: {
                    required: true,
                    number:true,
                    maxlength:10
                },
                age: "required",
                country: "required",
                state: "required",
                city: "required",
                gender: "required",
                
                comments: {

                    maxlength: 1000
                }
               
                
            },

            messages: {

                fName: {
                    required:"<div class=text-danger>Please enter a first Name</div>",
                        
                    maxlength: "<div class=text-danger>Enter only 50 chrs</div>"
                },
                    lName:{
                        required: "<div class=text-danger>Please enter a last Name</div>",
                        maxlength: "<div class=text-danger>Enter only 50 chrs</div>"
                    },

                    address1: {
                        required: "<div class=text-danger>Please enter a address</div>",
                        maxlength: "<div class=text-danger>Enter only 150 chrs</div>"

                    },

                    mobile: {
                        required: "<div class=text-danger>Please enter a mobile number</div>",
                        number:"<div class=text-danger>Please enter only number</div>",
                        maxlength: "<div class=text-danger>Enter only 10 chrs</div>"
                    },

                country:{
                    required: "<div class=text-danger>Please choose a country</div>"
                },
                age:{
                    required: "<div class=text-danger>Please select Age</div>"
                },

                city: {
                    required: "<div class=text-danger>Please choose a city</div>"
                },

                state: {
                    required: "<div class=text-danger>Please choose a state</div>"
                },
                comments: {
                    maxlength: "<div class=text-danger>Enter only 1000 chrs</div>"
                },
                gender:{
                    required: "<div class=text-danger>Please choose a gender</div>"
                  
                }
                

            },
           



        });

        $("#submit").click(function () {

       
            $("#myform").valid()

        });

    });
    
