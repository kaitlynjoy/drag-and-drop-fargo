/* ---------- Icon Panel Dropdown ------------ */

/* Declare 3D Array for Icon Sets ['filename', 'Title'] */
// Line Break in title: \n

var choose = [['choose-arrow.png', 'Choose a Category']];

var dryPlants=[
                ['trees-american-linden.png', 'American Linden\n\nGreat Shade\nFlowers make best-in-the-world honey'],
                ['trees-maple.png', 'Silver Maple\n\nUsed by deer and rabbits\nGood Wind Protection'],
                ['trees-pine.png', 'Pine\n\nValued for ornamental landscaping\nNesting for Morning Doves'],
                ['bushes-arborvitae.png', 'Arborvitae\n\nGood for cover, nesting and food for animals\nPrefers moist soils'],
                ['bushes-buckthorn.png', 'Buckthorn\n\nVery attractive silvery-green foliage\nOrange fruit persists throughout winter'],
                ['bushes-burning-bush.png', 'Burning Bush\n\nScientific name is Latin for "winged"'],
                ['bushes-flame-amur-maple.png', 'Flame Amur Maple\n\nSeeds eaten by squirrels\nNative maples used for sugary sap'],
                ['bushes-suffruticosa.png', 'Suffruticosa\n\nBelongs to the peony family\nWoody stems allow the plant to survive the winter'],
                ['grasses-little-bluegrass.png', 'Little Bluegrass\n\nHardy plant that likes hills, ridges, and slopes\nVery resistant to droughts'],
                ['grasses-indian-grass.png', 'Indiangrass\n\nBlooms in late spring\nRegrows quickly after wildfires'],
                ['flowers-blue-eyed-grass.png', 'Blue Eyed Grass\n\nPart of the iris family\nBlooms late spring to early summer'],
                ['flowers-hyssop.png', 'Giant Hyssop\n\nProvides nectar to pollinators\nMember of the mint family'],
                ['flowers-milkweed.png', 'Butterfly Milkweed\n\nAttracts monarch butterflies and humingbirds\nNative Americans used milkweed to make cloth'],
                ['flowers-prairie-violet.png', 'Prairie Violet\n\nAttracts bees and other beneficial insects\nNo noticeable floral scent'],
                ['flowers-wild-prairie-rose.png', 'Wild Prairie Rose\n\nWere used for medicine and food by native americans\nThe petals and rose hips are full of nutrients']
              ];
var wetPlants=[
                ['trees-cottonwood.png', 'Cottonwood\n\nWildlife Den Sites\nGreat for bird nests'],
                ['trees-golden-willow.png', 'Golden Willow\n\nAttractive and Functional Shade\nDense Animal Cover'],
                ['trees-paper-birch.png', 'Paper Birch\n\nUsed as food for 30 types of animals'],
                ['flowers-marsh-marigold.png', 'Marsh Marigold\n\nProvides habitat for phytoplankton\nNectar source for butterflies'],
                ['grasses-big-bluestem.png', 'Big Bluestem\n\nFilters water contaminants\nHigh quality forage for wildlife'],
                ['grasses-cattail.png', 'Cattail\n\nUsed for food/medicines by Native Americans\nHelps maintain marsh habitats'],
                ['grasses-fox-sedge.png', 'Fox Sedge\n\nFilters water contaminants\nSpreads out rapidly'],
                ['grasses-horsetail.png', 'Horsetail\n\nFilters contaminants in water\nProvides habitat for aquatic animals'],
                ['bushes-dogwood.png', 'Dogwood\n\nStabilizes soil\nAbsorbs large quantities of water']
              ];
var wetTrees=[
                ['trees-cottonwood.png', 'Cottonwood\n\nWildlife Den Sites\nGreat for bird nests'],
                ['trees-golden-willow.png', 'Golden Willow\n\nAttractive and Functional Shade\nDense Animal Cover'],
                ['trees-paper-birch.png', 'Paper Birch\n\nUsed as food for 30 types of animals']
              ];
var wetFlowers=[
                ['flowers-marsh-marigold.png', 'Marsh Marigold\n\nProvides habitat for phytoplankton\nNectar source for butterflies'],
                ['flowers-cardinal-flowers.png', 'Cardinal Flower\nAttract beneficial insects and butterflies\nBears spikes of brilliant, scarlet-red flowers']
              ];
var wetGrasses=[
                ['grasses-big-bluestem.png', 'Big Bluestem\n\nFilters water contaminants\nHigh quality forage for wildlife'],
                ['grasses-cattail.png', 'Cattail\n\nUsed for food/medicines by Native Americans\nHelps maintain marsh habitats'],
                ['grasses-fox-sedge.png', 'Fox Sedge\n\nFilters water contaminants\nSpreads out rapidly'],
                ['grasses-horsetail.png', 'Horsetail\n\nFilters contaminants in water\nProvides habitat for aquatic animals']
              ];
var wetBushes=[
                ['bushes-dogwood.png', 'Dogwood\n\nStabilizes soil\nAbsorbs large quantities of water'],
                ['bushes-black-chokeberry.png', 'Black Chokeberry\n\nFlowers in Spring\nTolerant in most conditions']
              ];
