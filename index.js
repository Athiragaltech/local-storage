// var arr=[]
// function add()
// {
//     var data=document.getElementById("text1").value
//     arr.push(data)
//     localStorage.setItem("name",JSON.stringify(arr))
// }
function add()
{
    var data=document.getElementById("text1").value
    console.log(data)
    localStorage.setItem("name",data)
}
function read()
{
    var data1=localStorage.getItem("name");
    document.getElementById("result").innerHTML=data1;
   
}
function del()
{
    var data=document.getElementById("text1").value
    console.log(data)
    localStorage.removeItem("name",data)
   document.getElementById("result").innerHTML=""
}
