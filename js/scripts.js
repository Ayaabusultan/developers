function Jobs{
  this.jposts = [];
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

function Developer{
  this.name;
  this.email;
  this.resume;
  this.skills;
  this.hourlyCost;
  this.experience;

}

$(document).ready(function(){
<<<<<<< HEAD


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
});
