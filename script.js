Lowers=''
Uppers=''
Specials=''
Numbers=''
randoms=''
ready=''
final=''
numLegth=''



var generate = document.querySelector("#generate");

function createPassword() {
  var passwordBox = document.querySelector('#password');
  passwordBox.value = final;
}

generate.addEventListener('click', function() {
  inputNum= prompt('Please enter a number between 8-128 to decide how many characters your password will have.')
  if (inputNum>=8 && inputNum<=128) {
    numLegth= inputNum
    chars()
    if (password()=='None'){
      return alert('Please incorporate one of the criterias for the password to be made.')
    } else{
      loop()
      createPassword()
    }}
  else 
  alert('Please enter a number between 8-128')
  
});


function chars() {
  randoms=''
  true1=prompt("Would you like to add lowercase letters?(Yes or No)")
  got1=true1.toUpperCase()
  Lowers=(got1==="YES")

  true2=prompt("Would you like to add uppercase letters? (Yes or No) ")
  got2=true2.toUpperCase()
  Uppers=(got2==="YES")
    
  true3=prompt("Would you like to add special characters?(Yes or No)")
  got3=true3.toUpperCase()
  Specials=(got3==="YES")
    
  true4=prompt("Would you like to add numbers? (Yes or No)")
  got4=true4.toUpperCase()
  Numbers=(got4==="YES")

  if(Uppers===true){
    randoms+="U"
  }
  if(Lowers===true){
    randoms+="L"
  }
  if(Numbers===true){
    randoms+="N"
  }
  if(Specials===true){
    randoms+="S"
  }
  //after grading see if i can come back and make this simpler 
};

function password() {
  ready=''
  criteria=randoms.length
  if(criteria==0){
    return "None"
  }
  ready=randoms.charAt(Math.random()*criteria)
  if (ready=="L"){
    final+=pLower()
  }
  if (ready=="U"){
    final+=pUpper()
  }
  if (ready=="N"){
    final+=pNumber()
  }
  if (ready=="S"){
    final+=pSpecial()
  }
  return final
}

function loop(){
  final=''
  for (var i = 0; i < numLegth; i++){
    password()
  }
}
function pLower() {
  lower = 'abcdefghijklmnopqrstuvwxyz';
  val = '';
  val+= lower[Math.floor(Math.random() * lower.length)]
  return val;
};
function pUpper() {
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  val = '';
  val+= upper[Math.floor(Math.random() * upper.length)]
  return val;
};
function pNumber() {
  number = '0123456789';
  val = '';
  val+= number[Math.floor(Math.random() * number.length)]
  return val;
};
function pSpecial() {
  special = '!@#$%^&*()_+{}[]/?><~';
  val = '';
  val+= special[Math.floor(Math.random() * special.length)]
  return val;
};

  