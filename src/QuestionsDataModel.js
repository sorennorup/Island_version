function toZeroArray(values){
   var arr = [];
   if(values === undefined ){
    arr = [0,0,0,0,0,0];
    return arr;
 }
  else {
   
   return  values.split(",");}
 }
 /******Creating comment array for the PDF version *********/
 let commentsArrProf1 = [];
 let commentsArrProf2 = [];
 let commentsArrProf3 = [];
 for(var i = 1; i < 7; i++) {
   let comment = sessionStorage.getItem('comment'+i+"profile1");
      commentsArrProf1.push(comment);
 }
 for(var i = 1; i < 7; i++) {
   let comment = sessionStorage.getItem('comment'+i+"profile2");
      commentsArrProf2.push(comment);
}
for(var i = 1; i < 7; i++) {
   let comment = sessionStorage.getItem('comment'+i+"profile3");
   commentsArrProf3.push(comment);
}
/**************End comment array for PDF version *********/

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


 
 // initializes the instructions variables
 let comment1_1 = "",comment1_2 = " ", comment1_3 = " ", 
 comment1_4 = " ", comment1_5 ="";
 let comment2_1 = "",comment2_2 = " ", comment2_3 = " ", 
 comment2_4 = " ", comment2_5 ="";
 let comment3_1 = "",comment3_2 = " ", comment3_3 = " ", 
 comment3_4 = " ", comment3_5 ="";
 let comment4_1 = "",comment4_2 = " ", comment4_3 = " ", 
 comment4_4 = " ", comment4_5 ="";
 let comment5_1 = "",comment5_2 = " ", comment5_3 = " ", 
 comment5_4 = " ", comment5_5 ="",comment5_6 ="" ;
 let comment6_1 = "",comment6_2 = " ", comment6_3 = " ", 
 comment6_4 = " ", comment6_5 ="";
 
questionArray = [];
profile_array = [];

