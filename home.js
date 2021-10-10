const imgmap1= [25,18,45,80];/*Percentages*/
const imgmap2= [45,18,62,80];
const imgmap3= [65,18,85,80];
const link1= "https://ambitious-cliff-0ff8cef10.azurestaticapps.net";
const link2= "https://se-node-portfolio-mt.azurewebsites.net/se-getting-to-know-each-other/Gettingtoknow.html";
const link3= "https://assignment-portfolio-node.azurewebsites.net/";
window.onresize = resizeImageMap;
var img = new Image();
img.onload = function(){
  resizeImageMap()
}
img.src = "images/Team-Pic.jpg";
function resizeImageMap(){
    let height = document.getElementById('teammap').clientWidth;
    let width = document.getElementById('teammap').clientWidth;
    let dimensions = [width, height, width, height];
    let new_imgmap1=imgmap1.map(function(coord, i ) {
        return coord/100*dimensions[i];
      });
    let new_imgmap2=imgmap2.map(function(coord, i ) {
        return coord/100*dimensions[i];
      });
    let new_imgmap3=imgmap3.map(function(coord, i ) {
        return coord/100*dimensions[i];
      });
    console.log(new_imgmap1,new_imgmap2,new_imgmap3);
    document.getElementById("resized").innerHTML ='<area shape="rect" coords='+new_imgmap1+' alt="Computer" href='+link1+'>' +
                                                  '<area shape="rect" coords='+new_imgmap2+' alt="Computer" href='+link2+'>' +     
                                                  '<area shape="rect" coords='+new_imgmap3+' alt="Computer" href='+link3+'>';
}