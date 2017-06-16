
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
		document.getElementById('outLegs').innerHTML = (GetLegStretchAndIP() + GetWeightedSquat() + GetHamstringCurl() 
                                                    + GetQuadExtension()); 
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
		document.getElementById('outUpper').innerHTML = (GetUpperBodyStretchAndIP() + GetBodyWeightRow() + GetPushup()); 		
	}
	if(sectionArray[2] == true){
		document.getElementById('outTrunk').innerHTML = (GetProneToHands() + GetBridge() + GetPlank() + GetScissorKicks()); 				
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

function GetWeightedSquat(){
  var html = ['<div class="col s12 m12 blue">',
      '<h2 class="thin header blue">&nbsp; Strength: Back Squats</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
		  '<a href="https://youtu.be/B3G38xvugGg">',
          '<img src="backSquat.jpg">',
		  '</a>',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
              '- Select a weight that you feel you could complete just barely 10 reps with<br>',
              '- Unrack barbell by resting bar on shoulders, behind head, hands holding bar slightly wider than shoulder-width<br/>',
              '- Stand with your feet spread hip-width apart.<br/>',
              '- Draw in your abdominals- belly button toward your spine to stabilize your torso.<br/>',
              '- Keep your back straight and your knee caps aligned with your second toes.<br/>',
              '- Lean forward slightly slowly squat bending your knees to 90 degrees.<br/>',
              '- Keep your weight on your heels and straighten your legs to return to the start position.<br/>',
            '</p>',
          '</div>',
          '<div class="card-action light-blue lighten-5">',
           ' <b><a>Repeat: 5 sets of 5 reps</a></b>',
         ' </div>',
       ' </div>',
     ' </div>',
    '</div>'].join('');
	return html;
}

function GetHamstringCurl(){
var html = ['<div class="col s12 m12 blue">',
      '<h2 class="thin header blue">&nbsp; Strength: Single-Leg Hamstring Curl</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
		  '<a href="https://youtu.be/5pVMk7-EWEo">',
          '<img src="hamstringCurl.jpg">',
		  '</a>',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
              '- Select a weight that you feel you could complete just barely 10 reps with<br>',
              '- Machine orientation may vary - some are sitting someare laying down<br/>',
              '- Set the machine to match your height.<br/>',
              '- Keep torso and upper part of leg against the machine<br/>',
              '- Using only 1 leg, Move the bar towards your body by bending your knee, stopping at 90 degrees<br/>',
              '- Return slowly to the starting position',
            '</p>',
          '</div>',
          '<div class="card-action light-blue lighten-5">',
           ' <b><a>Repeat: 5 sets of 5 reps, each leg</a></b>',
         ' </div>',
       ' </div>',
     ' </div>',
    '</div>'].join('');
	return html;
}

function GetQuadExtension(){
var html = ['<div class="col s12 m12 blue">',
      '<h2 class="thin header blue">&nbsp; Strength: Single-Leg Quad Extension</h2>',
      '<div class="card horizontal light-blue lighten-3">',
        '<div class="card-image blue">',
		  '<a href="https://youtu.be/I1F58vIjbvc">',
          '<img src="quadExtension.jpg">',
		  '</a>',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
              '- Select a weight that you feel you could complete just barely 10 reps with<br>',
              '- Set the machine to match your height.<br/>',
              '- Keep back straight and pressed against machine seat-back and upper part of leg flush against the machine<br/>',
              '- Using only 1 leg, Move the bar towards your body by straightening your knee,<br/>',
              '- Return slowly to the starting position',
            '</p>',
          '</div>',
          '<div class="card-action light-blue lighten-5">',
           ' <b><a>Repeat: 5 sets of 5 reps, each leg</a></b>',
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

function GetBodyWeightRow(){
  var html = ['<div class="col s12 m12 lime">',
      '<h2 class="thin header lime">&nbsp; Strength: BodyWeight Rows</h2>',
      '<div class="card horizontal lime lighten-3">',
        '<div class="card-image lime">',
		  '<a href="https://youtu.be/OYUxXMGVuuU">',
          '<img src="bwRow.jpg">',
		  '</a>',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
             ' - Find a table that can support your weight.<br/>',
              '- Take a wider than shoulder width grip on the table and position yourself hanging underneath the table.<br/>',
              '- Your body should be straight with your heels on the ground with your arms fully extended.<br/>',
              '- Begin by flexing the elbow, pulling your chest towards the table. Retract your shoulder blades as you perform the movement<br/>',
              '- Pause at the top of the motion, and return yourself to the start position.<br/>',
            '</p>',
          '</div>',
          '<div class="card-action lime lighten-5">',
           ' <b><a>Repeat: 3 sets of 10 reps</a></b>',
         ' </div>',
       ' </div>',
     ' </div>',
    '</div>'].join('');
	return html;
}

function GetPushup(){
  var html = ['<div class="col s12 m12 lime">',
      '<h2 class="thin header lime">&nbsp; Strength: Pushups</h2>',
      '<div class="card horizontal lime lighten-3">',
        '<div class="card-image lime">',
		  '<a href="https://youtu.be/8V-ZUMvQKr0">',
          '<img src="pushup.jpg">',
		  '</a>',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
             ' - When down on the ground, set your hands at a distance that is slightly wider than shoulder-width apart.<br/>',
              '- Your feet should be set up in a way that feels right and comfortable to you. For some, that might be shoulder width apart. ', 
                'For others, it might be that the feet are touching.<br/>',
              '- Think of your body as one giant straight line, engage your core<br/>',
              '- With your arms straight, butt clenched, and abs braced, steadily lower yourself until your elbows are at a 90 degree angle or smaller<br/>',
              '- Once your chest touches the floor (or your arms go down to a 90 degree angle), pause slightly and then explode back up until you’re back in the starting position<br/>',
            '</p>',
          '</div>',
          '<div class="card-action lime lighten-5">',
           ' <b><a>Repeat: 3 sets of 10 reps</a></b>',
         ' </div>',
       ' </div>',
     ' </div>',
    '</div>'].join('');
	return html;
}

function GetUpperBodyStretchAndIP (){
  var html1 = ['<div class="col s12 m7 lime">',
      '<h2 class="thin header lime">&nbsp;Stretch: Posterior Deltoid</h2>',
      '<div class="card horizontal lime lighten-3">',
        '<div class="card-image lime">',
         ' <img src="posteriorDeltoid.PNG">',
       ' </div>',
       ' <div class="card-stacked">',
          '<div class="card-content">',
          '  <p>',
            '  - Stand on one side of a wall and place the arm that is being stretched across your body. <br/>',
            '  - Grip onto the side of the wall, and look slightly away towards the side being stretched. <br/>',
             ' - Stretch should be felt behind the shoulder and scapula (shoulder blade).<br/>',
             ' - Hold for 20-30 sec.<br/>',
           ' </p>',
         ' </div>',
          '<div class="card-action lime lighten-5">',
           ' <b><a>Repeat: 1 sets of 3-5 reps, each side</a></b>',
         '</div>',
        '</div>',
     ' </div>',
    '</div>'].join('');
	var html2 = ['<div class="col s12 m7 lime">',
      '<h2 class="thin header lime">&nbsp;IP: Plank Position Box Steps</h2>',
      '<div class="card horizontal lime lighten-3">',
        '<div class="card-image lime">',
          '<img src="box1.PNG">',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>- In a good plank position (this can be done on knees or toes depending on ability), ',
            'alternate right and left arm stepping onto box while maintaining proper alignment during entire exercise.<br/>',
             ' - For more variety, start on one side of the box in a good plank position, and step right arm followed by ',
             'left arm onto the box, and move towards the other side of the box<br/>',
            '</p>',
          '</div>',
         ' <div class="card-action lime lighten-5">',
          '  <b><a>Repeat: 2 sets of 10 reps</a></b>',
          '</div>',
       ' </div>',
     ' </div>',
    '</div>'].join('');
	return html1+html2; 
}

function GetProneToHands(){
  var html =[
    '<div class="col s12 m7 deep-purple lighten-2">',
     ' <h2 class="thin header deep-purple lighten-2">&nbsp;Prone to Hands</h2>',
      '<div class="card horizontal deep-purple lighten-4">',
        '<div class="card-image deep-purple lighten-2">',
          '<img src="proneToHands.jpg">',
        '</div>',
        '<div class="card-stacked">',
          '<div class="card-content">',
            '<p>',
              '- Start position: Lay on your stomach with hands flat on the floor<br/>',
              '- Lift your upper body slowly leaving your hips on the floor with your lower body relaxed. As you lift inhale.<br/>',
              '- Press up until your elbows are straight.<br/>',
              '- Hold this position and exhale.<br/>',
              '- Slowly return to the start position.<br/>',
            '</p>',
         ' </div>',
          '<div class="card-action deep-purple lighten-5">',
            '<b><a>Repeat: 1 set of 10 reps, daily</a></b>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',].join('');
    return html;
}

function GetBridge(){

}

function GetPlank(){

}

function GetScissorKicks(){
  
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
