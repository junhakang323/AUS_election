var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_IND_win_1 = new ol.format.GeoJSON();
var features_IND_win_1 = format_IND_win_1.readFeatures(json_IND_win_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_win_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_win_1.addFeatures(features_IND_win_1);
var lyr_IND_win_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_win_1, 
                style: style_IND_win_1,
				'opacity': 0.7,
                interactive: true,
    title: 'IND_win<br />\
    <img src="styles/legend/IND_win_1_0.png" /> 2.6 - 5<br />\
    <img src="styles/legend/IND_win_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/IND_win_1_2.png" /> 10 - 15<br />\
    <img src="styles/legend/IND_win_1_3.png" /> 15 - 20<br />\
    <img src="styles/legend/IND_win_1_4.png" /> 20 - 25<br />\
    <img src="styles/legend/IND_win_1_5.png" /> 25 - 41.6<br />'
        });
var format_GRN_win_2 = new ol.format.GeoJSON();
var features_GRN_win_2 = format_GRN_win_2.readFeatures(json_GRN_win_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRN_win_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRN_win_2.addFeatures(features_GRN_win_2);
var lyr_GRN_win_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRN_win_2, 
                style: style_GRN_win_2,
				'opacity': 0.7,
                interactive: true,
    title: 'GRN_win<br />\
    <img src="styles/legend/GRN_win_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/GRN_win_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/GRN_win_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/GRN_win_2_3.png" /> 15 - 20<br />\
    <img src="styles/legend/GRN_win_2_4.png" /> 20 - 25<br />\
    <img src="styles/legend/GRN_win_2_5.png" /> 25 - 21<br />'
        });
var format_KAP_win_3 = new ol.format.GeoJSON();
var features_KAP_win_3 = format_KAP_win_3.readFeatures(json_KAP_win_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAP_win_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAP_win_3.addFeatures(features_KAP_win_3);
var lyr_KAP_win_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAP_win_3, 
                style: style_KAP_win_3,
				'opacity': 0.7,
                interactive: true,
                title: '<img src="styles/legend/KAP_win_3.png" /> KAP_win'
            });
var format_CA_win_4 = new ol.format.GeoJSON();
var features_CA_win_4 = format_CA_win_4.readFeatures(json_CA_win_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_win_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_win_4.addFeatures(features_CA_win_4);
var lyr_CA_win_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CA_win_4, 
                style: style_CA_win_4,
				'opacity': 0.7,
                interactive: true,
                title: '<img src="styles/legend/CA_win_4.png" /> CA_win'
            });
var format_ALP_win_5 = new ol.format.GeoJSON();
var features_ALP_win_5 = format_ALP_win_5.readFeatures(json_ALP_win_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALP_win_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALP_win_5.addFeatures(features_ALP_win_5);
var lyr_ALP_win_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ALP_win_5, 
                style: style_ALP_win_5,
				'opacity': 0.7,
                interactive: true,
    title: 'ALP_win<br />\
    <img src="styles/legend/ALP_win_5_0.png" /> 0.4 - 5<br />\
    <img src="styles/legend/ALP_win_5_1.png" /> 5 - 10<br />\
    <img src="styles/legend/ALP_win_5_2.png" /> 10 - 15<br />\
    <img src="styles/legend/ALP_win_5_3.png" /> 15 - 20<br />\
    <img src="styles/legend/ALP_win_5_4.png" /> 20 - 25<br />\
    <img src="styles/legend/ALP_win_5_5.png" /> 25 - 36<br />'
        });
var format_LIB_win_6 = new ol.format.GeoJSON();
var features_LIB_win_6 = format_LIB_win_6.readFeatures(json_LIB_win_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIB_win_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIB_win_6.addFeatures(features_LIB_win_6);
var lyr_LIB_win_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIB_win_6, 
                style: style_LIB_win_6,
				'opacity': 0.7,
                interactive: true,
    title: 'LIB_win<br />\
    <img src="styles/legend/LIB_win_6_0.png" /> 0.4 - 5<br />\
    <img src="styles/legend/LIB_win_6_1.png" /> 5 - 10<br />\
    <img src="styles/legend/LIB_win_6_2.png" /> 10 - 15<br />\
    <img src="styles/legend/LIB_win_6_3.png" /> 15 - 20<br />\
    <img src="styles/legend/LIB_win_6_4.png" /> 20 - 25<br />\
    <img src="styles/legend/LIB_win_6_5.png" /> 25 - 33.2<br />'
        });
