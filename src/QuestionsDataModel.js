function toZeroArray(values){
   var arr = [];
   if(values === undefined ){
    arr = [0,0,0,0,0,0];
    return arr;
 }
  else {
  
   return  values.split(",");}
 }
 
 var values_profile1 = {
    "val1" : toZeroArray(sessionStorage.values1id1),
    "val2" : toZeroArray(sessionStorage.values2id1),
    "val3" : toZeroArray(sessionStorage.values3id1),
    "val4" : toZeroArray(sessionStorage.values4id1),
    "val5" : toZeroArray(sessionStorage.values5id1),
    "val6" : toZeroArray(sessionStorage.values6id1),  
 };
 
 var values_profile2 = {
    "val1" : toZeroArray(sessionStorage.values1id2),
    "val2" : toZeroArray(sessionStorage.values2id2),
    "val3" : toZeroArray(sessionStorage.values3id2),
    "val4" : toZeroArray(sessionStorage.values4id2),
    "val5" : toZeroArray(sessionStorage.values5id2),
    "val6" : toZeroArray(sessionStorage.values6id2),
    
 };
 
 var values_profile3 = {
    "val1" : toZeroArray(sessionStorage.values1id3),
    "val2" : toZeroArray(sessionStorage.values2id3),
    "val3" : toZeroArray(sessionStorage.values3id3),
    "val4" : toZeroArray(sessionStorage.values4id3),
    "val5" : toZeroArray(sessionStorage.values5id3),
    "val6" : toZeroArray(sessionStorage.values6id3),
    
 };
 var inputvalue = {
   'values1' : values_profile1,
   'values2' : values_profile2,
   'values3' : values_profile3
 };
 
 //Question 1

 profile_array = [];
  
  for(var key in inputvalue){
   questionArray = [];
   

 questionArray[0] = new question("","Ég skil menningu innan vinnustaða og aðlaga mig að henni",inputvalue[key].val1[0]);
 questionArray[1]= new question("","Framkoma mín og hegðun er í samræmi við viðmið og þarfir vinnustaða ",inputvalue[key].val1[1]);
 questionArray[2] = new question( "","Ég aðlaga mig að skipuriti og reglum vinnustaða ",inputvalue[key].val1[2]);
 questionArray[3] = new question("","Ég á auðvelt með að vinna með ólíkum einstaklingum við ólíkar aðstæður",inputvalue[key].val1[3]);
 questionArray[4] = new question("","Ég legg mig fram við að afla viðeigandi upplýsinga ",inputvalue[key].val1[4]);
  
  questionArray2 = [];
 questionArray2[0] = new question("","Ég er reiðubúin/n að setja mér markmið um framtíðina",inputvalue[key].val2[0]);
 questionArray2[1]= new question("","Ég geri mér grein fyrir því hvernig val mitt hefur áhrif á framtíð mína",inputvalue[key].val2[1]);
 questionArray2[2]= new question("","Ég er tilbúin/n að kanna þá möguleika sem ég hef úr að velja",inputvalue[key].val2[1]);
 questionArray2[3]= new question("","Ég er tilbúin/n í áskoranir og krefjandi verkefni í starfi",inputvalue[key].val2[1]);
 
 questionArray3 = [];

 questionArray3[0] = new question("",	"Ég mæti vel í vinnu og á réttum tíma"	,inputvalue[key].val3[0]);
 questionArray3[1]= new question("",	"Ég hvet sjálfa/n mig áfram í starfi",inputvalue[key].val3[1]);
 questionArray3[2] = new question("","Ég er áreiðanleg/ur í starfi",inputvalue[key].val3[2]);
 questionArray3[3] = new question("","Ég tek ábyrgð á vinnustað",inputvalue[key].val3[3]);
 
questionArray4 = [];
 questionArray4[0] = new question("","Ég er sveigjanleg/ur varðandi staðsetningu vinnustaðar "	,inputvalue[key].val4[0]);
 questionArray4[1]= new question("","Ég sýni frumkvæði og framkvæmi í starfi",inputvalue[key].val4[1]);
 questionArray4[2] = new question("","Ég get aðlagað mig að mismunandi aðstæðum á vinnustað ",inputvalue[key].val4[2]);

 
questionArray5 = [];
 questionArray5[0] = new question("","Ég gefst ekki upp, ég reyni aftur"	,inputvalue[key].val5[0]);
 questionArray5[1]= new question("",	"Ég tek ábyrgð á mínum aðstæðum",inputvalue[key].val5[1]);
 questionArray5[2] = new question("","Ég er lausnamiðuð/aður",inputvalue[key].val5[2]);
  questionArray5[3] = new question("","Ég tekst á við mótlæti",inputvalue[key].val5[3]);
 
 questionArray6 = [];
 questionArray6[0] = new question("","Ég hef þá starfshæfni sem til þarf "	,inputvalue[key].val6[0]);
 questionArray6[1]= new question("",	"Ég met færni mína með tilliti til þeirrar hæfni sem þörf er á fyrir tiltekið starf",inputvalue[key].val6[1]);
 questionArray6[2] = new question("","Ég vil þróa færni mína betur",inputvalue[key].val6[2]);
  questionArray6[3] = new question("","Ég nýti starfshæfni mína víða",inputvalue[key].val6[3]);
  questionArray6[4] = new question("","Ég vinn af nákvæmni",inputvalue[key].val6[4]);
  
  var prop = [questionArray,questionArray2,questionArray3,questionArray4,questionArray5,questionArray6];
  
  profile_array.push(prop);
 
    }
  
  
 