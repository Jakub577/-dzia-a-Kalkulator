
function sum() {
    console.log(234) 


  }

  function getInput1(wartosc){
   console.log(wartosc);
  }
  
  function wymik2 (num){
    console.log(num);
   }
  const wymil =document.getElementById("wynik")

  function wymik1(num){
      let inp = document.getElementsByClassName("inpucik")[0].value
      inp += num
      document.getElementsByClassName("inpucik")[0].value =inp
  }
  function getsum() {
      let inp = document.getElementsByClassName('inpucik')[0].value
      document.getElementsByClassName('inpucik')[0].value = eval(inp)
  }