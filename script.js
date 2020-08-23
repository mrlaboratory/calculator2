var disnumb = $('#display-section');

function insertnumber(number){
	var alredynum = disnumb.val();
	disnumb.val(alredynum + number)
}
function clearDisplay(){
	disnumb.val('')
	
}
function calculate(){
var result = eval(disnumb.val())
	disnumb.val(result)	
}
function delatenumber(){
	var numberss = disnumb.val()
	if(disnumb.val() != ""){
	disnumb.val(disnumb.val().slice(0,-1))			
	}		
}

var mrlab = "<a href='https://www.mrlaboratory.com'  target='_blank'>MR Laboratory</a>";
var mijan = "<a href='https://www.facebook.com/mdmijanurrahaman.mr' target='_blank'>Md Mijanur Rahaman</a>";
var calccredit ="Powered by "+mrlab+"   Developed by "+mijan;
$('#calculatorcredit').html(calccredit)
$('#calculatorcredit').addClass('clcstyle1')
