<<<<<<< HEAD
function Jobs(){
  this.jbosts=[];
}

Jobs.prototype.addJob=function(job){
  this.jbosts.push(job);

}

Jobs.prototype.removeJob=function(job){
  this.jbosts.pop(job);
=======
 Jobs() {
  this.jposts = [];

}

Jobs.prototype.addJob = function(job){
  this.jposts.push(job);

}

Jobs.prototype.removeJob = function(job){
  this.jposts.pop(job);
>>>>>>> 4bd434a62be9a6d739f1c7fe51bb9a61ae7350f1

}


function JobPosting() {
  this.companyName;
  this.title;
  this.difficulty;
  this.description;
  this.skillsRequired = [];
  this.moreSkills;
}

function Developers() {
<<<<<<< HEAD
  this.developers=[];
}

 Developers.prototype.addDeveloper=function(dev){
  this.developers.push(dev);

}

Developers.prototype.removeDeveloper=function(dev){
  this.developers.pop(dev);
}

function Developer(fname,lname,title,hRate,experience,skillsRequire){

  this.fname=fname;
  this.lname=lname;
  this.title=title;
  this.hourlyRate=hRate;
  this.experience=experience;
  this.skills=skillsRequire;
}
var textInfo=function(dev){
  $("#app-name").text(dev.fname+" "+dev.lname);
  $("#app-h").text(dev.hourlyRate);
  $("#app-position").text(dev.title);
  // alert("hi")

}
var devloper1,devs=new Developers();
$(document).ready(function(){
=======
  this.developers = [];
}

Developers.prototype.addDeveloper = function(developer) {
  this.developers.push(developer);

}

Developers.prototype.removeDeveloper = function(developer) {
  this.developers.pop(developer);

}

function Developer(fname,lname,title,hRate,experience,skillsRequire) {

  this.fname = fname;
  this.lname = lname;
  this.title = title;
  this.hourluRate = hRate;
  this.experience = experience;
  this.skills = skillsRequire;

}
var newdevloper;

$(document).ready(function()  {

>>>>>>> 4bd434a62be9a6d739f1c7fe51bb9a61ae7350f1

  // company click function to take form inputs
 $("#apply").click(function() {

 });

 ///developer click function to take form inputs
<<<<<<< HEAD
 $("#app-btn").click(function(event){
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

     devloper1=new Developer(fname,lname,title,hourlyRate,experience,skills);
     // devs.addDeveloper(devloper1);

     textInfo(devloper1);
     event.preventDefault();
     

   });


=======
 $("#app-btn").click(function() {
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

   var newDevloper = new Developer(fname,lname,title,hourlyRate,experience,skills);
>>>>>>> 4bd434a62be9a6d739f1c7fe51bb9a61ae7350f1

 });


<<<<<<< HEAD
=======
 ///Company click function to post the jop posting form
  $("#post").click(function(event){
>>>>>>> 4bd434a62be9a6d739f1c7fe51bb9a61ae7350f1

    event.preventDefault();
    show();

    var comName = $("#com-name").val();
    var jobTitle = $("#job-title").val();
    var difficulty = $("#difficulty").val();
    var jobLocation = $("#location").val();
    var jobCondition = $("#condition").val();
    var jobDescription = $("#description").val();
    var moreSkills =  $("#skills").val();



    var skills =[];
    $("input:checkbox[name=skills]:checked").each(function(){
     var skillsRequired = $(this).val();

     if(difficulty === "easy"){
      $("#bg-skills").text("<li>"+skillsRequired+"</li>");
      }
      else if(difficulty === "intermediate"){
        $("#int-skills").text("<li>"+skillsRequired+"</li>");
      }
      else if(difficulty === "advanced"){
        $("#adv-skills").text("<li>"+skillsRequired+"</li>");
      }

     skills.push(skillsRequired);
     // $('#responses').append( skillsRequired  + "<br>");
    });
     // skills.push(moreSkills);
     var newPost = new JobPosting(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,skills,moreSkills);



     if (difficulty === "easy"){
       $("#bg-comp-name").text(comName);
       $("#bg-title").text(jobTitle);
       $("#bg-location").text(joblocation);
       $("#bg-add-skills").text(moreSkills);
       $("#bg-post-desc").text(jobDescription);
       $("#bg-condition").text(jobCondition);
     }

     else if (difficulty === "intermediate"){
       $("#int-comp-name").text(comName);
       $("#int-title").text(jobTitle);
       $("#int-location").text(joblocation);
       $("#int-add-skills").text(moreSkills);
       $("#int-post-desc").text(jobDescription);
       $("#int-condition").text(jobCondition);
     }
     else if (difficulty === "advanced"){
       $("#adv-comp-name").text(comName);
       $("#adv-title").text(jobTitle);
       $("#adv-location").text(joblocation);
       $("#adv-add-skills").text(moreSkills);
       $("#adv-post-desc").text(jobDescription);
       $("#adv-condition").text(jobCondition);
     }
     // $("#submit").onclick="location.href='index.html'
  });


<<<<<<< HEAD
=======


>>>>>>> 4bd434a62be9a6d739f1c7fe51bb9a61ae7350f1
});
