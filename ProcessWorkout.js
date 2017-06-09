
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
    document.getElementById('greaterThan6').innerHTML = "Either the user will not have an off day or cardio and lifting will" +
      " be on same day at least once."
  }
}

$(document).ready(function () {
  $('.modal').modal();
  $('select').material_select();
});
