Blockly.Blocks['block_angel_call_to_action_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Call to Action 1");
    this.appendDummyInput()
        .appendField("Caption")
        .appendField(new Blockly.FieldTextInput("Angel Blocks"), "h1_caption");
    this.appendDummyInput()
        .appendField("SubText")
        .appendField(new Blockly.FieldTextInput("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."), "paragraph_content");
    this.appendDummyInput()
        .appendField("Button Caption")
        .appendField(new Blockly.FieldTextInput("Button"), "button_caption");
    this.appendDummyInput()
        .appendField("Button Link")
        .appendField(new Blockly.FieldTextInput("https://www.google.com"), "button_link");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.JavaScript['block_angel_call_to_action_1'] = function(block) {
  var h1_caption = block.getFieldValue('h1_caption');
  var paragraph_content = block.getFieldValue('paragraph_content');
  var button_caption = block.getFieldValue('button_caption');
  var button_link = block.getFieldValue('button_link');



  var myCode = `    
    <div class="content004">
        <div class="container-fluid content004_inner text-center">
            <div class="row align-middle">
                <div class="col-md-12 align-self-center">
                    <h1>${h1_caption}</h1>
                    <p class="text-h3">${paragraph_content}</p>
                    <p class="mt-4 mb-5"><a class="btn btn-danger" href="${button_link}">${button_caption}</a></p>
                </div>

                <div class="col-md-0 content004-right">

                </div>

            </div>
        </div>
    </div>`;


  
  //var result = (myCode+'***'+myStyle);
   
  //console.log(resultJson);
           
  return myCode;
  //return code;
};