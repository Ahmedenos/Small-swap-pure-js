let allimages= document.querySelectorAll('img');
let up=document.getElementById('up')
let dwon=document.getElementById('dwon');
let arry=[]
for(let i=0;i<allimages.length;i++){
    arry.push(allimages[i])
}
let j=0
    up.onclick=function(){
        if(j<0){
            j=0
        }
            allimages[j].style.display='none';
            if(j>=allimages.length-4){
                return false
            }
 j++
    }
dwon.onclick=function(){
    if(j<=0){
        j=0
    }
    allimages[j].style.display='block';
    j--
}