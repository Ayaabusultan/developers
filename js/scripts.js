function Jobs{
<<<<<<< HEAD
  this.jposts=[];
=======
  this.jposts = [];
>>>>>>> 7d32f2e78a09a8c55015e606a0bc2e5c12f8391a
}

Jobs.prototype.addJob=function(job){
  this.jposts.push(job);

}

Jobs.prototype.removeJob=function(job){
  this.jposts.pop(job);

}


function JobPosting {
  this.companyName;
  this.title;
  this.difficulty;
  this.description;
  this.skillsRequire=[];
}

function Developers{
  this.developers=[];
}

Developers.prototype.addDeveloper=function(developer){
  this.developers.push(developer);

}

Developers.prototype.removeDeveloper=function(developer){
  this.developers.pop(developer);

}

function Developer(fname,lname,title,hRate,experience,skillsRequire){

  this.fname=fname;
  this.lname=lname;
  this.title=title;
  this.hourluRate=hRate;
  this.experience=experience;
  this.skills=skillsRequire;


}
var newdevloper;
$(document).ready(function(){

  // company click function to take form inputs
 $("#apply").click(function(){

 });

 ///developer click function to take form inputs
 $("#app-btn").click(function(){
    var fname,lname,email,title,skills=[],hourlyRate,xperience;
       fname=$("input#app-first-name").val();
       lname=$("input#app-last-name").val();
       title=$("input#app-title").val();
       hourlyRate=parseInt($("input#app-rate").val());
       experience= $("input#app-exp").val();
       $("input:checkbox[name=skills]:checked").each(function(){
                    var skill = $(this).val();
                    skills.push(skill);
                  });

   newdevloper=new Developer(fname,lname,title,hourlyRate,experience,skills);
   
 });

$





=======

  $("#submit").click(function(){

    var comName = $("#com-name").val();
    var comEmail= $("#com-email").val();
    var difficulty = $("#difficulty").val();
    var joblocation = $("#location").val();
    var jobCondition = $("#condition").val();
    var jobDescription = $("#description").val();
    var jobCondition = $("#condition").val();

    var skills =[];
    $("input:checkbox[name=skills]:checked").each(function(){
     var skillsRequired = $(this).val();
     skills.push(skillsRequired);
     // $('#responses').append( skillsRequired  + "<br>");
    });
     var moreSkills =  $("#skills").val();
     skills.push(moreSkills);



  });








=======

>>>>>>> b3bfe55d4e16e70b5160e9c188583575886addd5
>>>>>>> 7d32f2e78a09a8c55015e606a0bc2e5c12f8391a
});
