// Openlayers Javascript
      var container = document.getElementById('popup');
      var content = document.getElementById('popup-content');
      var closer = document.getElementById('popup-closer');
      closer.onclick = function() {
        container.style.display = 'none';
        closer.blur();
        return false;
      };
      var overlayPopup = new ol.Overlay({
        element: container
      });

      var map = new ol.Map({
        controls: ol.control.defaults().extend([
          new ol.control.ScaleLine({}),new ol.control.LayerSwitcher({tipLabel: "Layers"})
        ]),
        target: document.getElementById('map'),
        renderer: 'canvas',
        overlays: [overlayPopup],
        layers: layersList,
        view: new ol.View({
		   zoom: 20,	
           maxZoom: 28, minZoom: 1
        })
      });
      map.getView().fitExtent([-17506376.000000, -8528966.100000, 8506376.390000, 8528966.100000], map.getSize());

      var NO_POPUP = 0
      var ALL_FIELDS = 1

      popupLayers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      var featureOverlay = new ol.FeatureOverlay({
        map: map,
        style: [new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: '#f00',
                width: 1
              }),
              fill: new ol.style.Fill({
                color: 'rgba(255,0,0,0.1)'
              }),
              })]          
      });


      var doHighlight = true;
      var doHover = true;

      var highlight;
      var onPointerMove = function(evt) {
        if (!doHover && !doHighlight){
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        var coord = evt.coordinate;
        var popupField;
        var popupText = '';
        var currentFeature;
        var currentFeatureKeys;
        map.forEachFeatureAtPixel(pixel, function(feature, layer) {
          currentFeature = feature;
          currentFeatureKeys = currentFeature.getKeys();
          var field = popupLayers[layersList.indexOf(layer) - 1];
          if (field == NO_POPUP){          
          }
          else if (field == ALL_FIELDS){
            for ( var i=0; i<currentFeatureKeys.length;i++) {
                if (currentFeatureKeys[i] != 'geometry') {
                    popupField = currentFeatureKeys[i] + ': '+ currentFeature.get(currentFeatureKeys[i]);
                    popupText = popupText + popupField+'<br>';
                }
            }
          }
          else{
            var value = feature.get(field);
            if (value){
              popupText = field + ': ' + value;
            }  
          }          
        });

        if (doHighlight){
          if (currentFeature !== highlight) {
            if (highlight) {
              featureOverlay.removeFeature(highlight);
            }
            if (currentFeature) {
              featureOverlay.addFeature(currentFeature);
            }
            highlight = currentFeature;
          }
        }

        if (doHover){
          if (popupText) {
            overlayPopup.setPosition(coord);
            content.innerHTML = popupText;
            container.style.display = 'block';        
          } else {
            container.style.display = 'none';
            closer.blur();
          }
        }
      };

      var onSingleClick = function(evt) {
        if (doHover){
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        var coord = evt.coordinate;
        var popupField;
        var popupText = '';
        var currentFeature;
        var currentFeatureKeys;
        map.forEachFeatureAtPixel(pixel, function(feature, layer) {
          currentFeature = feature;
          currentFeatureKeys = currentFeature.getKeys();
          var field = popupLayers[layersList.indexOf(layer) - 1];
          if (field == NO_POPUP){          
          }
          else if (field == ALL_FIELDS){
            for ( var i=0; i<currentFeatureKeys.length;i++) {
                if (currentFeatureKeys[i] != 'geometry') {
                    popupField = currentFeatureKeys[i] + ': '+ currentFeature.get(currentFeatureKeys[i]);
                    popupText = popupText + popupField+'<br>';
                }
            }
          }
          else{
            var value = feature.get(field);
            if (value){
              popupText = field + ': '+ value;
            }  
          }          
        });

        if (popupText) {
            overlayPopup.setPosition(coord);
            content.innerHTML = popupText;
            container.style.display = 'block';        
        } else {
          container.style.display = 'none';
          closer.blur();
        }
      };

      map.on('pointermove', function(evt) {
        onPointerMove(evt);
      });
      map.on('singleclick', function(evt) {
        onSingleClick(evt);
      });
