
function processWorkout()
{
  if (document.getElementById('switch').checked)
  {
    document.getElementById('gymAccess').innerHTML = "You have access to a gym.";
  }
  else { document.getElementById('gymAccess').innerHTML = "You do not have access to a gym."; }
  var liftingDays = (document.getElementById('liftDays').value);
  var cardioDays = (document.getElementById('cardioDays').value);
  document.getElementById('numLiftDays').innerHTML = "Lifting Days: " + liftingDays;
  document.getElementById('numCardioDays').innerHTML = "Cardio Days: " + cardioDays;
  if (Number(liftingDays) + Number(cardioDays) > 6)
  {
    document.getElementById('greaterThan6').innerHTML = "Either your will not have an off day or cardio and lifting will" +
      " be on same day at least once."
  }
  
  
  var weekDays=0;
  var dayString="Days to workout: ";

  var daysOfWeek = [document.getElementById('Sunday'), document.getElementById('Monday'), document.getElementById('Tuesday'), document.getElementById('Wednesday'), 
  document.getElementById('Thursday'), document.getElementById('Friday'), document.getElementById('Saturday')];
  var liftArray = [];
   for(var i = 0, length = daysOfWeek.length; i < length; i++){
	  var day = daysOfWeek[i];
	  if(day.checked){
		  dayString+=day.id+", ";
		  weekDays++;
		  liftArray.push(day.id);
	  }
   }
  
  var sectionArray =[];
  var whichSections="";
  var workLegs=document.getElementById('legs').checked;
  if(workLegs){
	sectionArray.push("workLegs");  
  }
  var workUpper=document.getElementById('upperBody').checked;
  if(workUpper){
	sectionArray.push("workUpper");  
  }
  var workTrunk=document.getElementById('trunk').checked;
  if(workTrunk){
	sectionArray.push("workTrunk");  
  }
  var numSections = sectionArray.length;
  
  var oneWorkoutForEachSection = weekDays==numSections;
  if(oneWorkoutForEachSection){
	for(var k = 0,  length = numSections; k < length; k++){  
		whichSections+=" Day "+(k+1)+" : " +liftArray[k]+": "+ sectionArray[k]+" ";
	}
  }else if(weekDays==1){
	whichSections+=" Day 1 : " +liftArray[0]+": ";
	for(k = 0,  length = numSections; k < length; k++){
		whichSections+=sectionArray[k]+" ";
	}	
  }
  
  
 document.getElementById('workoutPlan').innerHTML = whichSections;
  
  document.getElementById('daysToWorkout').innerHTML = dayString;
  if(liftingDays<1){
	 document.getElementById('validateNumDays').innerHTML = "Must have at least 1 lifting day";   
  }
  else if(weekDays < liftingDays || weekDays < cardioDays){
	 document.getElementById('validateNumDays').innerHTML = "Not enough days selected."; 
  }
  else if(weekDays>(liftingDays+cardioDays)){
	 document.getElementById('validateNumDays').innerHTML = "Too many days selected."; 
  }
  else{
	document.getElementById('validateNumDays').innerHTML = "Valid number of days.";  
  }
  
  getCardioLiftOrOff(daysOfWeek, weekDays, cardioDays, liftingDays);  
}

function getCardioLiftOrOff(dayArray, numWorkoutDays, cardioDays, liftDays){
	var workoutPlan = "Workout Plan: ";
	if(numWorkoutDays == liftDays){
		for(var i = 0, length = dayArray.length; i < length; i++){
			var day = dayArray[i];
			workoutPlan+=day.id+": ";
			if(day.checked){
				workoutPlan+="lift, ";
			}else{
				workoutPlan+="off, ";
			}
		}
	}
	//document.getElementById('workoutPlan').innerHTML = workoutPlan; 
}

$(document).ready(function () {
  $('.modal').modal();
  $('select').material_select();
});
