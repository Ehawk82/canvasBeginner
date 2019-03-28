var myUI;

myUI = {
	init: () => {
		myUI.loadout();
	},
	loadout: () => {
		var dH = createEle("div");
		var dH2 = createEle("div");
		var dH3 = createEle("div");
        
        LSinit("clRect", true);

        dH.className = "divHolder";
        dH2.className = "divHolder2";
        dH3.className = "divHolder3";

        myUI.generateCVframe(dH);
        myUI.generateCVframe2(dH2);
        myUI.generateCVframe3(dH3);
        
		dvContain.append(dH);
		dvContain.append(dH2);
		dvContain.append(dH3);
	},
	generateCVframe: (dH) => {
		var canvas = createEle("canvas"),        
            context = canvas.getContext('2d'),
            rangeToolHolder = createEle("div"),
            togglesToolHolder = createEle("div"),
            labelAng1X = createEle("label"),
            labelAng1Y = createEle("label"),
            labelRcolor = createEle("label"),
            labelGcolor = createEle("label"),
            labelBcolor = createEle("label"),
            labelAcolor = createEle("label"),
            labelHeight = createEle("label"),
            labelWidth = createEle("label"),
            ang1xRange = createEle("input"),
            ang1yRange = createEle("input"),
            rColorRange = createEle("input"),
            gColorRange = createEle("input"),
            bColorRange = createEle("input"),
            aColorRange = createEle("input"),
            cWidthRange = createEle("input"),
            cHeightRange = createEle("input"),
            clearRectToggleLabel = createEle("label"),
            clearRectToggle = createEle("input"), clRect = loadLS("clRect");

        clearRectToggleLabel.innerHTML = "CLEAR";
        
        clearRectToggle.type = "checkbox";
        if (clRect === "false") {
        	clRect = false;
        } else {
        	clRect = true;
        }
        clearRectToggle.checked = clRect;
        //alert(clRect);
        clearRectToggle.onchange = myUI.toggleClearRectFunc(context, clearRectToggle);

        labelHeight.innerHTML = "HEIGHT";
        labelWidth.innerHTML = "WIDTH";
        
        cWidthRange.type = "range";
        cWidthRange.value = "200";
        cWidthRange.min = 1;
        cWidthRange.max = 398;
        cWidthRange.step = 0.1;
        cWidthRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        cHeightRange.type = "range";
        cHeightRange.value = "200";
        cHeightRange.min = 1;
        cHeightRange.max = 398;
        cHeightRange.step = 0.1;
        cHeightRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        labelAng1X.innerHTML = "X-AXIS";
        labelAng1Y.innerHTML = "Y-AXIS";
        labelRcolor.innerHTML = "RED";
        labelGcolor.innerHTML = "GREEN";
        labelBcolor.innerHTML = "BLUE";
        labelAcolor.innerHTML = "ALPHA";
      
        aColorRange.type = "range";
        aColorRange.value = "1";
        aColorRange.min = 0;
        aColorRange.max = 1;
        aColorRange.step = 0.01;
        aColorRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        bColorRange.type = "range";
        bColorRange.value = "0";
        bColorRange.min = 0;
        bColorRange.max = 255;
        bColorRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        gColorRange.type = "range";
        gColorRange.value = "0";
        gColorRange.min = 0;
        gColorRange.max = 255;
        gColorRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        rColorRange.type = "range";
        rColorRange.value = "0";
        rColorRange.min = 0;
        rColorRange.max = 255;
        rColorRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        ang1yRange.type = "range";
        ang1yRange.min = 1;
        ang1yRange.max = 399 - cHeightRange.value;
        ang1yRange.value = 100;
        ang1yRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);
        
        ang1xRange.type = "range";
        ang1xRange.min = 1;
        ang1xRange.max = 399 - cWidthRange.value;
        ang1xRange.value = 100;
        ang1xRange.onmousemove = myUI.updateContext(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange);

        canvas.width = 400;
        canvas.height = 400;
        
        context.fillStyle = 'rgba(' + rColorRange.value + ',' + gColorRange.value + ',' + bColorRange.value + ',' + aColorRange.value + ')';
        context.fillRect(ang1xRange.value, ang1yRange.value, cWidthRange.value, cHeightRange.value);

    	rangeToolHolder.className = "rangeToolHolder";
    	rangeToolHolder.append(labelAng1X);
    	rangeToolHolder.append(ang1xRange);
    	rangeToolHolder.append(labelAng1Y);
    	rangeToolHolder.append(ang1yRange);
    	rangeToolHolder.append(labelRcolor);
    	rangeToolHolder.append(rColorRange);
    	rangeToolHolder.append(labelGcolor);
    	rangeToolHolder.append(gColorRange);
    	rangeToolHolder.append(labelBcolor);
    	rangeToolHolder.append(bColorRange);
    	rangeToolHolder.append(labelAcolor);
    	rangeToolHolder.append(aColorRange);
    	rangeToolHolder.append(labelHeight);
    	rangeToolHolder.append(cHeightRange);
        rangeToolHolder.append(labelWidth);
    	rangeToolHolder.append(cWidthRange);

    	togglesToolHolder.append(clearRectToggleLabel);
    	togglesToolHolder.append(clearRectToggle);

        dH.append(canvas);
        dH.append(rangeToolHolder);
        dH.append(togglesToolHolder);
	},
	generateCVframe2: (dH2) => {
		var canvas = createEle("canvas"),        
            context = canvas.getContext('2d'),
            rangeToolHolder2 = createEle("div"),
            ang1xRange = createEle("input"), labelAng1X = createEle("label"),
            labelAng1Y = createEle("label"),
            ang1yRange = createEle("input"),
            ang2xRange = createEle("input"), labelAng2X = createEle("label"),
            labelAng2Y = createEle("label"),
            ang2yRange = createEle("input"),
            ang3xRange = createEle("input"), labelAng3X = createEle("label"),
            labelAng3Y = createEle("label"),
            ang3yRange = createEle("input");
            
            labelAng3X.innerHTML = "X-3";
            labelAng3Y.innerHTML = "Y-3";

            labelAng2X.innerHTML = "X-2";
            labelAng2Y.innerHTML = "Y-2";

            labelAng1X.innerHTML = "X-1";
            labelAng1Y.innerHTML = "Y-1";

            ang3yRange.type = "range";
    	    ang3yRange.min = 1;
        	ang3yRange.max = 399;
        	ang3yRange.value = 100;
        	ang3yRange.onmousemove = myUI.updateContext2(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange);
        
        	ang3xRange.type = "range";
        	ang3xRange.min = 1;
        	ang3xRange.max = 399;
        	ang3xRange.value = 150;
        	ang3xRange.onmousemove = myUI.updateContext2(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange);

            
            ang2yRange.type = "range";
    	    ang2yRange.min = 1;
        	ang2yRange.max = 399;
        	ang2yRange.value = 310;
        	ang2yRange.onmousemove = myUI.updateContext2(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange);
        
        	ang2xRange.type = "range";
        	ang2xRange.min = 1;
        	ang2xRange.max = 399;
        	ang2xRange.value = 53;
        	ang2xRange.onmousemove = myUI.updateContext2(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange);


            ang1yRange.type = "range";
    	    ang1yRange.min = 1;
        	ang1yRange.max = 399;
        	ang1yRange.value = 50;
        	ang1yRange.onmousemove = myUI.updateContext2(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange);
        
        	ang1xRange.type = "range";
        	ang1xRange.min = 1;
        	ang1xRange.max = 399;
        	ang1xRange.value = 50;
        	ang1xRange.onmousemove = myUI.updateContext2(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange);


            canvas.width = 400;
            canvas.height = 400;

            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(50,50);
            context.lineTo(150, 100); 
            context.stroke();

            context.beginPath();
            context.moveTo(50,50);
            context.lineTo(53, 310); 
            context.stroke();

            context.beginPath();
            context.moveTo(150,100);
            context.lineTo(53, 310); 
            context.stroke();
            
            context.beginPath();
            context.moveTo(50,50);
    		context.lineTo(150, 100);
    		context.fillStyle = "pink";
    		context.lineTo(53, 310);
    		context.fill();

            rangeToolHolder2.className = "rangeToolHolder2";
            rangeToolHolder2.append(labelAng1X);
            rangeToolHolder2.append(ang1xRange);
            rangeToolHolder2.append(labelAng1Y);
            rangeToolHolder2.append(ang1yRange);
            rangeToolHolder2.append(labelAng2X);
            rangeToolHolder2.append(ang2xRange);
            rangeToolHolder2.append(labelAng2Y);
            rangeToolHolder2.append(ang2yRange);
            rangeToolHolder2.append(labelAng3X);
            rangeToolHolder2.append(ang3xRange);
            rangeToolHolder2.append(labelAng3Y);
            rangeToolHolder2.append(ang3yRange);

            dH2.append(canvas);
            dH2.append(rangeToolHolder2);
	},
	generateCVframe3: (dH3) => {
		var canvas = createEle("canvas"),        
            context = canvas.getContext('2d'),
            rangeToolHolder3 = createEle("div"),
            ang1xRange = createEle("input"), labelAng1X = createEle("label"),
            labelAng1Y = createEle("label"),
            ang1yRange = createEle("input"),
            ang2xRange = createEle("input"), labelAng2X = createEle("label"),
            labelAng2Y = createEle("label"),
            ang2yRange = createEle("input"),
            ang3xRange = createEle("input"), labelAng3X = createEle("label"),
            labelAng3Y = createEle("label"),
            ang3yRange = createEle("input"),
            ang4xRange = createEle("input"), labelAng4X = createEle("label"),
            labelAng4Y = createEle("label"),
            ang4yRange = createEle("input");
            
            labelAng4X.innerHTML = "X-4";
            labelAng4Y.innerHTML = "Y-4";

            labelAng3X.innerHTML = "X-3";
            labelAng3Y.innerHTML = "Y-3";

            labelAng2X.innerHTML = "X-2";
            labelAng2Y.innerHTML = "Y-2";

            labelAng1X.innerHTML = "X-1";
            labelAng1Y.innerHTML = "Y-1";

            ang4yRange.type = "range";
    	    ang4yRange.min = 1;
        	ang4yRange.max = 399;
        	ang4yRange.value = 350;
        	ang4yRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);
        
        	ang4xRange.type = "range";
        	ang4xRange.min = 1;
        	ang4xRange.max = 399;
        	ang4xRange.value = 350;
        	ang4xRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);
            
            ang3yRange.type = "range";
    	    ang3yRange.min = 1;
        	ang3yRange.max = 399;
        	ang3yRange.value = 50;
        	ang3yRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);
        
        	ang3xRange.type = "range";
        	ang3xRange.min = 1;
        	ang3xRange.max = 399;
        	ang3xRange.value = 350;
        	ang3xRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);
            
            ang2yRange.type = "range";
    	    ang2yRange.min = 1;
        	ang2yRange.max = 399;
        	ang2yRange.value = 350;
        	ang2yRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);
        
        	ang2xRange.type = "range";
        	ang2xRange.min = 1;
        	ang2xRange.max = 399;
        	ang2xRange.value = 50;
        	ang2xRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);

            ang1yRange.type = "range";
    	    ang1yRange.min = 1;
        	ang1yRange.max = 399;
        	ang1yRange.value = 50;
        	ang1yRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);
        
        	ang1xRange.type = "range";
        	ang1xRange.min = 1;
        	ang1xRange.max = 399;
        	ang1xRange.value = 50;
        	ang1xRange.onmousemove = myUI.updateContext3(context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange);

            canvas.width = 400;
            canvas.height = 400;

            context.beginPath();
            context.moveTo(ang1xRange.value,ang1yRange.value);
            context.lineTo(ang2xRange.value,ang2yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang1xRange.value,ang1yRange.value);
            context.lineTo(ang3xRange.value,ang3yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang2xRange.value,ang2yRange.value);
            context.lineTo(ang4xRange.value,ang4yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang4xRange.value,ang4yRange.value);
            context.lineTo(ang3xRange.value,ang3yRange.value); 
            context.stroke();

            context.beginPath();
            context.fillStyle = "limegreen";
    		context.moveTo(ang1xRange.value,ang1yRange.value);
    		context.lineTo(ang2xRange.value,ang2yRange.value);
    		context.lineTo(ang4xRange.value,ang4yRange.value);
    		context.lineTo(ang3xRange.value,ang3yRange.value);
    		context.fill();

            rangeToolHolder3.className = "rangeToolHolder3";
            rangeToolHolder3.append(labelAng1X);
            rangeToolHolder3.append(ang1xRange);
            rangeToolHolder3.append(labelAng1Y);
            rangeToolHolder3.append(ang1yRange);
            rangeToolHolder3.append(labelAng2X);
            rangeToolHolder3.append(ang2xRange);
            rangeToolHolder3.append(labelAng2Y);
            rangeToolHolder3.append(ang2yRange);
            rangeToolHolder3.append(labelAng3X);
            rangeToolHolder3.append(ang3xRange);
            rangeToolHolder3.append(labelAng3Y);
            rangeToolHolder3.append(ang3yRange);
            rangeToolHolder3.append(labelAng4X);
            rangeToolHolder3.append(ang4xRange);
            rangeToolHolder3.append(labelAng4Y);
            rangeToolHolder3.append(ang4yRange);

            dH3.append(canvas);
            dH3.append(rangeToolHolder3);
	},
	updateContext: (context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange) => {
		return () => {
        	ang1xRange.max = 399 - cWidthRange.value;
        	ang1yRange.max = 399 - cHeightRange.value;

            var clRect = loadLS("clRect");
            if (clRect === "false") {

            } else {
				context.clearRect(0,0,400,400);
            }
            context.fillStyle = 'rgba(' + rColorRange.value + ',' + gColorRange.value + ',' + bColorRange.value + ',' + aColorRange.value + ')';
        	context.fillRect(ang1xRange.value, ang1yRange.value, cWidthRange.value, cHeightRange.value);
		}
	},
	updateContext2: (context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange) => {
		return () => {
        	ang1xRange.max = 399;
        	ang1yRange.max = 399;

		    context.clearRect(0,0,400,400);
            
            context.beginPath();
            context.moveTo(ang1xRange.value,ang1yRange.value);
            context.lineTo(ang2xRange.value,ang2yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang1xRange.value,ang1yRange.value);
            context.lineTo(ang3xRange.value,ang3yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang2xRange.value,ang2yRange.value);
            context.lineTo(ang3xRange.value,ang3yRange.value); 
            context.stroke();

            context.beginPath();
            context.fillStyle = "pink";
    		context.moveTo(ang1xRange.value,ang1yRange.value);
    		context.lineTo(ang2xRange.value,ang2yRange.value);
    		context.lineTo(ang3xRange.value,ang3yRange.value);
    		context.fill();
		}
	},
	updateContext3: (context, ang1xRange, ang1yRange, ang2xRange, ang2yRange, ang3xRange, ang3yRange, ang4xRange, ang4yRange) => {
		return () => {
        	ang1xRange.max = 399;
        	ang1yRange.max = 399;

		    context.clearRect(0,0,400,400);
            
            context.beginPath();
            context.moveTo(ang1xRange.value,ang1yRange.value);
            context.lineTo(ang2xRange.value,ang2yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang1xRange.value,ang1yRange.value);
            context.lineTo(ang3xRange.value,ang3yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang2xRange.value,ang2yRange.value);
            context.lineTo(ang4xRange.value,ang4yRange.value); 
            context.stroke();

            context.beginPath();
            context.moveTo(ang4xRange.value,ang4yRange.value);
            context.lineTo(ang3xRange.value,ang3yRange.value); 
            context.stroke();

            context.beginPath();
            context.fillStyle = "limegreen";
    		context.moveTo(ang1xRange.value,ang1yRange.value);
    		context.lineTo(ang2xRange.value,ang2yRange.value);
    		context.lineTo(ang4xRange.value,ang4yRange.value);
    		context.lineTo(ang3xRange.value,ang3yRange.value);
    		context.fill();

		}
	},
	toggleClearRectFunc: (context, clearRectToggle) => {
		return () => {
			localStorage.setItem("clRect", clearRectToggle.checked);
		}
	}
}
window.onload = () => {
    myUI.init();
};