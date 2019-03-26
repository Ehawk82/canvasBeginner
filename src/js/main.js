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
            context = canvas.getContext('2d'),
            rangeToolHolder = createEle("div"),
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
            rotateFactorRange = createEle("input");
        
        rotateFactorRange.type = "range";
        rotateFactorRange.value = 0;
        rotateFactorRange.min = -170;
        cWidthRange.step = 1;
        rotateFactorRange.max = 179;
        rotateFactorRange.onchange = myUI.rotateFactorFunc(context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange, rotateFactorRange);

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

        context.rotate(rotateFactorRange.value * Math.PI / 180);
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
    	rangeToolHolder.append(rotateFactorRange);

        dH.append(canvas);
        dH.append(rangeToolHolder);
	},
	updateContext: (context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange) => {
		return () => {
        	ang1xRange.max = 399 - cWidthRange.value;
        	ang1yRange.max = 399 - cHeightRange.value;

			context.clearRect(0,0,400,400);

            context.fillStyle = 'rgba(' + rColorRange.value + ',' + gColorRange.value + ',' + bColorRange.value + ',' + aColorRange.value + ')';
        	context.fillRect(ang1xRange.value, ang1yRange.value, cWidthRange.value, cHeightRange.value);
        	context.save();
		}
	},
	rotateFactorFunc: (context, ang1xRange, ang1yRange, rColorRange, gColorRange, bColorRange, aColorRange, cHeightRange, cWidthRange, rotateFactorRange) => {
		return () => {
        	context.save();
        	context.clearRect(0,0,400,400);
        	context.restore();

            context.rotate(rotateFactorRange.value * Math.PI / 180);
            context.fillStyle = 'rgba(' + rColorRange.value + ',' + gColorRange.value + ',' + bColorRange.value + ',' + aColorRange.value + ')';
        	context.fillRect(ang1xRange.value, ang1yRange.value, cWidthRange.value, cHeightRange.value);
        	context.save();
		}
	}
}
window.onload = () => {
    myUI.init();
};