function Jobs{
  this.jposts=[];
}

Jobs.prototype.addJob=function(job){
  this.jposts.push(job);

}

Jobs.prototype.removeJob=function(job){
  this.jposts.pop(job);

}


  function JobPosting{
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

function Developer{
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





});
