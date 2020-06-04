function insert(num)
{
	document.getElementById("in").value=document.getElementById("in").value+num;
}
function c()
{
	document.getElementById("in").value="";
}
function d()
{
	var array=[];
	array=document.getElementById("in").value.split("");
     array.pop();
	document.getElementById("in").value=array.join("");
}
function equal()
{
	let exp=document.getElementById("in").value;
	if(exp)
	document.getElementById("in").value=eval(exp);
}

// function back()
// {
// 	let exp=document.getElementById("in").value;
// 	document.getElementById("in").value=exp.subString()

// }
