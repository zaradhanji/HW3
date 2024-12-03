/*
Program name: scripts.js
Author: Zara Yasmin Dhanji
Date created: Sep 19th 2024
Date last edited: Nov 8th 2024
Version: 3.0
Description: JS file for Homework 3 for MIS3371.
*/

//Function to Display value of Slider
var slider = document.getElementById("myrange")
var output = document.getElementById("value")
output.innerHTML = slider.value;
slider.oninput = function(){
    output.innerHTML = this.value
}

//Function to check that the two passwords match
function matchPassword() {  
    
  var pw1 = document.getElementById("password1");  
  var pw2 = document.getElementById("password2");  
  
  var checkpw1 = pw1.value
  var checkpw2 = pw2.value
  
  if(checkpw1 != checkpw2)  
  {   
    alert("Passwords did not match");  
  }
  
    
}  

//Function to Copy the Data from the iput fields and display to the user
//Trigerred on click of the Review Data button 
function CopyData() {  
  var vfname = document.getElementById("firstname");  
  var vmname = document.getElementById("midinit"); 
  var vlname = document.getElementById("lastname"); 

  var vfullname = document.getElementById("fullname");
  vfullname.innerHTML = vfname.value + " " + vmname.value + " "  + vlname.value

  var vssn = document.getElementById("ssn"); 
  var vssn2 = document.getElementById("ssn2"); 
  vssn2.innerHTML  = vssn.value

  var vdob = document.getElementById("dob"); 
  var vdob2 = document.getElementById("dob2"); 
  vdob2.innerHTML = vdob.value

  var vgenderM = document.getElementById("genderM"); 
  var vgenderF = document.getElementById("genderF");
  var vgenderO = document.getElementById("genderO");

  var vgender2 = document.getElementById("gender2"); 

  if (vgenderM.checked)
  {
  vgender2.innerHTML = vgenderM.value
  } else if (vgenderF.checked)
  {
  vgender2.innerHTML = vgenderF.value  
  }
  else
  { vgender2.innerHTML = vgenderO.value  }


  var vadd1 = document.getElementById("addr1"); 
  var vadd12 = document.getElementById("addr12"); 
  vadd12.innerHTML = vadd1.value

  var vadd2 = document.getElementById("addr2"); 
  var vadd22 = document.getElementById("addr22"); 
  vadd22.innerHTML = vadd2.value

  var vcity = document.getElementById("city"); 
  var vstate = document.getElementById("state"); 
  var vzip = document.getElementById("zipcode"); 
  var vaddr3 = document.getElementById("addr3"); 
  vaddr3.innerHTML = vcity.value + ", " + vstate.value + ", "  + vzip.value

  var vphone = document.getElementById("phonenbr"); 
  var vphone2 = document.getElementById("phonenbr2"); 
  vphone2.innerHTML = vphone.value

  var vemail = document.getElementById("emailaddr"); 
  var vemail2 = document.getElementById("emailaddr2"); 
  vemail2.innerHTML = vemail.value

  var vsym = document.getElementById("desc"); 
  var vsym2 = document.getElementById("desc2"); 
  vsym2.innerHTML = vsym.value

  var vchic = document.getElementById("chickenpox"); 
  var vmeas = document.getElementById("measles"); 
  var vcovid = document.getElementById("covid"); 
  var vsmall = document.getElementById("smallpox"); 
  var vtet = document.getElementById("tetanus"); 
  var vdiseasesfull = ""

  if (vchic.checked == true){ vdiseasesfull = vdiseasesfull + " Chicken Pox -"; } 
  if (vmeas.checked == true){ vdiseasesfull = vdiseasesfull + " Measles -"; }
  if (vcovid.checked == true){ vdiseasesfull = vdiseasesfull + " COVID -"; }
  if (vsmall.checked == true){ vdiseasesfull = vdiseasesfull + " Small Pox -"; }
  if (vtet.checked == true){ vdiseasesfull = vdiseasesfull + "Tetanus"; }

  var vdiseases = document.getElementById("diseases"); 
  vdiseases.innerHTML = vdiseasesfull
  
  var vFluY = document.getElementById("FluY"); 
  var vFluN = document.getElementById("FluN"); 
  var vFlu = document.getElementById("Flu"); 
  if (vFluY.checked)
  {
  vFlu.innerHTML = vFluY.value
  } 
  else
  { vFlu.innerHTML = vFluN.value }

  var vCOVY = document.getElementById("CovidVacY"); 
  var vCOVN = document.getElementById("CovidVacN"); 
  var vCOV = document.getElementById("CovidVac"); 
  if (vCOVY.checked)
  {
  vCOV.innerHTML = vCOVY.value
  } 
  else
  { vCOV.innerHTML = vCOVN.value }

  var vinsY = document.getElementById("InsY"); 
  var vinsN = document.getElementById("InsN"); 
  var vins = document.getElementById("Ins"); 

  if (vinsY.checked)
  {
  vins.innerHTML = vinsY.value
  } 
  else
  { vins.innerHTML = vinsN.value }

  var vvalue = document.getElementById("myrange"); 
  var vvalue2 = document.getElementById("health"); 
  vvalue2.innerHTML = vvalue.value

  var vuserid = document.getElementById("userid"); 
  var vuserid2 = document.getElementById("userid2"); 
  vuserid2.innerHTML = vuserid.value

  var vpass1 = document.getElementById("password1"); 
  var vpass11 = document.getElementById("pass1"); 
  vpass11.innerHTML = vpass1.value

  var vpass2 = document.getElementById("password2"); 
  var vpass22 = document.getElementById("pass2"); 
  vpass22.innerHTML = vpass2.value
  
}  

