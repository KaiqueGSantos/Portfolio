function skillsOptions(skill, imgSkill){
    var divSkill = document.getElementById(skill);
    var img = document.getElementById(imgSkill);
    disableOptions();
    img.style.transform = "scale(1.1)";
    img.style.filter = "grayscale(0%)";
    divSkill.style.display = "block";

}

function disableOptions(){
    const skills = ["html", "css", "js", "py", "cs", "unity"];
    const imgs = ["imghtml", "imgcss", "imgjs", "imgpy", "imgcs", "imgunity"];
    let skillStyle;
    let imgStyle;
    for (var i = 0; i < skills.length; i++) {
        skillStyle = document.getElementById(skills[i]).style;
        skillStyle.display = "none";
        imgStyle = document.getElementById(imgs[i]).style;
        imgStyle.transform = "scale(1)";
        imgStyle.filter = "grayscale(100%)";
    }
}   