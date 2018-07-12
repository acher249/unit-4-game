`use strict`;

function $(id) {
  return document.getElementById(id);
}

var pickedChampion = false;
var pickedOpponent = false;

//this is to feed them objects.
var champion = "";
var currentOpponent = "";

//turn off drop zone 3
var dropZone3 = $("drop-target3");
dropZone3.style.display = "none";
var arrow = document.getElementById("arrowImageTop");
arrow.style.display = "block";
var fightButton = document.getElementById("btn-primary");
fightButton.style.display = "none";


dragula([$('drag-elements'), $('drop-target2'), $('drop-target3')], {
  revertOnSpill: true
}).on('drop', function(el) {

  // console.log("Drop is working");

  // Drop Zone 3 // this if must come first so that picked champ is not true when it hits it
  if ($('drop-target3').hasChildNodes = true && pickedChampion == true) {

    console.log("Picked Opponent");
    setTimeout(pickedOpponentFn, 1);

    // after opponent dies make sure that we remove inactive class 
    //so that a new opponent
    document.getElementById("drop-target3").classList.add("inactiveLink");

    //Also make enemies inactive until first opponent is dead..
    document.getElementById("drag-elements").classList.add("inactiveLink");

    arrow.style.display = "none";
    fightButton.style.display = "block";

    //***************************************************************************/
    
    //Check Opponent you chose to be current Opponent
    if ($("#drop-target3").find("#ObiWanHealthID").length > 0){ 
      console.log("Your Opponent is ObiWan");
      currentOpponent = "Obiwan"
    }
    else if ($("#drop-target3").find("#LukeHealthID").length > 0){ 
      console.log("Your Opponent is Luke Skywalker");
      currentOpponent = "Luke"
    }
    else if ($("#drop-target3").find("#VadarHealthID").length > 0){ 
      console.log("Your Opponent is Darth Vadar");
      currentOpponent = "Vadar"
    }
    else if($("#drop-target3").find("#MalHealthID").length > 0){ 
      console.log("Your Opponent is Darth Mal");
      currentOpponent = "Mal"
    };

  }  

  // ** 
  if (pickedChampion == false) {

    console.log("Picked Champion");
    setTimeout(pickedChampionFn, 1);
    pickedChampion = true;

    $(".changeText").text("Enemies");
    //turn on drop zone 3
    dropZone3.style.display = "block";

    // want to just make the margin top larger.. but can't grab it .. says null
    // document.getElementsById("drop-targetArrowTop").style.margin-top = someNumber;

    // turn background red
    document.getElementById("drag-elements").style.backgroundColor = "#eda1a1";

    // This makes
    document.getElementById("drop-target2").classList.add("inactiveLink");

    //*******************************************************************************/

    //Check which Champion you chose
    if ($("#drop-target2").find("#ObiWanHealthID").length > 0){ 
      console.log("Your Champion is ObiWan");
      champion = "Obiwan"
    }
    else if ($("#drop-target2").find("#LukeHealthID").length > 0){ 
      console.log("Your Champion is Luke Skywalker");
      champion = "Luke"
    }
    else if ($("#drop-target2").find("#VadarHealthID").length > 0){ 
      console.log("Your Champion is Darth Vadar");
      champion = "Vadar"
    }
    else if($("#drop-target2").find("#MalHealthID").length > 0){ 
      console.log("Your Champion is Darth Mal");
      champion = "Mal"
    };
  }

  

});


function pickedChampionFn() {
  pickedChampion = true;
  swal({
        title: "You Picked Champion: " + champion,
        icon: "info",
        text: "Now pick your first opponent!",
        button: "Continue", 
      });  
}

function pickedOpponentFn() {
  pickedOpponent = true;
  swal({
        title: "You Picked Opponent: " + currentOpponent,
        icon: "info",
        text: "Now you need to fight him!",
        button: "Continue", 
      });  
}


//**********************  Obiwan Object  ****************************/
var ObiWan = {
  name: "ObiWan",
  health: 100,
  attackPower: 75,
  counterAttackPower: 20,

  ConnectObjToHTML: function (){
    var obiwanHealthID = document.getElementById("ObiWanHealthID");
    obiwanHealthID.textContent = "Health: " + this.health;
  },

  AttackLuke: function(LukeSkywalker) {

    LukeSkywalker.health = LukeSkywalker.health - this.attackPower;
    this.health = this.health - LukeSkywalker.counterAttackPower;
    this.health = this.health - LukeSkywalker.attackPower;
    LukeSkywalker.health = LukeSkywalker.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    LukeSkywalker.ConnectObjToHTML();
  },

  AttackVadar: function(DarthVadar) {

    DarthVadar.health = DarthVadar.health - this.attackPower;
    this.health = this.health - DarthVadar.counterAttackPower;
    this.health = this.health - DarthVadar.attackPower;
    DarthVadar.health = DarthVadar.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    DarthVadar.ConnectObjToHTML();
  },

  AttackMal: function(DarthMal) {

    DarthMal.health = DarthMal.health - this.attackPower;
    this.health = this.health - DarthMal.counterAttackPower;
    this.health = this.health - DarthMal.attackPower;
    DarthMal.health = DarthMal.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    DarthMal.ConnectObjToHTML();
  }
};

