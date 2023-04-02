$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    // form validation 
    function formValidation() {
        //assign the fields

        var  fname = document.getElementById('name');
        var email = document.getElementById('email');
        var project = document.getElementById('project');
        var message = document.getElementById('message');
        if (emailValidator(email, "check your E-mail format")) {
            if (lengthRestriction(fname, 5, 25, "for your full name")) {
                if (lengthRestriction(message, 3, 100, "for your comment")) {


                    return true;
                }
            }
        }
        return false;

    }

    function isAlphabet(elem, helperMsg) {
        var alphaExp = /^[a-zA-Z]+$/;
        if (elem.value.match(alphaExp)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    function emailValidator(elem, helperMsg) {
        var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (elem.value.match(emailExp)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    function isNumeric(elem, helperMsg) {
        var numericExpression = /^[0-9]+$/;
        if (elem.value.match(numericExpression)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    function lengthRestriction(elem, min, max, helperMsg) {
        var uInput = elem.value;
        if (uInput.length >= min && uInput.length <= max) {
            return true;
        } else {
            alert("Please enter between " + min + " and " + max + " characters" + helperMsg);
            elem.focus();
            return false;
        }
    }

    function isAlphanumeric(elem, helperMsg) {
        var alphaExp = /^[0-9a-zA-Z]+$/;
        if (elem.value.match(alphaExp)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    function isAlphabet(elem, helperMsg) {
        var alphaExp = /^[a-zA-Z]+$/;
        if (elem.value.match(alphaExp)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    $(window).on('scroll load', function(){

        $('#menu').removeleClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });

    // make smooth scrolling
        $('a[href*="#"]').on('click', function(e){

            e.preventDefault();

            $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top, 
            }, 
                500,
                'linear'
            );

        });

});