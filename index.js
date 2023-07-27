function scuberGreetingForFeet(feet){
  
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
  
  let greeting
  city == "NYC" ? greeting = "Ok, sounds good." : greeting =  "No go."
  return greeting
}

// console.log(ternaryCheckCity("NYC")); /* Testing process */
// console.log(ternaryCheckCity("Pittsburgh")); /* Testing process */

function switchOnCharmFromTip(tip){
  
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

// console.log(switchOnCharmFromTip("generous")); /* Testing process */
// console.log(switchOnCharmFromTip("not as generous")); /* Testing process */
// console.log(switchOnCharmFromTip("thanks for everything")); /* Testing process */