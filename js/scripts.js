function Jobs{
  this.jposts = [];
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
  this.name;
  this.email;
  this.resume;
  this.skills;
  this.hourlyCost;
  this.experience;

}

$(document).ready(function(){

});
