$(document).ready( function (){
	

	
	$('textarea').autosize();   





	/* initialize skrollr */

	/* go through repeat elements */

	function createSkrollStateString(property,easing,value,unit){
		return property+"["+easing+"]:"+value+unit+";";
	}

	function getOffsetValue(start,end,offset,duration){
		return end-((end-start)*((duration-offset)/duration));
	}

	function getCycleStringSet(properties,easing,unit,offset,duration){
		var endString="";
		var startString="";
		var offsetString="";
		for(var i=0;i<properties.length;i++) {
			var property = properties[i].property;
			var start = properties[i].start;
			var end = properties[i].end;


			startString+=createSkrollStateString(property,easing,start,unit);
			endString+=createSkrollStateString(property,easing,end,unit);
			offsetString+=createSkrollStateString(property,easing,getOffsetValue(start,end,offset,duration),unit);
		}
		return {'startString':startString,'endString':endString,'offsetString':offsetString};
	}
	

	$('[skrollr-repeat]').each(function(){
		
		var unit = $(this).data('unit');
		var offset = $(this).data('offset');
		var loopDuration = $(this).data('loop');
		var repeat = $(this).data('repeat');
		var easing = $(this).data('easing');
		

		var properties = $(this).data('properties').properties;

		var propertiesStringSet = getCycleStringSet(properties,easing,unit,offset,loopDuration);

		var beginCycleString = propertiesStringSet.startString;
		
		var endCycleString = propertiesStringSet.endString;

		var offsetString = propertiesStringSet.offsetString;


		/* starting state */
		if(offset>0){
			$(this).attr('data-0',
			offsetString);
		}
		else {
			$(this).attr('data-0',
			endCycleString);
			$(this).attr('data-1',
			offsetString);
		}
		
		/* repeat effect cycle */



		for (var i=1; i<=repeat; i++){
			var end = loopDuration*i-offset;
			var beginNext = end+1;
			$(this).attr('data-'+end,endCycleString);
			if(beginNext<=loopDuration*repeat){
				$(this).attr('data-'+beginNext,beginCycleString);
			}
		}
		if(offset>0){
			$(this).attr('data-'+loopDuration*repeat,offsetString);
		}
	});

	var s = skrollr.init({
	});

	
});

