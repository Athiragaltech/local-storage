// var arr=[]
// function add()
// {
//     var data=document.getElementById("result").value;
//     arr.push(data)
//     localStorage.setItem("name",JSON.stringify(arr))
//     var a=JSON.parse(data)
//     console.log(data)
// }


list=document.getElementById("lis")
var arr=[]
function add(){
    var data=document.getElementById("result").value
    arr.push(data)
    localStorage.setItem("myplanner",JSON.stringify(arr))
    var l=document.createElement("li")
    var b=document.createElement("button")
    b.innerHTML = "Delete";
    b.className='button';
    b.onclick=function () 
    {
        my=JSON.parse(localStorage.getItem("myplanner"));           
        var index = my.indexOf(data);
        my.splice(index, 1);
        localStorage.setItem('myplanner',JSON.stringify(my))
        l.remove();  
    };
    for(var i=0;i<arr.length;i++)
    {
        l.innerHTML=arr[i]
        l.append(b)
        list.append(l)
    }
}


