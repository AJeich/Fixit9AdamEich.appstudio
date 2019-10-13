
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmitMembership.onclick=function(){
  members = inptFirstName.value
  if ((members == "Mary") || (members == "Sam") || (members == "Joey") || (members == "Paul") || (members == "Mike") || (members == "Char") || (members == "Jenny") || (members == "Kennedy") || (members == "Kaden") || (members == "Kurt") || (members == "Anne"))
    Label1.text = "You are a member"
    
else 
  Label1.text = "You are not a member"
  inptFirstName.value = " "
  }

  
  
  