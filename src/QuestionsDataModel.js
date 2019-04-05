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
   

 questionArray[0] = new question("","Opfanger og følger arbejdspladsens kultur.",inputvalue[key].val1[0]);
 questionArray[1]= new question("","Udviser passende fremtoning i forhold til arbejdspladsens normer og behov",inputvalue[key].val1[1]);
 questionArray[2] = new question( "","Indgår i arbejdspladsens hierarki og regler",inputvalue[key].val1[2]);
 questionArray[3] = new question("","Accepterer forskellige væremåder",inputvalue[key].val1[3]);
  

  
  questionArray2 = [];
 questionArray2[0] = new question("Målsætning","?",inputvalue[key].val2[0]);
 questionArray2[1]= new question("Målsætning","?",inputvalue[key].val2[1]);
 
 questionArray3 = [];

 questionArray3[0] = new question("",	"Møder stabilt"	,inputvalue[key].val3[0]);
 questionArray3[1]= new question("",	"Fastholder motivation",inputvalue[key].val3[1]);
 questionArray3[2] = new question("","Udviser pålidelighed ",inputvalue[key].val3[2]);
 questionArray3[3] = new question("","Tager ansvar",inputvalue[key].val3[3]);
 
questionArray4 = [];
 questionArray4[0] = new question("","Udviser geografisk mobilitet."	,inputvalue[key].val4[0]);
 questionArray4[1]= new question("","Udviser initiativ og handlekraft",inputvalue[key].val4[1]);
 questionArray4[2] = new question("","Kan omstille sig til forskellige rammer",inputvalue[key].val4[2]);

 
questionArray5 = [];
 questionArray5[0] = new question("","Giver ikke op, prøver igen"	,inputvalue[key].val5[0]);
 questionArray5[1]= new question("",	"Tager ansvar for egen situation",inputvalue[key].val5[1]);
 questionArray5[2] = new question("","(Kan skelne mellem sagen og personen?)",inputvalue[key].val5[2]);
 
 questionArray6 = [];
 questionArray6[0] = new question("","Har de fornødne faglige grundfærdigheder"	,inputvalue[key].val6[0]);
 questionArray6[1]= new question("",	"Vil løbende videreudvikle sin faglighed",inputvalue[key].val6[1]);
 questionArray6[2] = new question("","Udviser faglig mobilitet",inputvalue[key].val6[2]);
  
  var prop = [questionArray,questionArray2,questionArray3,questionArray4,questionArray5,questionArray6];
  
  profile_array.push(prop);
 
    }
  
  
 