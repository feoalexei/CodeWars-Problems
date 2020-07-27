// 25 ////////// Simple fraction to mixed number converter //////////

function mixedFraction(s){
  const arr = s.split('/');
  const int = Math.floor(arr[0] / arr[1]);
  let nom = arr[0] % arr[1];
  denom = arr[1];
  let diff =  denom - nom;

  while (nom / diff > 1 && denom / diff > 1) {
    nom = nom / diff;
    denom = denom / diff;
  }

  // if (int) {
  //   nom ? `${int} ${nom}/${denom}` : `${int}`
  // }

 
  return `${int} ${nom}/${denom}`
  // return int && nom 
  //   ? `${int} ${nom}/${denom}`
  //   :  int ? `${int}` : `${nom}/${denom}`
}

console.log(mixedFraction('42/9'));
