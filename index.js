function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting
  if (feet <= 400){
    return greeting = "This one is on me!"
  } else if (feet >= 400 && feet <=2000){
    return greeting = "That will be twenty bucks."
  } else if (feet >=2001 && feet < 2500){
    return greeting = "I will gladly take your thirty bucks."
  } else if (feet >= 2500){
    return greeting = "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let greeting
  city == "NYC" ? greeting = "Ok, sounds good." : greeting =  "No go."
  return greeting
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let greeting
  switch (tip) {
    case "generous":
      greeting ="Thank you so much."
    break;
    case "not as generous":
      greeting = "Thank you."
    break;
    default:
      greeting = "Bye."
  }
  return greeting
}