var dryTrees=[
              ['trees-american-linden.png', 'American Linden\n\nGreat Shade\nFlowers make best-in-the-world honey'],
              ['trees-maple.png', 'Silver Maple\n\nUsed by deer and rabbits\nGood Wind Protection'],
              ['trees-pine.png', 'Pine\n\nValued for ornamental landscaping\nNesting for Morning Doves']
            ];
var dryBushes=[
              ['bushes-arborvitae.png', 'Arborvitae\n\nGood for cover, nesting and food for animals\nPrefers moist soils'],
              ['bushes-buckthorn.png', 'Buckthorn\n\nVery attractive silvery-green foliage\nOrange fruit persists throughout winter'],
              ['bushes-burning-bush.png', 'Burning Bush\n\nScientific name is Latin for "winged"'],
              ['bushes-flame-amur-maple.png', 'Flame Amur Maple\n\nSeeds eaten by squirrels\nNative maples used for sugary sap'],
              ['bushes-suffruticosa.png', 'Suffruticosa\n\nBelongs to the peony family\nWoody stems allow the plant to survive the winter']
            ];
var dryGrasses=[
              ['grasses-little-bluegrass.png', 'Little Bluegrass\n\nHardy plant that likes hills, ridges, and slopes\nVery resistant to droughts'],
              ['grasses-indian-grass.png', 'Indiangrass\n\nBlooms in late spring\nRegrows quickly after wildfires']
            ];
var dryFlowers=[
              ['flowers-blue-eyed-grass.png', 'Blue Eyed Grass\n\nPart of the iris family\nBlooms late spring to early summer'],
              ['flowers-hyssop.png', 'Giant Hyssop\n\nProvides nectar to pollinators\nMember of the mint family'],
              ['flowers-milkweed.png', 'Butterfly Milkweed\n\nAttracts monarch butterflies and humingbirds\nNative Americans used milkweed to make cloth'],
              ['flowers-prairie-violet.png', 'Prairie Violet\n\nAttracts bees and other beneficial insects\nNo noticeable floral scent'],
              ['flowers-wild-prairie-rose.png', 'Wild Prairie Rose\n\nWere used for medicine and food by native americans\nThe petals and rose hips are full of nutrients']
            ];



var waterSand = [
                  ['watersand-lake.png', 'Lake'],
                  ['watersand-sand.png', 'Sand'],
                  ['watersand-sandbar.png', 'Sandbar'],
                  ['watersand-sandpit.png', 'Sand Pit'],
                  ['watersand-small-lake.png', 'Small Lake'],
                  ['watersand-small-river.png', 'Small River'],
                  ['watersand-wide-river.png', 'Wide River'],
                  ['watersand-lake-with-island.png', 'Lake and Island']
                ];
var furniture = [
                  ['furniture-bridge.png', 'Bridge'],
                  ['furniture-flat-bench.png', 'Flat Bench'],
                  ['furniture-picnic-table.png', 'Picnic Table'],
                  ['furniture-stone-bench.png', 'Stone Bench'],
                  ['furniture-table.png', 'Table'],
                  ['furniture-wood-bench.png', 'Wood Bench']
                ];
var walkways = [
                ['walkways-flat-stone-piece.png', 'Flat Stone Piece'],
                ['walkways-scattered-stone-path.png', 'Scattered Stone Path'],
                ['walkways-stone-steps.png', 'Stone Steps'],
                ['walkways-stone-walkway.png', 'Stone Walkway'],
                ['walkways-wood-steps.png', 'Wood Steps'],
                ['walkways-wood-walkway.png', 'Wood Walkway']
              ];
var logsRocks = [
                  ['logsrocks-long-log.png', 'Long Log'],
                  ['logsrocks-rock1.png', 'Rock 1'],
                  ['logsrocks-rock2.png', 'Rock 2'],
                  ['logsrocks-rock3.png', 'Rock 3'],
                  ['logsrocks-short-log.png', 'Short Log'],
                  ['logsrocks-upright-log.png', 'Upright Log']
                ];

/* Declare Other variables */

var dropdown  = $('#icon-select');
var iconContainer = $('#icon-container');
var selectedOptions = $('#selectedOptions');
var zIndex = 1;
var finalCanvas;
var finalImage;

/* Set Dropdown Initially */

displayIcons();

/* On Drowpdown change */

$(document).ready(function() {
    interact('#optionsBox').draggable({onmove: dragMoveListener});
    $('#removeSelected').click(function(){removeSelected();})
});

function removeSelected(){
  $('.selected').removeClass('selected');
}

dropdown.change(function(){
  displayIcons();
});

function displayIcons(){
  var iconArray = window[dropdown.val()];
  iconContainer.empty();
  for (var i = 0; i < iconArray.length; i++){
    iconContainer.append("<img src='img/" + iconArray[i][0] + "' title='" + iconArray[i][1] + "' />");
  }
  addSidebarInteraction();
  //Tipped.create('#sidebar img');
}