//**********************  Luke Object  *******************************/
var LukeSkywalker = {
  name: "LukeSkywalker",
  health: 100,
  attackPower: 80,
  counterAttackPower: 25,

  ConnectObjToHTML: function (){
    var LukeHealthID = document.getElementById("LukeHealthID");
    LukeHealthID.textContent = "Health: " + this.health;
  },

  AttackObiWan: function(Obiwan) {

    Obiwan.health = Obiwan.health - this.attackPower;
    this.health = this.health - Obiwan.counterAttackPower;
    this.health = this.health - Obiwan.attackPower;
    Obiwan.health = Obiwan.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    Obiwan.ConnectObjToHTML();
  },

  AttackVadar: function(DarthVadar) {

    DarthVadar.health = DarthVadar.health - this.attackPower;
    this.health = this.health - DarthVadar.counterAttackPower;
    this.health = this.health - DarthVadar.attackPower;
    DarthVadar.health = DarthVadar.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    DarthVadar.ConnectObjToHTML();
  },

  AttackMal: function(DarthMal) {

    DarthMal.health = DarthMal.health - this.attackPower;
    this.health = this.health - DarthMal.counterAttackPower;
    this.health = this.health - DarthMal.attackPower;
    DarthMal.health = DarthMal.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    DarthMal.ConnectObjToHTML();
  }
};

//**********************  Darth Vadar Object  **********************/
var DarthVadar = {
  name: "DarthVadar",
  health: 100,
  attackPower: 60,
  counterAttackPower: 15,

  ConnectObjToHTML: function (){
    var VadarHealthID = document.getElementById("VadarHealthID");
    VadarHealthID.textContent = "Health: " + this.health;
  },

  AttackObiWan: function(Obiwan) {

    Obiwan.health = Obiwan.health - this.attackPower;
    this.health = this.health - Obiwan.counterAttackPower;
    this.health = this.health - Obiwan.attackPower;
    Obiwan.health = Obiwan.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    Obiwan.ConnectObjToHTML();
  },

  AttackLuke: function(LukeSkywalker) {

    LukeSkywalker.health = LukeSkywalker.health - this.attackPower;
    this.health = this.health - LukeSkywalker.counterAttackPower;
    this.health = this.health - LukeSkywalker.attackPower;
    LukeSkywalker.health = LukeSkywalker.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    LukeSkywalker.ConnectObjToHTML();
  },

  AttackMal: function(DarthMal) {

    DarthMal.health = DarthMal.health - this.attackPower;
    this.health = this.health - DarthMal.counterAttackPower;
    this.health = this.health - DarthMal.attackPower;
    DarthMal.health = DarthMal.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    DarthMal.ConnectObjToHTML();
  }
};

//**********************  Darth Mal Object  ***********************/
var DarthMal = {
  name: "DarthMal",
  health: 100,
  attackPower: 70,
  counterAttackPower: 12,

  ConnectObjToHTML: function (){
    var MalHealthID = document.getElementById("MalHealthID");
    MalHealthID.textContent = "Health: " + this.health;
  },

  AttackObiWan: function(Obiwan) {

    Obiwan.health = Obiwan.health - this.attackPower;
    this.health = this.health - Obiwan.counterAttackPower;
    this.health = this.health - Obiwan.attackPower;
    Obiwan.health = Obiwan.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    Obiwan.ConnectObjToHTML();
  },

  AttackLuke: function(LukeSkywalker) {

    LukeSkywalker.health = LukeSkywalker.health - this.attackPower;
    this.health = this.health - LukeSkywalker.counterAttackPower;
    this.health = this.health - LukeSkywalker.attackPower;
    LukeSkywalker.health = LukeSkywalker.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    LukeSkywalker.ConnectObjToHTML();
  },

  AttackVadar: function(DarthVadar) {

    DarthVadar.health = DarthVadar.health - this.attackPower;
    this.health = this.health - DarthVadar.counterAttackPower;
    this.health = this.health - DarthVadar.attackPower;
    DarthVadar.health = DarthVadar.health - this.counterAttackPower;

    this.ConnectObjToHTML();
    DarthVadar.ConnectObjToHTML();
  }
};

//*********************************************************************/

//Connect objects to HTML Health Divs
ObiWan.ConnectObjToHTML();
LukeSkywalker.ConnectObjToHTML();
DarthVadar.ConnectObjToHTML();
DarthMal.ConnectObjToHTML();

//Obiwan Luke Vadar Mal
function Attack(){

  //This is calling all of the methods in the character objects
  //if champion is Obiwan
  if(champion === "Obiwan" && currentOpponent === "Luke"){
    ObiWan.AttackLuke();
  }
  else if (champion === "Obiwan" && currentOpponent === "Vadar"){
    ObiWan.AttackVadar();
  }
  else if (champion === "Obiwan" && currentOpponent === "Mal"){
    ObiWan.AttackMal();
  }

  //if champion is Luke
  else if(champion === "Luke" && currentOpponent === "Obiwan"){
    LukeSkywalker.AttackObiWan();
  }
  else if (champion === "Luke" && currentOpponent === "Vadar"){
    LukeSkywalker.AttackVadar();
  }
  else if (champion === "Luke" && currentOpponent === "Mal"){
    LukeSkywalker.AttackMal();
  }

  //if champion is Darth Vadar
  else if(champion === "Vadar" && currentOpponent === "Obiwan"){
    DarthVadar.AttackObiWan();
  }
  else if (champion === "Vadar" && currentOpponent === "Luke"){
    DarthVadar.AttackLuke();
  }
  else if (champion === "Vadar" && currentOpponent === "Mal"){
    DarthVadar.AttackMal();
  }

  //if champion is Darth Mal
  else if(champion === "Mal" && currentOpponent === "Obiwan"){
    DarthMal.AttackObiWan();
  }
  else if (champion === "Mal" && currentOpponent === "Luke"){
    DarthMal.AttackLuke();
  }
  else if (champion === "Mal" && currentOpponent === "Vadar"){
    DarthMal.AttackVadar();
  }

}

//make attack on click
Attack();


// Check if Other character.health is greater than 0 if not, dead.
// Next opponenet..

//Call the function inside
//ObiWan.Attack(other character);
//console.log(ObiWan.Name);