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
      // instructions to question Målsætning
      comment1_1 = "At turde tænke nyt, at drømme og sætte mål ";
      comment1_2 = "Gælder også mindre beslutninger som fx at møde ind om morgenen ";
      comment1_3 = "Gælder mindre og større valg ";
      comment1_4 = "På sigt også fokus på en uddannelsesplan eller en plan for at få et arbejde ";
      comment1_5 ="Omhandler valg der bringer den unge nærmere sine mål";
     // Instructions to Motivation
      comment2_1 = "Udholdenhed, disciplin";
      comment2_2 = "Være pålidelig, gøre det der er aftalt";
      comment2_3 = "Levere det aftalte hhv. søge aktivt efter løsninger, også hvis der opstår problemer ";
      comment2_4 = "Gælder alle livets områder"; comment2_5 ="Komme til tiden, komme hver dag eller hver gang, overholde mødeaftaler og være mentalt til stede";
      // Instructions to Robusthed
      comment3_1 = "Vedholdenhed, arbejde med frustrationer";
      comment3_2 = "Se de muligheder der kan bringe den unge videre";
      comment3_3 = "Konstruktive relationer, gode fællesskaber, understøttende på vejen mod målet ";
      comment3_4 = "Række ud efter støtte ved problemer eller for at komme videre"; comment3_5 ="Forholde sig til sagen, forblive ”på egen banehalvdel”";
      // Instructions to Fleksibilitet
      comment4_1 = "Identificere problemet eller muligheden og tage initiativ";
      comment4_2 = "Generelt, ikke ubetinget tilpasning i enhver situation";
      comment4_3 = "Også efter ordre eller pga. udefrakommende omstændigheder";
      comment4_4 = "Reflektere over alternativer og afklare omstændigheder for ændringer"; comment4_5 ="Når nødvendigt eller ønskværdigt. I praktikcentre: EMMA-kriteriet ”geografisk mobilitet”";
        // Instructions to Sociale normer
      comment5_1 = "OBS gælder ikke ved destruktive forhold på arbejdspladsen";
      comment5_2 = "OBS gælder ikke ved destruktive forhold på arbejdspladsen";
      comment5_3 = "I bred forstand og samtidig være opmærksom på eget ståsted";
      comment5_4 = "I bred forstand og under hensyntagen til egne grænser"; comment5_5 ="Omhandler konflikthåndtering i bred forstand";
      comment5_6 ="Reflektere over forhold på arbejdspladsen";
        // Instructions to Min faglighed
      comment6_1 = "Den fornødne faglighed på det givne niveau. I praktikcentre: EMMA-kriteriet ”Fagligt egnet”";
      comment6_2 = "Kontekstafhængig: fortsætte på den faglige vej, ikke falde fra, ”faglig stabilitet”";
      comment6_3 = "Kontekstafhængig: faglig nysgerrighed, lysten til at lære, efter- og videreuddannelse";
      comment6_4 = "Kontekstafhængig: at kunne skifte spor. I praktikcentre: EMMA-kriteriet ”Faglig mobilitet” "; 
      comment6_5 = "Fx fritidsjob, job, praktik eller arbejdsopgaver. I praktikcentre: EMMA-kriteriet ”Aktivt søgende” ” "; 

   }
   questionArray[0] = new question(comment1_1,"�g a�laga mig a� hef�um vinnusta�a (vinnusta�amenning)",inputvalue[key].val1[0]);
   questionArray[1]=  new question(comment1_2,"Framkoma m�n og heg�un er � samr�mi vi� vi�mi� og �arfir vinnusta�a",inputvalue[key].val1[1]);
   questionArray[2] = new question( comment1_3,"�g a�laga mig a� skipulagi og reglum vinnusta�a",inputvalue[key].val1[2]);
   questionArray[3] = new question( comment1_4,"�g � au�velt me� a� vinna me� �l�kum einstaklingum vi� �l�kar a�st��ur",inputvalue[key].val1[3]);
   questionArray[4] = new question(comment1_5,"�g legg mig fram vi� a� afla �eirra uppl�singa sem �arf til a� sinna starfi m�nu",inputvalue[key].val1[4]);
   questionArray[5] = new question(comment1_5,"�g hef �ekkingu � �slenskum vinnumarka�i (hva� er veri� a� spyrja um?)",inputvalue[key].val1[5]);

   
   questionArray2 = [];
   questionArray2[0] = new question(comment2_1,"�g er tilb�in/n a� setja m�r markmi� um framt��ina",inputvalue[key].val2[0]);
   questionArray2[1]= new question(comment2_2,"�g geri m�r grein fyrir �v� a� �kvar�anir m�nar hafa �hrif � framt��ina",inputvalue[key].val2[1]);
   questionArray2[2]= new question(comment2_3,"�g er tilb�in/n a� kanna �� n�ms- og starfsm�guleika sem �g hef �r a� velja",inputvalue[key].val2[2]);
   questionArray2[3]= new question(comment2_4,"�g er tilb�in/n � �skoranir og krefjandi verkefni � n�mi",inputvalue[key].val2[3]);
  
 
   questionArray3 = [];
   questionArray3[0] = new question(comment3_1,	"�g m�ti vel � vinnu og � r�ttum t�ma"	,inputvalue[key].val3[0]);
   questionArray3[1]= new question(comment3_2,	"�g vi�held �huga m�num � starfi",inputvalue[key].val3[1]);
   questionArray3[2] = new question(comment3_3,"�a� er h�gt a� treysta � mig � starfi",inputvalue[key].val3[2]);
   questionArray3[3] = new question(comment3_4,"�g tek �byrg� � starfi m�nu � vinnusta�",inputvalue[key].val3[3]);
 
 
   questionArray4 = [];
   questionArray4[0] = new question(comment4_1,"�g er sveigjanleg/ur var�andi sta�setningu vinnusta�ar"	,inputvalue[key].val4[0]);
   questionArray4[1]= new question(comment4_2,"�g s�ni frumkv��i � starfi",inputvalue[key].val4[1]);
   questionArray4[2] = new question(comment4_3,"�g get a�laga� mig a� mismunandi a�st��um � vinnusta� ",inputvalue[key].val4[2]);
   questionArray4[3] = new question(comment4_4,"�g er skapandi/�g hugsa �t fyrir kassann",inputvalue[key].val4[3]);
 

   questionArray5 = [];
   questionArray5[0] = new question(comment5_1,"�g gefst ekki upp, �g reyni aftur"	,inputvalue[key].val5[0]);
   questionArray5[1] = new question(comment5_2,"�g tek �byrg� � m�num a�st��um  "	,inputvalue[key].val5[1]);
   questionArray5[2] = new question(comment5_3,"�g er lausnami�u�/a�ur"	,inputvalue[key].val5[2]);
   questionArray5[3] = new question(comment5_4,"�g tekst � vi� m�tl�ti "	,inputvalue[key].val5[3]);
 
   questionArray6 = [];
   questionArray6[0] = new question(comment6_1,"�g tel mig hafa �� h�fni sem til �arf til a� fara � vinnumarka�"	,inputvalue[key].val6[0]);
   questionArray6[1]= new question(comment6_2,	"�g vil �r�a f�rni m�na betur til �ess a� f� starf",inputvalue[key].val6[1]);
   questionArray6[2] = new question(comment6_3,"�a� sem �g l�ri � starfi n�tist m�r v��a",inputvalue[key].val6[2]);
   questionArray6[3] = new question(comment6_4,"�g leysi verkefni af n�kv�mni",inputvalue[key].val6[3]);
   questionArray6[4] = new question(comment6_5,"�g sinni starfi m�nu vel",inputvalue[key].val6[4]);
  
   var prop = [questionArray,questionArray2,questionArray3,questionArray4,questionArray5,questionArray6];
  
   profile_array.push(prop);
 
    }
let taxo = ['Ikke vigtigt','Vil gerne','Prøver','I gang','Godt på vej','Styr på det'];