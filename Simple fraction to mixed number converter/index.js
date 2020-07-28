// 25 ////////// Simple fraction to mixed number converter //////////

function mixedFraction(s){
  const arr = s.split('/').map(e => Math.abs(e));
  const int = Math.floor(arr[0] / arr[1]);
  let nom = arr[0] % arr[1];
  denom = arr[1];
  let diff =  denom - nom;

  while (nom / diff > 1 && denom / diff > 1) {
    nom = nom / diff;
    denom = denom / diff;
  }

  console.log(s.match(/-/g).length);
  if(+arr[0]) {
    return int && nom 
      ? `${int} ${nom}/${denom}`
      :  int ? `${int}` : `${nom}/${denom}`
  } else return '0'
}

console.log(mixedFraction('-42/-9'));
