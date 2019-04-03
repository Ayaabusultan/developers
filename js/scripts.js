function Jobs(){
  this.jbosts=[];
}

Jobs.prototype.addJob=function(job){
  this.jbosts.push(job);

}

Jobs.prototype.removeJob=function(job){
  this.jbosts.pop(job);

}


function JobPosting() {
  this.companyName;
  this.title;
  this.difficulty;
  this.description;
  this.skillsRequire=[];
}

function Developers() {
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

  // company click function to take form inputs
 $("#apply").click(function(){

 });

 ///developer click function to take form inputs
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


});
