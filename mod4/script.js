var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="swajan";
names[3]="eddie";
names[4]="walker";
names[5]="gabby";
names[6]="pagie";
names[7]="lara";
names[8]="allen";
names[9]="smoke fellicity";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
