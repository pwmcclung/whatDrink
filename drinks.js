function getDrinkByProfession(param){
  let param1 = param.toLowerCase()
  if (param1 === 'jabroni'){
    return 'Patron Tequila'
  } else if (param1 === 'school counselor'){
    return 'Anything with Alcohol'
  } else if (param1 === 'programmer'){
    return 'Hipster Craft Beer'
  }else if (param1 === 'bike gang member'){
    return 'Moonshine'
  } else if (param1 === 'politician'){
    return 'Your tax dollars'
  } else if(param1 === 'rapper'){
    return 'Cristal'
  }else{
    return 'Beer'
  }
