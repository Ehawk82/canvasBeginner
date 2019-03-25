var myUI = {
	init: () => {
		myUI.loadout();
	},
	loadout: () => {
		var dH = createEle("div");

        dH.className = "divHolder";

        myUI.generateCVframe(dH);

		dvContain.append(dH);
	},
	generateCVframe: (dH) => {
		var canvas = createEle("canvas"),        
            context = canvas.getContext('2d');
        
        canvas.width = 500;
        canvas.height = 500;

        context.beginPath();
        context.strokeStyle = "#FF0000";
		context.moveTo(0, 0);
		context.lineWidth = 10;
		context.lineTo(510, 240);
		context.stroke();

        context.beginPath();
        context.strokeStyle = "#0000FF";
		context.moveTo(510, 240);
		context.lineWidth = 10;
		context.lineTo(0, 500);
		context.stroke();
        
        context.fillStyle = 'yellow';
        context.fillRect(50, 50, 200, 100);
        
        context.fillStyle = 'green';
        context.font = 'italic 40pt Calibri, sans-serif';
context.fillText('Hello World!', 50, 450);

        dH.append(canvas);
	}
}
window.onload = () => {
    myUI.init();
};