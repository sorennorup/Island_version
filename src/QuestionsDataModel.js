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
   

 questionArray[0] = new question("","�g skil menningu innan vinnusta�a og a�laga mig a� henni",inputvalue[key].val1[0]);
 questionArray[1]= new question("","Framkoma m�n og heg�un er � samr�mi vi� vi�mi� og �arfir vinnusta�a ",inputvalue[key].val1[1]);
 questionArray[2] = new question( "","�g a�laga mig a� skipuriti og reglum vinnusta�a ",inputvalue[key].val1[2]);
 questionArray[3] = new question("","�g � au�velt me� a� vinna me� �l�kum einstaklingum vi� �l�kar a�st��ur",inputvalue[key].val1[3]);
 questionArray[4] = new question("","�g legg mig fram vi� a� afla vi�eigandi uppl�singa ",inputvalue[key].val1[4]);
  
  questionArray2 = [];
 questionArray2[0] = new question("","�g er rei�ub�in/n a� setja m�r markmi� um framt��ina",inputvalue[key].val2[0]);
 questionArray2[1]= new question("","�g geri m�r grein fyrir �v� hvernig val mitt hefur �hrif � framt�� m�na",inputvalue[key].val2[1]);
 questionArray2[2]= new question("","�g er tilb�in/n a� kanna �� m�guleika sem �g hef �r a� velja",inputvalue[key].val2[1]);
 questionArray2[3]= new question("","�g er tilb�in/n � �skoranir og krefjandi verkefni � starfi",inputvalue[key].val2[1]);
 
 questionArray3 = [];

 questionArray3[0] = new question("",	"�g m�ti vel � vinnu og � r�ttum t�ma"	,inputvalue[key].val3[0]);
 questionArray3[1]= new question("",	"�g hvet sj�lfa/n mig �fram � starfi",inputvalue[key].val3[1]);
 questionArray3[2] = new question("","�g er �rei�anleg/ur � starfi",inputvalue[key].val3[2]);
 questionArray3[3] = new question("","�g tek �byrg� � vinnusta�",inputvalue[key].val3[3]);
 
questionArray4 = [];
 questionArray4[0] = new question("","�g er sveigjanleg/ur var�andi sta�setningu vinnusta�ar "	,inputvalue[key].val4[0]);
 questionArray4[1]= new question("","�g s�ni frumkv��i og framkv�mi � starfi",inputvalue[key].val4[1]);
 questionArray4[2] = new question("","�g get a�laga� mig a� mismunandi a�st��um � vinnusta� ",inputvalue[key].val4[2]);

 
questionArray5 = [];
 questionArray5[0] = new question("","�g gefst ekki upp, �g reyni aftur"	,inputvalue[key].val5[0]);
 questionArray5[1]= new question("",	"�g tek �byrg� � m�num a�st��um",inputvalue[key].val5[1]);
 questionArray5[2] = new question("","�g er lausnami�u�/a�ur",inputvalue[key].val5[2]);
  questionArray5[3] = new question("","�g tekst � vi� m�tl�ti",inputvalue[key].val5[3]);
 
 questionArray6 = [];
 questionArray6[0] = new question("","�g hef �� starfsh�fni sem til �arf "	,inputvalue[key].val6[0]);
 questionArray6[1]= new question("",	"�g met f�rni m�na me� tilliti til �eirrar h�fni sem ��rf er � fyrir tilteki� starf",inputvalue[key].val6[1]);
 questionArray6[2] = new question("","�g vil �r�a f�rni m�na betur",inputvalue[key].val6[2]);
  questionArray6[3] = new question("","�g n�ti starfsh�fni m�na v��a",inputvalue[key].val6[3]);
  questionArray6[4] = new question("","�g vinn af n�kv�mni",inputvalue[key].val6[4]);
  
  var prop = [questionArray,questionArray2,questionArray3,questionArray4,questionArray5,questionArray6];
  
  profile_array.push(prop);
 
    }
  
  
 