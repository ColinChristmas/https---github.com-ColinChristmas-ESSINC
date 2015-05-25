function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(56.239078,-105.921882),
    zoom:4,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Add a point on the map

function addPoint() {
var myCenter=new google.maps.LatLng(43.152080,-79.16543);
var mapProp = {
  center:myCenter,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  icon: 'assets/img/marker.png'
  });

marker.setMap(map);
var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Niagara College</h1>'+
      '<div id="bodyContent">'+
      '<p>Geographic Information Systems (GIS) is a leading-edge technology with thousands of applications, from finding the quickest travel path to determining the impact of urban population growth</p>'
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

//Add a polyline on the map

function addPolyline() {
var x=new google.maps.LatLng(43.116398, -79.246961);
var a=new google.maps.LatLng(43.116407, -79.245365);
var n=new google.maps.LatLng(43.116608, -79.244748);
var b=new google.maps.LatLng(43.117116, -79.243192);
var c=new google.maps.LatLng(43.120684, -79.243318);
var d=new google.maps.LatLng(43.120768, -79.243393);
var e=new google.maps.LatLng(43.123757, -79.243393);
var f=new google.maps.LatLng(43.123952, -79.243275);
var g=new google.maps.LatLng(43.124127, -79.243027);
var h=new google.maps.LatLng(43.124700, -79.241729);
var i=new google.maps.LatLng(43.125729, -79.240562);
var j=new google.maps.LatLng(43.127016, -79.238950);
var k=new google.maps.LatLng(43.127506, -79.238714);
var l=new google.maps.LatLng(43.128991, -79.238754);
var m=new google.maps.LatLng(43.134480, -79.239026);
var nn=new google.maps.LatLng(43.133708, -79.232482);
var o=new google.maps.LatLng(43.132188, -79.228670);
var p=new google.maps.LatLng(43.132123, -79.227302);
var q=new google.maps.LatLng(43.133080, -79.224518);
var r=new google.maps.LatLng(43.133284, -79.224176);
var s=new google.maps.LatLng(43.133929, -79.222419);
var t=new google.maps.LatLng(43.134020, -79.222070);
var u=new google.maps.LatLng(43.135860, -79.217134);
var v=new google.maps.LatLng(43.135968, -79.216511);
var w=new google.maps.LatLng(43.135989, -79.214979);
var xx=new google.maps.LatLng(43.136166, -79.214480);
var y=new google.maps.LatLng(43.137165, -79.213117);
var z=new google.maps.LatLng(43.137403, -79.212881);
var aa=new google.maps.LatLng(43.144152, -79.194787);
var bb=new google.maps.LatLng(43.144966, -79.193894);
var cc=new google.maps.LatLng(43.145204, -79.193304);
var dd=new google.maps.LatLng(43.145412, -79.190933);
var ee=new google.maps.LatLng(43.151683, -79.173012);
var ff=new google.maps.LatLng(43.151713, -79.172706);
var gg=new google.maps.LatLng(43.153307, -79.168398);
var hh=new google.maps.LatLng(43.153216, -79.167848);
var ii=new google.maps.LatLng(43.150597, -79.167698);

var mapProp = {
  center:v,
  zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

var myTrip=[x,a,n,b,c,d,e,f,g,h,i,j,k,l,m,nn,o,p,q,r,s,t,u,v,w,xx,y,z,aa,bb,cc,dd,ee,ff,gg,hh,ii];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

flightPath.setMap(map);
}

// Add a Polygon

function addPolygon() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(43.15327374508959, -79.16655778884888),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var Campus;

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var CampusCoords = [
	new google.maps.LatLng(43.15327374508959, -79.16655778884888),
	new google.maps.LatLng(43.153084429914834, -79.16643373668194),
	new google.maps.LatLng(43.15299833289719, -79.16667245328426),
	new google.maps.LatLng(43.15242011001092, -79.16629292070866),
	new google.maps.LatLng(43.15242598032154, -79.1662734746933),
	new google.maps.LatLng(43.15239026925667, -79.16625067591667),
	new google.maps.LatLng(43.15237167992699, -79.16630230844021),
	new google.maps.LatLng(43.15221171361943, -79.16619434952736),
	new google.maps.LatLng(43.15231248755005, -79.16590198874474),
	new google.maps.LatLng(43.152476856323084, -79.16601061820984),
	new google.maps.LatLng(43.15245631025062, -79.16606426239014),
	new google.maps.LatLng(43.152492510468896, -79.16608974337578),
	new google.maps.LatLng(43.15250914299442, -79.16604951024055),
	new google.maps.LatLng(43.152689165333996, -79.16616752743721),
	new google.maps.LatLng(43.15269845995125, -79.16614472866058),
	new google.maps.LatLng(43.152875057410725, -79.16626073420048),
	new google.maps.LatLng(43.153044316546705, -79.1657779365778),
	new google.maps.LatLng(43.15256931356365, -79.16546680033207),
	new google.maps.LatLng(43.15265638956706, -79.16521936655045),
	new google.maps.LatLng(43.15328548554623, -79.16563175618649),
	new google.maps.LatLng(43.15319058345714, -79.16589796543121),
	new google.maps.LatLng(43.153448384149385, -79.16606962680817),
    
  ];

  Campus = new google.maps.Polygon({
    paths: CampusCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  Campus.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);	  

// Add Weather
function addWeather() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(43.15327374508959, -79.16655778884888)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Add Traffic
function addTraffic() {
  var myLatlng = new google.maps.LatLng(43.15327374508959, -79.16655778884888);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Add Bike Trails
function addBike() {
  var myLatlng = new google.maps.LatLng(43.15327374508959, -79.16655778884888);
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  };

  var map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions);

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Add Great Lake Temperatures
function addTemp() {
  var mapProp = {
    center:new google.maps.LatLng(56.859214,-105.476440),
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  
  var studyarea = new google.maps.KmlLayer({
                driveFileId: "0B59Shu1L0icMSnVHYmlHT0tGRWc",
                map:map,
                title: "Great Lake Temperatures"
                });

}
google.maps.event.addDomListener(window, 'load', initialize);

// Add Hurricanes
function addStorm() {
  var mapProp = {
    center:new google.maps.LatLng(30.639504,-88.876487),
    zoom:20,
    
  };
  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  
  var hurriances = new google.maps.KmlLayer({
                driveFileId: "0B59Shu1L0icMdzdlSURpNzl6R28",
                map:map,
                title: "2005 Hurricanes"
                });
				

}
google.maps.event.addDomListener(window, 'load', initialize);


