Blockly.Blocks['block_angel_baseframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("html");
    this.appendDummyInput()
        .appendField("head");
    this.appendStatementInput("head")
        .setCheck("header");
    this.appendDummyInput()
        .appendField("body");
    this.appendStatementInput("body")
        .setCheck("html");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("http://www.w3schools.com/tags/tag_html.asp");
  }
};



Blockly.Blocks['title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Title:")
        .appendField(new Blockly.FieldTextInput("New Page Title"), "title");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("http://www.w3schools.com/tags/tag_html.asp");
  }
};

// style

Blockly.Blocks['block_angel_style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("style");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("https://www.w3schools.com/tags/tag_style.asp");
  }
};


Blockly.Blocks['block_angel_css_class'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("selector")
        .appendField(new Blockly.FieldTextInput("className"), "CLASSNAME");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_angel_genericstyle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("property"), "property")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_angel_class'] = {
  init: function() {
    this.appendValueInput("inputClassName")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("className"), "NAME");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_angel_css_text_align'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text-align : ")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["center","center"], ["justify","justify"], ["initial","initial"], ["inherit","inherit"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-align.asp");
  }
};

Blockly.Blocks['block_angel_css_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["color","color"], ["background","background"], ["border-color","border-color"], ["caret-color","caret-color"], ["outline-color","outline-color"], ["text-decoration-color","text-decoration-color"]]), "property")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//style son

Blockly.Blocks['block_angel_paragraph'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("paragraph:")
        .appendField(new Blockly.FieldTextInput("This is Sample Text"), "text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_angel_div_with_css'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("attribute")
        .appendField("division");
    this.appendStatementInput("content")
        .setCheck("html");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("http://www.w3schools.com/tags/tag_html.asp");
  }
};




Blockly.Blocks['glyphiconpanel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Glyphicon Panel");
    this.appendDummyInput()
        .appendField("Icon")
        .appendField(new Blockly.FieldTextInput("glyphicon-off"), "Icon")
        .appendField("Icon Color")
        .appendField(new Blockly.FieldColour("#cc0000"), "Color");
    this.appendDummyInput()
        .appendField("Caption")
        .appendField(new Blockly.FieldTextInput("Power"), "Caption");
    this.appendDummyInput()
        .appendField("SubText")
        .appendField(new Blockly.FieldTextInput("Lorem ipsum dolor sit amet.."), "SubText");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("video");
    this.appendDummyInput()
        .appendField("src :")
        .appendField(new Blockly.FieldTextInput("https://www.youtube.com/embed/tgbNymZ7vqY"), "src");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['panel1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jumbotron")
        .appendField(new Blockly.FieldTextInput("Lorem"), "caption")
        .appendField("SubText")
        .appendField(new Blockly.FieldTextInput("Ipsum"), "subtext");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['container2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Container 2");
    this.appendStatementInput("leftside")
        .setCheck(null)
        .appendField("Left");
    this.appendStatementInput("rightside")
        .setCheck(null)
        .appendField("Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['webpage'] = {
  init: function() {
    this.appendValueInput("baseUrl")
        .setCheck(null)
        .appendField("BaseURL");
    this.appendValueInput("title")
        .setCheck(null)
        .appendField("Title");
    this.appendStatementInput("header")
        .setCheck(null)
        .appendField("Header");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("Body");
    this.appendStatementInput("footer")
        .setCheck(null)
        .appendField("Footer");
    this.setInputsInline(true);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['menuitem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Menu Item");
    this.appendValueInput("caption")
        .setCheck(null)
        .appendField("Caption");
    this.appendValueInput("link")
        .setCheck(null)
        .appendField("Link");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


 
Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button")
        .appendField(new Blockly.FieldTextInput("Submit"), "caption");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Link")
        .appendField(new Blockly.FieldTextInput("Home"), "caption");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Menu")
        .appendField(new Blockly.FieldDropdown([["NavBar","navbar"], ["SideBar Left","sidebarleft"], ["SideBar Right","sidebarright"]]), "menutype");
    this.appendStatementInput("menuitems")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['container1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Container 1");
    this.appendStatementInput("center")
        .setCheck(null)
        .appendField("Center");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("image")
        .appendField(new Blockly.FieldDropdown([["rounded","img-rounded"], ["circle","img-circle"], ["thumbnail","img-thumbnail"]]), "shape")
        .appendField("path")
        .appendField(new Blockly.FieldTextInput("img/"), "src");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width")
        .appendField(new Blockly.FieldTextInput(""), "width");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height")
        .appendField(new Blockly.FieldTextInput(""), "height");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['goolemaps'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Google Maps");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("longitude");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("latitude");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['disqus'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Disqus");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("disgus_Id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['googleanalitics'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Google Analitics")
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['slider'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slider");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Time");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['simpletext'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("Text");
    this.appendValueInput("font")
        .setCheck(null)
        .appendField("Font");
    this.appendValueInput("size")
        .setCheck(null)
        .appendField("Size");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};