//Validate Field : First Name
function validateFName()
{
  var fname =  document.getElementById("firstname").value; 
  
  if (fname.length < 1)
    {
    document.getElementById("fullname").innerHTML = "Please enter a value for field : First Name";  
    ErrorsExist = "Y"; 
    }
    else if ( fname.length < 2 || fname.length > 30)
    { 
    document.getElementById("fullname").innerHTML = "Please enter between 2 and 30 chars for field: First Name";  
    ErrorsExist = "Y"; 
    }
    else if ((fname.match(/[a-zA-Z3-5'-]+$/)) )
    {
    document.getElementById("fullname").innerHTML = "";
    }
    else
    {
    document.getElementById("fullname").innerHTML = "Please enter valid characters for field : First Name";
        ErrorsExist = "Y";
    }      
}

//Validate Field : Middle Name
function validateMName()
{
  var mname =  document.getElementById("midinit").value;  
  if (mname.length > 0 )
    {
      if (mname.match(/[a-zA-Z ]/)) 
      {
        document.getElementById("miname").innerHTML = "";  
      }
      else 
      {
      document.getElementById("miname").innerHTML = "Please enter valid characters for field : Middle Initial";
      ErrorsExist = "Y";
      }
    }     
}

//Validate Field : Last Name
function validateLName()
{
  var lname =  document.getElementById("lastname").value; 
  
  if (lname.length < 1)
    {
    document.getElementById("lasname").innerHTML = "Please enter a value for field : Last Name";  
    ErrorsExist = "Y"; 
    }
    else if ( lname.length < 2 || lname.length > 30)
    { 
    document.getElementById("lasname").innerHTML = "Please enter between 2 and 30 chars for field: Last Name";  
    ErrorsExist = "Y"; 
    }
    else if ((lname.match(/[a-zA-Z3-5'-]+$/)) )
    {
    document.getElementById("lasname").innerHTML = "";
    }
    else
    {
    document.getElementById("lasname").innerHTML = "Please enter valid characters for field : Last Name";
        ErrorsExist = "Y";
    }
        
}


//Validate Field: Date of Birth
function validateDate()
{
var mydate
var mynewdate

var maxDate =new Date();
maxDate.setDate(maxDate.getDate() + 1);
mydate = document.getElementById("dob").value;
mynewdate = new Date(mydate);

var minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 120);

if (mydate == null || mydate == "" )
{
 document.getElementById("dob2").innerHTML = "Please enter a value in field : Date of Birth";  
  ErrorsExist = "Y"; 
}


if (mynewdate < minDate)
{
  document.getElementById("dob2").innerHTML = "Value is incorrect in field :Date of Birth";  
  ErrorsExist = "Y";
}
else if (mynewdate >= maxDate)
{
document.getElementById("dob2").innerHTML = "Value is greater than today in field :Date of Birth";  
  ErrorsExist = "Y";
}




}


//Validate Field: Address
function validateAdd1() {
    var myaddr1
    myaddr1 = document.getElementById("addr1").value;
    
    if (myaddr1.length < 2)  
    {  
    document.getElementById("addr12").innerHTML = "Enter something on field :Address";  
    ErrorsExist = "Y";
    }
    else if  (myaddr1.length > 30)
    {
    document.getElementById("addr12").innerHTML = "Please enter less than 30 characters in field: Address";
    ErrorsExist = "Y";
    }
    else
    { 
    document.getElementById("addr12").innerHTML = "";  
    }
    
}

//Validate Field: Address2
function validateAdd2() 
{
    var myaddr2
    myaddr2 = document.getElementById("addr2").value;
    
    if (myaddr2.length < 2)  
    {  
        if (myaddr2.length == 1)  
        {
          document.getElementById("addr22").innerHTML = "Enter something on field :Address 2";  
          ErrorsExist = "Y";
        }   
    }
    else if  (myaddr2.length > 30)
    {
    document.getElementById("addr22").innerHTML = "Please enter less than 30 characters in field: Address 2";
    ErrorsExist = "Y";
    }
    else
    { 
    document.getElementById("addr22").innerHTML = "";  
    }
    
}

//Validate Field: City
function validateCity() 
{
    var mycity
    mycity = document.getElementById("city").value;
    
    if (mycity.length < 2)  
    {  
      document.getElementById("addr3").innerHTML = "Please enter a value in field : City";  
      ErrorsExist = "Y";
    }
    else if  (mycity.length > 30)
    {
    document.getElementById("addr3").innerHTML = "Please enter less than 30 characters in field: City";
    ErrorsExist = "Y";
    }
    else
    { 
    document.getElementById("addr3").innerHTML = "";  
    }
    
}

//Validate Email
function validateEmail()
{
const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
var myemail
myemail = document.getElementById("emailaddr").value;

if (emailRegex.test(myemail))
{

}
else
{
  document.getElementById("emailaddr2").innerHTML = "Please enter a valid value in Field: Email";
  ErrorsExist = "Y";
}

}


function validateSSN() 
{
  
  var myssn
  myssn = document.getElementById("ssn").value;


  if (myssn == null) 
  {
    document.getElementById("ssn2").innerHTML = "Please enter a valid value in Field: SSN";
    ErrorsExist = "Y";
  }
  else if (myssn.length<9)
 {
  document.getElementById("ssn2").innerHTML = "Please enter at least 9 chars in Field: SSN";
  ErrorsExist = "Y";
 }
 else if (myssn.length>9)
 {
  document.getElementById("ssn2").innerHTML = "Please enter only 9 chars in Field: SSN";
  ErrorsExist = "Y";
 }
 else if (isNaN(myssn))
 {
  document.getElementById("ssn2").innerHTML = "Please enter only numbers in Field: SSN"+ myssn;
  ErrorsExist = "Y";
 }
else
{
//myssn= myssn.substring(0,3)+'-'+myssn.substring(3,5)+'-'+myssn.substring(5,9);
myssn= myssn.substring(0,3)+myssn.substring(3,5)+myssn.substring(5,9);
document.getElementById("ssn2").innerHTML = ""
}
document.getElementById("ssn").value=myssn;

}

//Validate Field: State
function validateState()
{
  
  var myState = document.getElementById("state").value;
    
  if(myState == "") 
  { 
    document.getElementById("addr4").innerHTML = "Please select a value in field : State";  
    ErrorsExist = "Y";
  }
  else 
  {
    document.getElementById("addr4").innerHTML = ""; 
  }
}

//Validate Field: Zip
function validateZip()
{
  var myZip = document.getElementById("zipcode").value;
    
  if(myZip == "") 
  { 
    document.getElementById("addr5").innerHTML = "Please select a value in field : Zipcode";  
    ErrorsExist = "Y";
  }
  else if (isNaN(myZip))  {
    document.getElementById("addr5").innerHTML = "Please enter numeric valuyes in field : Zipcode";  
    ErrorsExist = "Y";
  } 
  else
  {
    document.getElementById("addr5").innerHTML = ""; 
  }
}

//Validate Field: User ID
function validateUserID() {
var myID = document.getElementById("userid").value;

  if (!myID) 
  {
    document.getElementById("userid2").innerHTML = "Please select a value in field : UserID";
    ErrorsExist = "Y";
  }

  if (!/^[a-zA-Z0-9_]+$/.test(myID)) 
  {
    document.getElementById("userid2").innerHTML = "Please select alphanumeric or underscores in field : UserID";
    ErrorsExist = "Y";
  }

  if (myID.length < 5 || myID.length > 20) 
  {
    document.getElementById("userid2").innerHTML = "Please enter 5-20 chars in field : UserID";
    ErrorsExist = "Y";
  }

  var myidstart = myID.substring(0,1)
 
  if (isNaN(myidstart))
  {   
  }
  else
  {
  document.getElementById("userid2").innerHTML = "UserID cannot start with a number";
  ErrorsExist = "Y";
  }

}

function validatePassword()
{
var myPass = document.getElementById("password1").value;

if(myPass.search(/[a-z]/) < 0 )
 {
      document.getElementById("pass1").innerHTML ="The password needs at least 1 lower case letter";
      ErrorsExist = "Y";
 } 

if(myPass.search(/[A-Z]/)< 0) 
 {  
      document.getElementById("pass1").innerHTML ="The password needs at least 1 upper case letter";
      ErrorsExist = "Y";
    }

if(myPass.search(/[0-9]/)<0 )
 {   
    document.getElementById("pass1").innerHTML ="The password needs at least 1 number";
      ErrorsExist = "Y";
    }


if(myPass.length < 8) 
{
      document.getElementById("pass1").innerHTML ="The password should be at least 8 chars long";
      ErrorsExist = "Y";
  } 

var myID2 = document.getElementById("userid").value;
if (myPass == myID2)
{
  document.getElementById("pass1").innerHTML ="The password cannot be the same as UserID";
      ErrorsExist = "Y";
}




}



//Validates the Data entered and controls the enable/disable of the Submit button
function ValidateData() 
  {
   ErrorsExist = "N";
  
   validateFName();

   validateMName();
   
   validateLName();
   
   validateSSN();  

   validateDate();
   
   validateDate();
   
   validateAdd1();
   
   validateAdd2();
   
   validateCity();
   
   validateState();
   
   validateZip();
   
   validateEmail(); 
   
   validateUserID();
   
   validatePassword();
   
   //matchPassword();
           
   if (ErrorsExist == "Y")
   {
     alert("Please correct any errors in the data entered");
   }
   else 
   { 
    document.getElementById("Submit").disabled = false;  
   }
  
  } 

