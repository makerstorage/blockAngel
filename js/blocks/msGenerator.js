Blockly.JavaScript['glyphiconpanel'] = function(block) {

  var text_icon = block.getFieldValue('Icon');
  var colour_color = block.getFieldValue('Color');
  var text_caption = block.getFieldValue('Caption');
  var text_subtext = block.getFieldValue('SubText');

  var template =`
  <div style="text-align: center;margin: 25px 0;" >
   <span class="glyphicon {{ text_icon }} logo-small" style="color: {{ colour_color }}; font-size: 100px;">              </span>
   <h4>{{ text_caption }}</h4>
   <p>{{ text_subtext }}</p>
</div>
      `;

  var myJson = '{"text_icon": "'+text_icon+'",'+
               '"colour_color": "'+colour_color+'",'+
               '"text_caption": "'+text_caption+'",'+
               '"text_subtext": "'+text_subtext+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));     

  return rendered;
};


Blockly.JavaScript['video'] = function(block) {
  var text_src = block.getFieldValue('src');
  // TODO: Assemble JavaScript into code variable.
   var template =`
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="{{text_src}}"></iframe>
  </div>`;

  var myJson = '{"text_src": "'+text_src+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));          

  //alert (rendered);
  return rendered;
};











Blockly.JavaScript['panel1'] = function(block) {
  var text_caption = block.getFieldValue('caption');
  var text_subtext = block.getFieldValue('subtext');
  // TODO: Assemble JavaScript into code variable.

  /*var template = '<div class="container">'+
    '<div class="jumbotron">'+
      '<h1>{{ text_caption }}</h1>'+ 
      '<p>{{ text_subtext }}</p>'+ 
    '</div>'+
  '</div>';*/

   var template = '<div class="jumbotron">'+
      '<h1>{{ text_caption }}</h1>'+ 
      '<p>{{ text_subtext }}</p>'+ 
    '</div>';

  var myJson = '{"text_caption": "'+text_caption+'",'+
            '"text_subtext": "'+text_subtext+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));          

  //alert (rendered);
  return rendered;
};

Blockly.JavaScript['container2'] = function(block) {
  var statements_leftside = Blockly.JavaScript.statementToCode(block, 'leftside');
  var statements_rightside = Blockly.JavaScript.statementToCode(block, 'rightside');
  // TODO: Assemble JavaScript into code variable.
  var code = 'container2\n'+statements_leftside+'\n'+statements_rightside+'\n';
  return code;
};

Blockly.JavaScript['webpage'] = function(block) {
  var value_baseurl = Blockly.JavaScript.valueToCode(block, 'baseUrl', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_header = Blockly.JavaScript.statementToCode(block, 'header');
  var statements_body = Blockly.JavaScript.statementToCode(block, 'body');
  var statements_footer = Blockly.JavaScript.statementToCode(block, 'footer');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  '{\n'+
     '\"webpage\": {\n'+
            '\t\"baseUrl\":\"' +value_baseurl+'\",\n'+
            '\t\"title\":\"' +value_title+ '\",\n'+
            '\t\"header\":\"' +statements_header+ '\",\n'+
            '\t\"body\:\"' +statements_body+ '\",\n'+
            '\t\"footer\":\"' +statements_footer+ 
      '\n}';      


  
  return code;
};

Blockly.JavaScript['menuitem'] = function(block) {
  var value_caption = Blockly.JavaScript.valueToCode(block, 'caption', Blockly.JavaScript.ORDER_ATOMIC);
  var value_link = Blockly.JavaScript.valueToCode(block, 'link', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  
   var template = '<li class="nav-item">'+
                  '<a class="nav-link" href="{{ value_link }}">{{ value_caption }}</a>'+
                  '</li>';
    var myJson = '{"value_caption": "'+value_caption+'",'+
                  '"value_link": "'+value_link+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));          

  //alert (rendered);
  return rendered;
};

Blockly.JavaScript['button'] = function(block) {
  var text_caption = block.getFieldValue('caption');

  var template = ' <button class="btn btn-danger navbar-btn">{{ text_caption }}</button>';
  
  var myJson = '{"text_caption": "'+text_caption+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));     

  return rendered;
};

Blockly.JavaScript['link'] = function(block) {
  var text_caption = block.getFieldValue('caption');

  var template = `<li class="nav-item">
                  <a class="nav-link" href="{{ text_caption }}">{{ text_caption }}</a>
                  </li>`;
  var myJson = '{"text_caption": "'+text_caption+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));     

  return rendered;
};



Blockly.JavaScript['menu'] = function(block) {
  var dropdown_menutype = block.getFieldValue('menutype');
  var statements_menuitems = Blockly.JavaScript.statementToCode(block, 'menuitems');
  // TODO: Assemble JavaScript into code variable.
  
   var template = '<nav class="navbar navbar-inverse">'+
      
                     '<ul class="nav navbar-nav">'+
                       statements_menuitems +
                     '</ul>'+
             
                  '</nav>';



  var code = template;
  return code;
};

Blockly.JavaScript['container1'] = function(block) {
  var statements_center = Blockly.JavaScript.statementToCode(block, 'center');
  // TODO: Assemble JavaScript into code variable.
  var code = 'container1\n'+statements_center+'\n';
  return code;
};

Blockly.JavaScript['image'] = function(block) {
  var dropdown_shape = block.getFieldValue('shape');
  var text_src = block.getFieldValue('src');
  var text_width = block.getFieldValue('width');
  var text_height = block.getFieldValue('height');

  // TODO: Assemble JavaScript into code variable.
  var template = '<img src="{{ text_src }}" class="{{dropdown_shape}}" width="{{text_width}}" height="{{text_height}}">';
                  
  var myJson = '{"text_src": "'+text_src+'",'+
               '"dropdown_shape": "'+dropdown_shape+'",'+
               '"text_width": "'+text_width+'",'+
               '"text_height": "'+text_height+'"}';

  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, JSON.parse(myJson));     

  return rendered;
};

Blockly.JavaScript['goolemaps'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'goolemaps\n';
  return code;
};

Blockly.JavaScript['disqus'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'disqus\n';
  return code;
};

Blockly.JavaScript['googleanalitics'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'googleanalitics\n';
  return code;
};

Blockly.JavaScript['slider'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'slider\n'+statements_name+'\n';
  return code;
};

Blockly.JavaScript['simpletext'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'simpletext\n';
  return code;
};