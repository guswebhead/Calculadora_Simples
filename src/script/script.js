function insert(num){
    console.log(num)
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num
}

function clean(){
    document.getElementById('result').innerHTML = ""
}

function backspace(){
    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length - 1)
}

function calc(){
    let result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result)
    }else{
        document.getElementById('result').innerHTML = "insira os valores"
    }
}