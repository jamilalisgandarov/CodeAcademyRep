$myArray=[];
$myArray1=[];
$count=false;
$count1=true;
$ansver=0;
$('.reqem').click(function() {
		if ($(".store").val()=="0") {
		$(".store").val("");
		$(".store1").val("");
	}});
	$('.reqem').click(function() {
		$('.display').val($('.display').val()+$(this).text());
		$('.store').val($('.store').val()+$(this).text());
		$count=true;
		$count1=false;
	});

	$('.hesab').click(function() {
		if ($count==true) {
			if ($(this).text()=='x'){
				$('.store').val($('.store').val()+'*');
				$myArray1.push('*');
			}
			else {
				$('.store').val($('.store').val()+$(this).text());
				$myArray1.push($(this).text());
			}
		$myArray.push($('.display').val());
		$('.display').val('');
	}
		else if ($count1==true&&$count==false) {
			if ($(this).text()=='-') {
				$('.store').val($('.store').val()+$(this).text());
				$myArray1.push($(this).text());
				$count1=false;
			};
		};
		$count=false;
	});

	$(".delete").click(function() {
		$(".display").val("");
		$(".store").val('');
		$(".ansver").val('');
		$myArray=[];
		$myArray1=[];
		$ansver=0;
		$count=true;
	});
	$('.remove').click(function() {
		$disp=$(".display").val();
		$(".display").val($disp.substring(0,$disp.length-1));
		$('.store').val($disp.substring(0,$disp.length-1));
	});

	$('.price').click(function() {
		if ($ansver!==0) {
			$myArray.pop();}
		$myArray.push($('.display').val());
		for (var i =0; i<$myArray.length; i++) {
			if ($ansver==0) {

				if($myArray1[i]=='+'){
					$ansver=Number($myArray[i])+Number($myArray[i+1]);
				}
				else if($myArray1[i]=='-'){
					$ansver=Number($myArray[i])-Number($myArray[i+1]);
				}
				else if($myArray1[i]=='/'){
					$ansver=Number($myArray[i])/Number($myArray[i+1]);
				}
				else if($myArray1[i]=='*'){
					$ansver=Number($myArray[i])*Number($myArray[i+1]);
				}
				else if($myArray1[i]=='%'){
					$ansver=Number($myArray[i])*Number($myArray[i+1])/100;
				}	
			}

			else {

				if($myArray1[i]=='+'){
					$ansver=Number($ansver)+Number($myArray[i+1]);
				}
				else if($myArray1[i]=='-'){
					$ansver=Number($ansver)-Number($myArray[i+1]);
				}
				else if($myArray1[i]=='/'){
					$ansver=Number($ansver)/Number($myArray[i+1]);
				}
				else if($myArray1[i]=='*'){
					$ansver=Number($ansver)*Number($myArray[i+1]);
				}
				else if($myArray1[i]=='%'){
					$ansver=Number($ansver)*Number($myArray[i+1])/100;
				}
			}
		}
		$('.ansver').val($ansver);
		$(".display").val("");
		$(".store").val('');
		$myArray=[];
		$myArray1=[];
		$ansver=0;
		$count=false;

	});
