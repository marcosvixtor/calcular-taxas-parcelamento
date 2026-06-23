function calcular() {
  let x = document.forms["calc"]["vt"].value;
  let vt = parseFloat(document.getElementById('vt').value, 10);
  let tx = parseFloat(document.getElementById('tx').value, 10);
  
  if(tx){
    var taxa = x * tx / 100;
  } else{
    var taxa = x * 2.99 / 100;
  }
  
  var pix = x * 5 / 100;
  
  document.getElementById('pix').innerHTML = "R$" + Math.round(x - pix, 2);
  document.getElementById('1x').innerHTML = "R$" + (x * 1);
  document.getElementById('2x').innerHTML = "R$" + Math.round(x / 2 + taxa);
  document.getElementById('3x').innerHTML = "R$" + Math.round(x / 3 + taxa);
  document.getElementById('4x').innerHTML = "R$" + Math.round(x / 4 + taxa);
  document.getElementById('5x').innerHTML = "R$" + Math.round(x / 5 + taxa);
  document.getElementById('6x').innerHTML = "R$" + Math.round(x / 6 + taxa);

}
