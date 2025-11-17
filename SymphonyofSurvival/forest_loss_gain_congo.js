// ===============================================================
// Google Earth Engine Script: Forest Loss and Gain in Congo Republic
// Language: JavaScript
// Author: Debasmita Bose and Joyshree Seal
// ===============================================================

// Load Hansen Global Forest Change dataset
var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');

// Select layers
var lossImage = gfc2014.select(['loss']);
var gainImage = gfc2014.select(['gain']);
var treeCover = gfc2014.select(['treecover2000']);

// Combine gain and loss
var gainAndLoss = gainImage.and(lossImage);

// Add map layers
Map.addLayer(treeCover.updateMask(treeCover), { palette: ['000000', '00FF00'], max: 100 }, 'Forest Cover');
Map.addLayer(lossImage.updateMask(lossImage), { palette: ['FF0000'] }, 'Loss');
Map.addLayer(gainImage.updateMask(gainImage), { palette: ['0000FF'] }, 'Gain');
Map.addLayer(gainAndLoss.updateMask(gainAndLoss), { palette: ['FF00FF'] }, 'Gain and Loss');

// Country and protected areas
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var congo = ee.Feature(countries.filter(ee.Filter.eq('country_na', 'Rep of the Congo')).first());

var protectedAreas = ee.FeatureCollection('WCMC/WDPA/current/polygons')
  .filter(ee.Filter.and(
    ee.Filter.bounds(congo.geometry()),
    ee.Filter.neq('IUCN_CAT', 'VI'),
    ee.Filter.neq('STATUS', 'proposed'),
    ee.Filter.lt('STATUS_YR', 2010)
  ))
  .map(function (feat) {
    return congo.intersection(feat);
  });

// Calculate forest loss area
var lossIn2012 = gfc2014.select(['lossyear']).eq(12);
var areaImage = lossIn2012.multiply(ee.Image.pixelArea());

// Area lost in Congo
var statsCongo = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: congo.geometry(),
  scale: 30,
  maxPixels: 1e9
});
print('Area lost in the Congo Republic:', statsCongo.get('lossyear'), 'square meters');

// Area lost in protected areas
var statsProtected = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: protectedAreas.geometry(),
  scale: 30,
  maxPixels: 1e9
});
print('Area lost in protected areas:', statsProtected.get('lossyear'), 'square meters');
