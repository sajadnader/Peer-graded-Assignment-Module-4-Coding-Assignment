 
( function a()
{
	var name = prompt("type your name:")
	for ( var i = 0; i<name.length;i++)
		var a1 = name[i].charAt(0);
	if(a1.toLocaleLowerCase( )== "J" && a1.toLocaleLowerCase()=="j"){
		document.write("goodbye"+ name)
		}
	else{
		document.write("Hello"+ name)
	}
}

)