for(var key in inputvalue){
   questionArray = [];
   if(key == 'values3') {
      // instructions to question MÃ¥lsÃ¦tning
      comment1_1 = " ";
      comment1_2 = " ";
      comment1_3 = " ";
      comment1_4 = "";
      comment1_5 ="";
     // Instructions to Motivation
      comment2_1 = "";
      comment2_2 = "";
      comment2_3 = " ";
      comment2_4 = ""; comment2_5 ="";
      // Instructions to Robusthed
      comment3_1 = "";
      comment3_2 = "";
      comment3_3 = "";
      comment3_4 = ""; comment3_5 ="";
      // Instructions to Fleksibilitet
      comment4_1 = "";
      comment4_2 = "";
      comment4_3 = "";
      comment4_4 = ""; comment4_5 ="";
        // Instructions to Sociale normer
      comment5_1 = "";
      comment5_2 = "";
      comment5_3 = "";
      comment5_4 = ""; comment5_5 ="";
      comment5_6 ="";
        // Instructions to Min faglighed
      comment6_1 = "";
      comment6_2 = "";
      comment6_3 = "";
      comment6_4 = " "; 
      comment6_5 = ""; 

   }
   questionArray[0] = new question(comment1_1,"Ég aðlaga mig að hefðum vinnustaða (vinnustaðamenning)",inputvalue[key].val1[0]);
   questionArray[1]=  new question(comment1_2,"Framkoma mín og hegðun er í samræmi við viðmið og þarfir vinnustaða",inputvalue[key].val1[1]);
   questionArray[2] = new question( comment1_3,"Ég aðlaga mig að skipulagi og reglum vinnustaða",inputvalue[key].val1[2]);
   questionArray[3] = new question( comment1_4,"Ég á auðvelt með að vinna með ólíkum einstaklingum við ólíkar aðstæður",inputvalue[key].val1[3]);
   questionArray[4] = new question(comment1_5,"Ég legg mig fram við að afla þeirra upplýsinga sem þarf til að sinna starfi mínu",inputvalue[key].val1[4]);
   questionArray[5] = new question(comment1_5,"Ég hef þekkingu á íslenskum vinnumarkaði (hvað er verið að spyrja um?)",inputvalue[key].val1[5]);

   
   questionArray2 = [];
   questionArray2[0] = new question(comment2_1,"Ég er tilbúin/n að setja mér markmið um framtíðina",inputvalue[key].val2[0]);
   questionArray2[1]= new question(comment2_2,"Ég geri mér grein fyrir því að ákvarðanir mínar hafa áhrif á framtíðina",inputvalue[key].val2[1]);
   questionArray2[2]= new question(comment2_3,"Ég er tilbúin/n að kanna þá náms- og starfsmöguleika sem ég hef úr að velja",inputvalue[key].val2[2]);
   questionArray2[3]= new question(comment2_4,"Ég er tilbúin/n í áskoranir og krefjandi verkefni í námi",inputvalue[key].val2[3]);
  
 
   questionArray3 = [];
   questionArray3[0] = new question(comment3_1,	"Ég mæti vel í vinnu og á réttum tíma"	,inputvalue[key].val3[0]);
   questionArray3[1]= new question(comment3_2,	"Ég viðheld áhuga mínum í starfi",inputvalue[key].val3[1]);
   questionArray3[2] = new question(comment3_3,"Það er hægt að treysta á mig í starfi",inputvalue[key].val3[2]);
   questionArray3[3] = new question(comment3_4,"Ég tek ábyrgð á starfi mínu á vinnustað",inputvalue[key].val3[3]);
 
 
   questionArray4 = [];
   questionArray4[0] = new question(comment4_1,"Ég er sveigjanleg/ur varðandi staðsetningu vinnustaðar"	,inputvalue[key].val4[0]);
   questionArray4[1]= new question(comment4_2,"Ég sýni frumkvæði í starfi",inputvalue[key].val4[1]);
   questionArray4[2] = new question(comment4_3,"Ég get aðlagað mig að mismunandi aðstæðum á vinnustað ",inputvalue[key].val4[2]);
   questionArray4[3] = new question(comment4_4,"Ég er skapandi/Ég hugsa út fyrir kassann",inputvalue[key].val4[3]);
 

   questionArray5 = [];
   questionArray5[0] = new question(comment5_1,"Ég gefst ekki upp, ég reyni aftur"	,inputvalue[key].val5[0]);
   questionArray5[1] = new question(comment5_2,"Ég tek ábyrgð á mínum aðstæðum  "	,inputvalue[key].val5[1]);
   questionArray5[2] = new question(comment5_3,"Ég er lausnamiðuð/aður"	,inputvalue[key].val5[2]);
   questionArray5[3] = new question(comment5_4,"Ég tekst á við mótlæti "	,inputvalue[key].val5[3]);
 
   questionArray6 = [];
   questionArray6[0] = new question(comment6_1,"Ég tel mig hafa þá hæfni sem til þarf til að fara á vinnumarkað"	,inputvalue[key].val6[0]);
   questionArray6[1]= new question(comment6_2,	"Ég vil þróa færni mína betur til þess að fá starf",inputvalue[key].val6[1]);
   questionArray6[2] = new question(comment6_3,"Það sem ég læri í starfi nýtist mér víða",inputvalue[key].val6[2]);
   questionArray6[3] = new question(comment6_4,"Ég leysi verkefni af nákvæmni",inputvalue[key].val6[3]);
   questionArray6[4] = new question(comment6_5,"Ég sinni starfi mínu vel",inputvalue[key].val6[4]);
  
   var prop = [questionArray,questionArray2,questionArray3,questionArray4,questionArray5,questionArray6];
  
   profile_array.push(prop);
 
    }
let taxo = ['Ikke vigtigt','Vil gerne','PrÃ¸ver','I gang','Godt pÃ¥ vej','Styr pÃ¥ det'];