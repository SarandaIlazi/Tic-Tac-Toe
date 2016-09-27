		var butonat= document.getElementsByClassName("buttons");
		
		function newgame()
		{
		for(i=0;i< butonat.length;i++)
		{
		butonat[i].disabled= false;
		}
		for(i=0; i<butonat.length; i++)
		{
		butonat[i].style.backgroundColor="‪#‎CCCCCC‬";
		butonat[i].innerHTML = "-";
		butonat[i].style.color="black";
		}
		firstPlayerRound= true;
		document.getElementById("nextplayer").style.backgroundColor="‪#‎0000FF‬";
		document.getElementById("nextplayer").innerHTML="";

		}
		
		var firstPlayerRound=true;
		
		
		function nextMove(indeksi)
		{ 
		if(butonat[indeksi].innerHTML != "-")
		{
		return;}
		if(firstPlayerRound)
		{
		firstPlayerRound= false;
		document.getElementById("nextplayer").style.backgroundColor="red";
		butonat[indeksi].innerHTML = "X";
		butonat[indeksi].style.color = "blue";
		}
		else{
		firstPlayerRound= true;
		document.getElementById("nextplayer").style.backgroundColor="blue";
		butonat[indeksi].innerHTML = "O";
		butonat[indeksi].style.color = "red";
		}
		checkWinner();
		}
		
		
		function checkWinner()
		{ 
		checkTripel(butonat[0], butonat[1], butonat[2]);
		checkTripel(butonat[0], butonat[3], butonat[6]);
		checkTripel(butonat[1], butonat[4], butonat[7]);
		checkTripel(butonat[0], butonat[1], butonat[2]);
		checkTripel(butonat[2], butonat[5], butonat[8]);
		checkTripel(butonat[3], butonat[4], butonat[5]);
		checkTripel(butonat[6], butonat[7], butonat[8]);
		checkTripel(butonat[0], butonat[4], butonat[8]);
		checkTripel(butonat[2], butonat[4], butonat[6]);
		for(i=0; i<butonat.length; i++)
		{
		if(butonat[i].innerHTML == "-")
		return; 
		}
		alert("Baraz");
		}
		
		
		function checkTripel(buttonA , buttonB , buttonC) {
		if(buttonA.innerHTML != "-" 
		&& buttonA.innerHTML == buttonB.innerHTML 
		&& buttonA.innerHTML == buttonC.innerHTML)
		{ 
		printMsg();
		for(i=0;i< butonat.length;i++)
		{
		butonat[i].disabled= true;
		}
		}
		}
		
		
		function printMsg() {
		if(firstPlayerRound){
		document.getElementById("nextplayer").innerHTML="Player TWO wins the game!";
		}
		else{
		document.getElementById("nextplayer").innerHTML="Player ONE wins the game!";
		}
		document.getElementById("nextplayer").style.backgroundColor="#CCCCCC";
		}