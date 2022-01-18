let correctoutput = document.getElementById("correctoutput");
  function display(num){
      correctoutput.value += num;
  }
  function calculate(){
      try{
          correctoutput.value = eval(correctoutput.value);
      }
      catch(err){
         alert("can't be found");
      }
}
function AllClear(){
    correctoutput.value = "";
}