


function findMatching (drivers, string) {
      return drivers.filter(match => match.toLowerCase() == string.toLowerCase())
  
}


function fuzzyMatch (drivers, string) {
  return drivers.filter(function (match) {
    let slicedComp = match.slice(0,2);
    if (slicedComp == string)
    {
      return match;
    }
  })

}

function matchName (drivers, string) {
  return drivers.filter(match => match.name == string)

}