/* Dragging */
var clone;

function addSidebarInteraction(){
interact('#icon-container img').draggable({onstart: cloneSidebarIcon, onmove: dragMoveListener, onend: addFinalIcon});

}

function cloneSidebarIcon(event){
  $(event.target).css({'z-index':zIndex});
  clone = event.target.cloneNode(true);
  $(event.target).after(clone);
}

function addFinalIcon(event){
  var offsetx = $(event.target).offset();
  var clonedIcon = event.target.cloneNode(true);
  $(clonedIcon).css({"transform": "translate(0, 0)", "width" : "80px", "height" : "80px", "position": "absolute", "top" : offsetx.top +10, "left":offsetx.left +10, 'z-index':zIndex});
  zIndex += 1;

  removeModifyability();
  $('#main-canvas .selected').removeClass('selected');
  $(clonedIcon).addClass('selected');
  selectedOptions.css({'display': 'block'});
  $(clonedIcon).attr('title', '');
  $('#main-canvas').append(clonedIcon);
  addModifyability($(clonedIcon));

  $(event.target).remove();
  addInteractability(clonedIcon);


  $('#main-canvas .tpd-content-wrapper').css({'display': 'none'});

}

function dragMoveListener (event) {
  var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the position attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}
/* Set Dropzone */

interact('#main-canvas')
  .dropzone({
    ondrop: function (event) {

    }
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated');
  });


/* ------------- Add Selectability for icons already on canvas and display contextual edit menu ------------- */

function addInteractability(icon){
  $(icon).attr('data-x', 0);
  $(icon).attr('data-y', 0);
  interact(icon).draggable({onmove: dragMoveListener});
  $(icon).click(showOptionsBox);
}

function showOptionsBox(event){
  if(!$(event.target).hasClass('selected')){
    removeModifyability();
    $('#main-canvas .selected').removeClass('selected');
    $(event.target).addClass('selected');
    selectedOptions.css({'display': 'block'});
    addModifyability(event.target);
  }
}

function addModifyability(icon){
  $('#scaleUp').click(
    function(){
      scaleUp(icon);
  });

  $('#scaleDown').click(
    function(){
      scaleDown(icon);
  });

  $('#layerForward').click(
    function(){
      layerForward(icon);
  });

  $('#layerBackward').click(
    function(){
      layerBackward(icon);
  });

  $('#delete').click(
    function(){
      deleteIcon(icon);
  });

  $('#deselect').click(
    function(){
      deselectIcon(icon);
  });
}

function removeModifyability(){
  $('#scaleUp').unbind('click');
  $('#scaleDown').unbind('click');
  $('#layerForward').unbind('click');
  $('#layerBackward').unbind('click');
  $('#delete').unbind('click');
  $('#deselect').unbind('click');
}

function scaleUp(icon){
  var width = $(icon).width();
  if(width < 130) {
    width += 25;
    $(icon).css({'width': width + 'px', 'height':width + 'px'});
  }
}

function scaleDown(icon){
  var width = $(icon).width();
  if(width > 30) {
    width -= 25;
    $(icon).css({'width': width + 'px', 'height':width + 'px'});
  }
}

function layerForward(icon){
  var index = $(icon).css('z-index') + 1;
  $(icon).css({'z-index' : index});

}

function layerBackward(icon){
  var index = $(icon).css('z-index') - 1;
  $(icon).css({'z-index' : index});
}

function deleteIcon(icon){
  $(icon).remove();
  selectedOptions.css({'display': 'none'});
}

function deselectIcon(icon){
  removeModifyability();
  selectedOptions.css({'display': 'none'});
  $(icon).removeClass('selected');
}

/* ------------- Make Tooltips for sidebar Icons Work Like the Mock-up ------------- */



/* ------------- Save & Submit ------------- */

$('#saveSubmit').click(function(){saveSubmit();});

function saveSubmit(){

      // Loading... on Submit button
      saveSubmit
      $('#saveSubmit').text('Loading...');

      // removes any selection styling
      $('.selected').removeClass('selected');

      // Creates a canvas screenshot
      html2canvas($('#main-canvas')).then(function(canvas) {
      finalCanvas = canvas;

      // Turns the canvas into a base64 png
      finalImage = finalCanvas.toDataURL("image/png");

      // saves image into submitted-images folder using testSave.php
      var ajax = new XMLHttpRequest();
      ajax.open("POST",'testSave.php',true);
      ajax.setRequestHeader('Content-Type', 'canvas/upload');
      ajax.send(finalImage);

      ajax.onreadystatechange=function(){
      		if (ajax.readyState == 4)
      		{
            console.log(ajax.responseText);

            var imageLink = "http://gcom468.samszczesny.com/design-the-park/" + ajax.responseText;

            $('#user-design-thanks').attr('src', imageLink);

            $('#submitScreen').fadeToggle('slow');

      			// execute any code placed here once ajax save is complete
            $.post("send-email.php", {firstParam : imageLink}, function(data) {
              //this is your response data from serv
              console.log(data);

            });

          }
  	}


});

}
