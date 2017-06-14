
function processWorkout()
{
	//testUserHasGym();

  document.getElementById('header').innerHTML = "Your Workout:"; 
  var sectionArray=[];

  var workLegs=document.getElementById('legs').checked;
	sectionArray.push(workLegs);  
  
  var workUpper=document.getElementById('upperBody').checked;
	sectionArray.push(workUpper);  
  
  var workTrunk=document.getElementById('trunk').checked;
	sectionArray.push(workTrunk);  
  
  var numSections = sectionArray.length;

  if(!workLegs && !workUpper && !workTrunk){
	document.getElementById('validateSectionChecked').innerHTML = "You must select at least one section of the body.";  
  }else{
	  if(document.getElementById('switch').checked){
		returnGymWorkout(sectionArray);
	  }
	  else{
		returnBwWorkout(sectionArray); 
	  }
  }
}

function returnGymWorkout(sectionArray){
	if(sectionArray[0] == true){
		document.getElementById('outLegs').innerHTML = WeightedSquatCard(); 
	}
	if(sectionArray[1] == true){
		document.getElementById('outUpper').innerHTML = "Lat Pulldowns"; 				
	}
	if(sectionArray[2] == true){
		document.getElementById('outTrunk').innerHTML = "Weighted Trunk Lifts"; 				
	}
	
}


function returnBwWorkout(sectionArray){
	
	if(sectionArray[0] == true){
		document.getElementById('outLegs').innerHTML = (GetLegStretchAndIP() + GetBodyWeightSquat() + GetLunge());
		
	}
	if(sectionArray[1] == true){
		document.getElementById('outUpper').innerHTML = "BodyWeight Rows"; 		
	}
	if(sectionArray[2] == true){
		document.getElementById('outTrunk').innerHTML = "Planks + Scissor Kicks"; 				
	}
	
}
  function testUserHasGym(){
	  if (document.getElementById('switch').checked)
	  {
		document.getElementById('gymAccess').innerHTML = "You have access to a gym.";
	  }
	  else { document.getElementById('gymAccess').innerHTML = "You do not have access to a gym."; }  
  }

 function GetBodyWeightSquat(){
	 var html = ['<div class="col s12 m12 blue">',
      '<h2 class="thin header blue">&nbsp; Strength: BodyWeight Squats</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
		  '<a href="https://youtu.be/Yjko2TIk1xM">',
          '<img src="squat1.jpg">',
		  '</a>',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
             ' - Stand with your feet spread hip-width apart.<br/>',
              '- Draw in your abdominals- belly button toward your spine to stabilize your torso.<br/>',
              '- Keep your back straight and your knee caps aligned with your second toes.<br/>',
              '- Lean forward slightly with your arms reaching forward and slowly squat bending your knees to 90 degrees.<br/>',
              '- Keep your weight on your heels and straighten your legs to return to the start position.<br/>',
            '</p>',
          '</div>',
          '<div class="card-action light-blue lighten-5">',
           ' <b><a>Repeat: 4 sets of 15 reps</a></b>',
         ' </div>',
       ' </div>',
     ' </div>',
    '</div>'].join('');
	return html;
 }
 
 function GetLunge(){
	 var html = ['<div class="col s12 m7 blue">',
      '<h2 class="thin header blue">&nbsp;Strength: Forward Lunges</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
		'<a href="https://youtu.be/QE_hU8XX48I">',
         ' <img src="lunge1.jpg">',
		 '</a>',
       ' </div>',
       ' <div class="card-stacked">',
          '<div class="card-content">',
          '  <p>',
            '  - Stand with both feet hip width apart, body upright.<br/>',
            '  - Lunge forward by balancing on one foot and stepping forward with the other foot.<br/>',
             ' - After landing on your forward heel, bend both knees so that your body lowers toward the floor, keeping your',
             '   back straight, body upright throughout the entire exercise.<br/>',
             ' - Make sure that your front knee stays back behind your front toe, not bending your knees past 90 degrees.<br/>',
             ' - Try to avoid any side to side movement of your knees throughout the exercise.<br/>',
             ' - Reverse the lunge to return to the starting position.<br/>',
            '  - Repeat with other leg',
           ' </p>',
         ' </div>',
          '<div class="card-action light-blue lighten-5">',
           ' <b><a>Repeat: 3 sets of 20 reps, each leg</a></b>',
         '</div>',
        '</div>',
     ' </div>',
    '</div>',].join('');
	return html;
 }
 
 function GetLegStretchAndIP(){
	var html1 = ['<div class="col s12 m7 blue">',
      '<h2 class="thin header blue">&nbsp;Stretch: Hip Half Kneel</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
		'<a href="https://youtu.be/iA0CccCcqts">',
         ' <img src="hipHalfKneel.jpg">',
		 '</a>',
       ' </div>',
       ' <div class="card-stacked">',
          '<div class="card-content">',
          '  <p>',
            '  - Kneel on one knee with the other leg in front of you foot on the floor, creating a 90 degree angle at the hip and knee.<br/>',
            '  - Use a chair for support if needed.<br/>',
             ' - Keep your body upright, tighten your abdominals to limit increased arch in the low back.<br/>',
             ' - Lean your body weight forward onto the front leg until a stretch is felt in the front of the kneeling hip.<br/>',
             ' - Relax and return to start position.<br/>',
            '  - Repeat with other leg',
           ' </p>',
         ' </div>',
          '<div class="card-action light-blue lighten-5">',
           ' <b><a>Repeat: 1 sets of 5 reps, each leg - hold 20sec</a></b>',
         '</div>',
        '</div>',
     ' </div>',
    '</div>',].join('');
	var html2 = ['<div class="col s12 m7 blue">',
      '<h2 class="thin header blue">&nbsp;IP: Supine Straight Leg Hip Flexion</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
          '<img src="straightLegHipFlex2.jpg">',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>- Lie on your back with one knee bent and the affected leg completely straight.<br/>',
             ' - Roll leg out so that the toes are pointing to the side<br/>',
             ' - Bring the toes of the affected leg up towards the knee and contract the',
             ' muscles on the front of the thigh, &nbsp;&nbsp;making the leg as straight as possible.<br/>',
             ' - Lift your leg off the floor or table to 45 degrees keeping it straight.<br/>',
             ' - Re-contract the muscles on the front of the thigh emphasizing the straight leg.<br/>',
             ' - Slowly lower the leg to starting position and repeat.<br/>',
            '</p>',
          '</div>',
         ' <div class="card-action light-blue lighten-5">',
          '  <b><a>Repeat: 3 sets of 15 reps</a></b>',
          '</div>',
       ' </div>',
     ' </div>',
    '</div>',].join('');
	return html1+html2; 
 }


$(document).ready(function () {
	$("#upperBody").click(function(){
        $("#meow").slideToggle("slow");
    });
	$("#legs").click(function(){
        $("#meow2").slideToggle("slow");
    });
	$("#trunk").click(function(){
        $("#meow3").slideToggle("slow");
    });
	
	
  $('.modal').modal();
  $('select').material_select();
});
