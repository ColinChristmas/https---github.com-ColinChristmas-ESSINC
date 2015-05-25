var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'OSM', source: new ol.source.OSM()})]});
var lyr_GDPSETAGeopotentialheightdam = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_GZ", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Geopotential height (dam)"
                      });
var lyr_GDPSETAUcomponentofthewindAlongthegridXaxiskts = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_UU", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - U-component of the wind (Along the grid X axis) (kts)"
                      });
var lyr_GDPSETATotalcloudcoverfraction = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_NT", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Total cloud cover (fraction)"
                      });
var lyr_GDPSETAAirtemperatureC = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_TT", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Air temperature (°C)"
                      });
var lyr_GDPSETADewpointtemperatureC = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_TD", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Dew point temperature (°C)"
                      });
var lyr_GDPSETASpecifichumiditykgkg = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_HU", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Specific humidity (kg/kg)"
                      });
var lyr_GDPSETADewpointdepressionC = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_ES", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Dew point depression (°C)"
                      });
var lyr_GDPSETARelativehumidityfraction = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_HR", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Relative humidity (fraction)"
                      });
var lyr_GDPSETASurfacepressuremb = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_P0", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Surface pressure (mb)"
                      });
var lyr_GDPSETASealevelpressuremb = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_PN", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Sea level pressure (mb)"
                      });
var lyr_GDPSETAQuantityofprecipitationm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_PR", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Quantity of precipitation (m)"
                      });
var lyr_GDPSETATotalprecipitationratems = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_RT", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Total precipitation rate (m/s)"
                      });
var lyr_GDPSETARainQPFm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_RN", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Rain (QPF) (m)"
                      });
var lyr_GDPSETAFreezingrainQPFm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_FR", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Freezing rain (QPF) (m)"
                      });
var lyr_GDPSETASnowQPFm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_SN", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Snow (QPF) (m)"
                      });
var lyr_GDPSETASurfaceandsoiltemperaturesDeepMeanK = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I0", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Surface and soil temperatures (Deep/Mean) (K)"
                      });
var lyr_GDPSETASoilvolumetricwatercontentDeepMeanmm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I1", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Soil volumetric water content (Deep/Mean) (m³/m³)"
                      });
var lyr_GDPSETASoilvolumetricicecontentmm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I2", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Soil volumetric ice content (m³/m³)"
                      });
var lyr_GDPSETAWaterretainedonthevegetationkgm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I3", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Water retained on the vegetation (kg/m²)"
                      });
var lyr_GDPSETAWaterinthesnowpackkgm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I4", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Water in the snow pack (kg/m²)"
                      });
var lyr_GDPSETASnowmasskgm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I5", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Snow mass (kg/m²)"
                      });
var lyr_GDPSETASeaicethicknessm = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://geo.weather.gc.ca/geomet/?lang%3DE%26",
                          params: {"LAYERS": "GDPS.ETA_I8", "TILED": "true"},
                        })),
                        title: "GDPS.ETA - Sea ice thickness (m)"
                      });

lyr_GDPSETAGeopotentialheightdam.setVisible(false);
lyr_GDPSETAUcomponentofthewindAlongthegridXaxiskts.setVisible(false);
lyr_GDPSETATotalcloudcoverfraction.setVisible(false);
lyr_GDPSETAAirtemperatureC.setVisible(false);
lyr_GDPSETADewpointtemperatureC.setVisible(false);
lyr_GDPSETASpecifichumiditykgkg.setVisible(false);
lyr_GDPSETADewpointdepressionC.setVisible(false);
lyr_GDPSETARelativehumidityfraction.setVisible(false);
lyr_GDPSETASurfacepressuremb.setVisible(false);
lyr_GDPSETASealevelpressuremb.setVisible(false);
lyr_GDPSETAQuantityofprecipitationm.setVisible(false);
lyr_GDPSETATotalprecipitationratems.setVisible(false);
lyr_GDPSETARainQPFm.setVisible(false);
lyr_GDPSETAFreezingrainQPFm.setVisible(false);
lyr_GDPSETASnowQPFm.setVisible(false);
lyr_GDPSETASurfaceandsoiltemperaturesDeepMeanK.setVisible(false);
lyr_GDPSETASoilvolumetricwatercontentDeepMeanmm.setVisible(false);
lyr_GDPSETASoilvolumetricicecontentmm.setVisible(false);
lyr_GDPSETAWaterretainedonthevegetationkgm.setVisible(false);
lyr_GDPSETAWaterinthesnowpackkgm.setVisible(false);
lyr_GDPSETASnowmasskgm.setVisible(false);
lyr_GDPSETASeaicethicknessm.setVisible(false);
var layersList = [baseLayer,lyr_GDPSETAGeopotentialheightdam,lyr_GDPSETAUcomponentofthewindAlongthegridXaxiskts,lyr_GDPSETATotalcloudcoverfraction,lyr_GDPSETAAirtemperatureC,lyr_GDPSETADewpointtemperatureC,lyr_GDPSETASpecifichumiditykgkg,lyr_GDPSETADewpointdepressionC,lyr_GDPSETARelativehumidityfraction,lyr_GDPSETASurfacepressuremb,lyr_GDPSETASealevelpressuremb,lyr_GDPSETAQuantityofprecipitationm,lyr_GDPSETATotalprecipitationratems,lyr_GDPSETARainQPFm,lyr_GDPSETAFreezingrainQPFm,lyr_GDPSETASnowQPFm,lyr_GDPSETASurfaceandsoiltemperaturesDeepMeanK,lyr_GDPSETASoilvolumetricwatercontentDeepMeanmm,lyr_GDPSETASoilvolumetricicecontentmm,lyr_GDPSETAWaterretainedonthevegetationkgm,lyr_GDPSETAWaterinthesnowpackkgm,lyr_GDPSETASnowmasskgm,lyr_GDPSETASeaicethicknessm];


