`use strict`;

// *****************   BUG    ****************//
// this is messing everything up. causing nulls
// can't do click events..
function $(id) {
  return document.getElementById(id);
}


var pickedChampion = false;
var pickedOpponent = false;

//this is to feed them objects.
var champion = "";
var currentOpponent = "";
var currentOpponentID = "";

//turn off drop zone 3
var dropZone3 = $("drop-target3");
dropZone3.style.display = "none";
var arrow = document.getElementById("arrowImageTop");
arrow.style.display = "inline";
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
    document.getElementById("drag-elements").classList.add("inactiveLink");

    arrow.style.display = "none";
    fightButton.style.display = "block";

    //***************************************************************************/
    
    //Check Opponent you chose to be current Opponent
    if ($("#drop-target3").find("#ObiWanHealthID").length > 0){ 
      console.log("Your Opponent is ObiWan");
      currentOpponent = "Obiwan"
      currentOpponentID ="obiwan";
    }
    else if ($("#drop-target3").find("#LukeHealthID").length > 0){ 
      console.log("Your Opponent is Luke Skywalker");
      currentOpponent = "Luke"
      currentOpponentID ="luke";
    }
    else if ($("#drop-target3").find("#VadarHealthID").length > 0){ 
      console.log("Your Opponent is Darth Vadar");
      currentOpponent = "Vadar"
      currentOpponentID ="vadar";
    }
    else if($("#drop-target3").find("#MalHealthID").length > 0){ 
      console.log("Your Opponent is Darth Mal");
      currentOpponent = "Mal"
      currentOpponentID ="mal";
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
  health: 105,
  attackPower: 17,
  counterAttackPower: 7,

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
  health: 120,
  attackPower: 13,
  counterAttackPower: 4,

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
  health: 90,
  attackPower: 12,
  counterAttackPower: 5,

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
  health: 85,
  attackPower: 7,
  counterAttackPower: 3,

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
    ObiWan.AttackLuke(LukeSkywalker);
  }
  else if (champion === "Obiwan" && currentOpponent === "Vadar"){
    ObiWan.AttackVadar(DarthVadar);
  }
  else if (champion === "Obiwan" && currentOpponent === "Mal"){
    ObiWan.AttackMal(DarthMal);
  }

  //if champion is Luke
  else if(champion === "Luke" && currentOpponent === "Obiwan"){
    LukeSkywalker.AttackObiWan(ObiWan);
  }
  else if (champion === "Luke" && currentOpponent === "Vadar"){
    LukeSkywalker.AttackVadar(DarthVadar);
  }
  else if (champion === "Luke" && currentOpponent === "Mal"){
    LukeSkywalker.AttackMal(DarthMal);
  }

  //if champion is Darth Vadar
  else if(champion === "Vadar" && currentOpponent === "Obiwan"){
    DarthVadar.AttackObiWan(ObiWan);
  }
  else if (champion === "Vadar" && currentOpponent === "Luke"){
    DarthVadar.AttackLuke(LukeSkywalker);
  }
  else if (champion === "Vadar" && currentOpponent === "Mal"){
    DarthVadar.AttackMal(DarthMal);
  }

  //if champion is Darth Mal
  else if(champion === "Mal" && currentOpponent === "Obiwan"){
    DarthMal.AttackObiWan(ObiWan);
  }
  else if (champion === "Mal" && currentOpponent === "Luke"){
    DarthMal.AttackLuke(LukeSkywalker);
  }
  else if (champion === "Mal" && currentOpponent === "Vadar"){
    DarthMal.AttackVadar(DarthVadar);
  }

}

// Check if Other character.health is greater than 0 if not, dead.
var fightButton = document.getElementById("btn-primary"); 

fightButton.onclick = function(){
  console.log("Clicked");

  Attack();

  if(ObiWan.health <= 0) {
    if (champion === "Obiwan"){
      console.log("Obiwan Died: You Lose");
      YouLose();
      //make fightButton not interactable
    }
    else{
      console.log("You have defeated your opponent: " + currentOpponent);
      console.log("current Opponent ID: " + currentOpponentID);
      //Move Opponent Div to Dead Characters Div
      YouKilled();
      document.getElementById('drop-target').appendChild(
        document.getElementById(currentOpponentID)
      );
      //Take off inactiveLink class on DropZone3 and Drag-Elements zone so that we can drag.
      document.getElementById("drop-target3").classList.remove("inactiveLink");
      document.getElementById("drag-elements").classList.remove("inactiveLink");
    }
  }
  else if(LukeSkywalker.health <= 0) {
    if (champion === "Luke"){
      console.log("Luke Skywalker Died: You Lose");
      YouLose();
    }
    else{
      console.log("You have defeated your opponent: " + currentOpponent);
      console.log("current Opponent ID: " + currentOpponentID);
      //Move Opponent Div to Dead Characters Div
      YouKilled();
      document.getElementById('drop-target').appendChild(
        document.getElementById(currentOpponentID)
      );
      document.getElementById("drop-target3").classList.remove("inactiveLink");
      document.getElementById("drag-elements").classList.remove("inactiveLink");
    }
  }
  else if(DarthVadar.health <= 0) {
    if (champion === "Vadar"){
      console.log("Darth Vadar Died: You Lose");
      YouLose();
    }
    //shouldnt get into this else statement
    else{
      console.log("You have defeated your opponent: " + currentOpponent);
      console.log("current Opponent ID: " + currentOpponentID);
      //Move Opponent Div to Dead Characters Div
      YouKilled();
      document.getElementById('drop-target').appendChild(
        document.getElementById(currentOpponentID)
      );
      document.getElementById("drop-target3").classList.remove("inactiveLink");
      document.getElementById("drag-elements").classList.remove("inactiveLink");
    }
  }
  else if(DarthMal.health <= 0) {
    if (champion === "Mal"){
      console.log("Darth Mal Died: You Lose");
      YouLose();
    }
    else{
      console.log("You have defeated your opponent: " + currentOpponent);
      console.log("current Opponent ID: " + currentOpponentID);
      //Move Opponent Div to Dead Characters Div
      YouKilled();
      document.getElementById('drop-target').appendChild(
        document.getElementById(currentOpponentID)
      );
      document.getElementById("drop-target3").classList.remove("inactiveLink");
      document.getElementById("drag-elements").classList.remove("inactiveLink");
    }
  }

};

function YouLose(){
  swal({
    title: "You Lose",
    icon: "error",
    text: "You will have to play again",
    button: "Continue", 
  });
}

function YouKilled(){
  swal({
    title: "You Killed: " + currentOpponent,
    icon: "success",
    text: "Now pick your next opponent",
    button: "Continue", 
  });
}