var format_LNP_win_7 = new ol.format.GeoJSON();
var features_LNP_win_7 = format_LNP_win_7.readFeatures(json_LNP_win_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNP_win_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNP_win_7.addFeatures(features_LNP_win_7);
var lyr_LNP_win_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LNP_win_7, 
                style: style_LNP_win_7,
				'opacity': 0.7,
                interactive: true,
    title: 'LNP_win<br />\
    <img src="styles/legend/LNP_win_7_0.png" /> 3.4 - 5<br />\
    <img src="styles/legend/LNP_win_7_1.png" /> 5 - 10<br />\
    <img src="styles/legend/LNP_win_7_2.png" /> 10 - 15<br />\
    <img src="styles/legend/LNP_win_7_3.png" /> 15 - 20<br />\
    <img src="styles/legend/LNP_win_7_4.png" /> 20 - 25<br />\
    <img src="styles/legend/LNP_win_7_5.png" /> 25 - 44.2<br />'
        });
var format_NAT_win_8 = new ol.format.GeoJSON();
var features_NAT_win_8 = format_NAT_win_8.readFeatures(json_NAT_win_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAT_win_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAT_win_8.addFeatures(features_NAT_win_8);
var lyr_NAT_win_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAT_win_8, 
                style: style_NAT_win_8,
				'opacity': 0.7,
                interactive: true,
    title: 'NAT_win<br />\
    <img src="styles/legend/NAT_win_8_0.png" /> 4.6 - 5<br />\
    <img src="styles/legend/NAT_win_8_1.png" /> 5 - 10<br />\
    <img src="styles/legend/NAT_win_8_2.png" /> 10 - 15<br />\
    <img src="styles/legend/NAT_win_8_3.png" /> 15 - 20<br />\
    <img src="styles/legend/NAT_win_8_4.png" /> 20 - 25<br />\
    <img src="styles/legend/NAT_win_8_5.png" /> 25 - 41.2<br />'
        });
var format_simple_AUS_9 = new ol.format.GeoJSON();
var features_simple_AUS_9 = format_simple_AUS_9.readFeatures(json_simple_AUS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_simple_AUS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_simple_AUS_9.addFeatures(features_simple_AUS_9);
var lyr_simple_AUS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_simple_AUS_9, 
                style: style_simple_AUS_9,
                interactive: false,
                title: '<img src="styles/legend/simple_AUS_9.png" /> simple_AUS 복사'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_IND_win_1.setVisible(true);lyr_GRN_win_2.setVisible(true);lyr_KAP_win_3.setVisible(true);lyr_CA_win_4.setVisible(true);lyr_ALP_win_5.setVisible(true);lyr_LIB_win_6.setVisible(true);lyr_LNP_win_7.setVisible(true);lyr_NAT_win_8.setVisible(true);lyr_simple_AUS_9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_IND_win_1,lyr_GRN_win_2,lyr_KAP_win_3,lyr_CA_win_4,lyr_ALP_win_5,lyr_LIB_win_6,lyr_LNP_win_7,lyr_NAT_win_8,lyr_simple_AUS_9];
lyr_IND_win_1.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_GRN_win_2.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_KAP_win_3.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_CA_win_4.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_ALP_win_5.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', '비고': '비고', });
lyr_LIB_win_6.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_LNP_win_7.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_NAT_win_8.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_simple_AUS_9.set('fieldAliases', {'Elect_div': 'Elect_div', '선거구': '선거구', '당선인': '당선인', 'url': 'url', '결선': '결선', '정당': '정당', '1위': '1위', '2위': '2위', '격차': '격차', });
lyr_IND_win_1.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_GRN_win_2.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_KAP_win_3.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_CA_win_4.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_ALP_win_5.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', '비고': '', });
lyr_LIB_win_6.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_LNP_win_7.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_NAT_win_8.set('fieldImages', {'Elect_div': 'Hidden', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_simple_AUS_9.set('fieldImages', {'Elect_div': 'TextEdit', '선거구': 'TextEdit', '당선인': 'TextEdit', 'url': 'TextEdit', '결선': 'TextEdit', '정당': 'TextEdit', '1위': 'TextEdit', '2위': 'TextEdit', '격차': 'TextEdit', });
lyr_IND_win_1.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_GRN_win_2.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_KAP_win_3.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_CA_win_4.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_ALP_win_5.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', '비고': 'no label', });
lyr_LIB_win_6.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_LNP_win_7.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_NAT_win_8.set('fieldLabels', {'선거구': 'inline label', '당선인': 'inline label', 'url': 'no label', '결선': 'inline label', '정당': 'inline label', '1위': 'inline label', '2위': 'inline label', '격차': 'inline label', });
lyr_simple_AUS_9.set('fieldLabels', {'Elect_div': 'no label', '선거구': 'no label', '당선인': 'no label', 'url': 'no label', '결선': 'no label', '정당': 'no label', '1위': 'no label', '2위': 'no label', '격차': 'no label', });
lyr_simple_AUS_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});