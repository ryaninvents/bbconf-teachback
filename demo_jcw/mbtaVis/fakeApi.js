var _ = require('underscore');
var routes = [
    { id: '946_',
        route_name: 'Blue Line',
        route_type: '1',
        mode_name: 'Subway',
        direction: 'Westbound',
        alerts: 'Limited Rail and Bus service will be available on Wednesday, February 18. Details are available at www.mbta.com/winter.; Limited Blue Line service will operate between Bowdoin and Wonderland Stations on Wednesday, February 18.' },
    { id: '946_',
        route_name: 'Blue Line',
        route_type: '1',
        mode_name: 'Subway',
        direction: 'Eastbound',
        alerts: 'Limited Rail and Bus service will be available on Wednesday, February 18. Details are available at www.mbta.com/winter.; Limited Blue Line service will operate between Bowdoin and Wonderland Stations on Wednesday, February 18.' },
    { id: '903_',
        route_name: 'Orange Line',
        route_type: '1',
        mode_name: 'Subway',
        direction: 'Southbound',
        alerts: 'Limited Rail and Bus service will be available on Wednesday, February 18. Details are available at www.mbta.com/winter.; Limited Blue Line service will operate between Bowdoin and Wonderland Stations on Wednesday, February 18.' },
    { id: '903_',
        route_name: 'Orange Line',
        route_type: '1',
        mode_name: 'Subway',
        direction: 'Northbound',
        alerts: 'Limited Rail and Bus service will be available on Wednesday, February 18. Details are available at www.mbta.com/winter.; Limited Blue Line service will operate between Bowdoin and Wonderland Stations on Wednesday, February 18.' },
    { id: '931_',
        route_name: 'Red Line',
        route_type: '1',
        mode_name: 'Subway',
        direction: 'Southbound',
        alerts: 'Limited Rail and Bus service will be available on Wednesday, February 18. Details are available at www.mbta.com/winter.; Limited Blue Line service will operate between Bowdoin and Wonderland Stations on Wednesday, February 18.' },
    { id: '931_',
        route_name: 'Red Line',
        route_type: '1',
        mode_name: 'Subway',
        direction: 'Northbound',
        alerts: 'Limited Rail and Bus service will be available on Wednesday, February 18. Details are available at www.mbta.com/winter.; Limited Blue Line service will operate between Bowdoin and Wonderland Stations on Wednesday, February 18.' },
];
var id = routes.length + 1;

var trips = { '946_': [
    { route_id: '946_',
        trip_id: '25372733',
        trip_name: '11:45 pm from Wonderland to Bowdoin',
        trip_headsign: 'Bowdoin',
        vehicle_id: '0766',
        vehicle_lat: '42.35889',
        vehicle_lon: '-71.0574',
        vehicle_bearing: '275',
        vehicle_timestamp: '1424239875',
        stop_name: 'Bowdoin',
        pre_away: '52' },
    { route_id: '946_',
        trip_id: '25372736',
        trip_name: '11:55 pm from Wonderland to Bowdoin',
        trip_headsign: 'Bowdoin',
        vehicle_id: '0734',
        vehicle_lat: '42.37908',
        vehicle_lon: '-71.02445',
        vehicle_bearing: '245',
        vehicle_timestamp: '1424239965',
        stop_name: 'Airport - Inbound',
        pre_away: '50' },
    { route_id: '946_',
        trip_id: '25372735',
        trip_name: '12:05 am from Wonderland to Bowdoin',
        trip_headsign: 'Bowdoin',
        vehicle_id: undefined,
        vehicle_lat: undefined,
        vehicle_lon: undefined,
        vehicle_bearing: undefined,
        vehicle_timestamp: undefined,
        stop_name: 'Wonderland',
        pre_away: '17' },
    { route_id: '946_',
        trip_id: '25372734',
        trip_name: '12:15 am from Wonderland to Bowdoin',
        trip_headsign: 'Bowdoin',
        vehicle_id: undefined,
        vehicle_lat: undefined,
        vehicle_lon: undefined,
        vehicle_bearing: undefined,
        vehicle_timestamp: undefined,
        stop_name: 'Wonderland',
        pre_away: '597' },
    { route_id: '946_',
        trip_id: '25372730',
        trip_name: '12:25 am from Wonderland to Bowdoin',
        trip_headsign: 'Bowdoin',
        vehicle_id: undefined,
        vehicle_lat: undefined,
        vehicle_lon: undefined,
        vehicle_bearing: undefined,
        vehicle_timestamp: undefined,
        stop_name: 'Wonderland',
        pre_away: '1284' },
    { route_id: '946_',
        trip_id: '25372722',
        trip_name: '11:48 pm from Bowdoin to Wonderland',
        trip_headsign: 'Wonderland',
        vehicle_id: '0731',
        vehicle_lat: '42.39066',
        vehicle_lon: '-70.99699',
        vehicle_bearing: '35',
        vehicle_timestamp: '1424239956',
        stop_name: 'Beachmont - Outbound',
        pre_away: '75' },
    { route_id: '946_',
        trip_id: '25372723',
        trip_name: '11:58 pm from Bowdoin to Wonderland',
        trip_headsign: 'Wonderland',
        vehicle_id: '0721',
        vehicle_lat: '42.36135',
        vehicle_lon: '-71.04671',
        vehicle_bearing: '40',
        vehicle_timestamp: '1424239948',
        stop_name: 'Maverick - Outbound',
        pre_away: '53' },
    { route_id: '946_',
        trip_id: '25372724',
        trip_name: '12:08 am from Bowdoin to Wonderland',
        trip_headsign: 'Wonderland',
        vehicle_id: undefined,
        vehicle_lat: undefined,
        vehicle_lon: undefined,
        vehicle_bearing: undefined,
        vehicle_timestamp: undefined,
        stop_name: 'Bowdoin',
        pre_away: '210' },
    { route_id: '946_',
        trip_id: '25372725',
        trip_name: '12:18 am from Bowdoin to Wonderland',
        trip_headsign: 'Wonderland',
        vehicle_id: undefined,
        vehicle_lat: undefined,
        vehicle_lon: undefined,
        vehicle_bearing: undefined,
        vehicle_timestamp: undefined,
        stop_name: 'Bowdoin',
        pre_away: '738' }
],
    '903_': [
        { route_id: '903_',
            trip_id: '9863A9E5',
            trip_name: 'Sullivan Square to Forest Hills',
            trip_headsign: 'Forest Hills',
            vehicle_id: '1296',
            vehicle_lat: '42.35881',
            vehicle_lon: '-71.05782',
            vehicle_bearing: '175',
            vehicle_timestamp: '1424239967',
            stop_name: 'Downtown Crossing - to Forest Hills',
            pre_away: '56' },
        { route_id: '903_',
            trip_id: '25729550',
            trip_name: '12:35 am from Forest Hills Orange Line to Oak Grove',
            trip_headsign: 'Oak Grove',
            vehicle_id: '1314',
            vehicle_lat: '42.35533',
            vehicle_lon: '-71.06059',
            vehicle_bearing: '25',
            vehicle_timestamp: '1424239093',
            stop_name: 'Haymarket - Orange Line Outbound',
            pre_away: '70' }
    ],
    '931_': [
        { route_id: '931_',
            trip_id: '25374524',
            trip_name: '12:22 am from Alewife to Ashmont - Outbound',
            trip_headsign: 'Ashmont',
            vehicle_id: '1638',
            vehicle_lat: '42.35648',
            vehicle_lon: '-71.06265',
            vehicle_bearing: '130',
            vehicle_timestamp: '1424239747',
            stop_name: 'South Station - Outbound',
            pre_away: '71' },
        { route_id: '931_',
            trip_id: '25374558',
            trip_name: '12:14 am from Ashmont - Inbound to Alewife',
            trip_headsign: 'Alewife',
            vehicle_id: '1882',
            vehicle_lat: '42.35266',
            vehicle_lon: '-71.05536',
            vehicle_bearing: '290',
            vehicle_timestamp: '1424239959',
            stop_name: 'Downtown Crossing - to Alewife',
            pre_away: '52' },
        { route_id: '931_',
            trip_id: '25374528',
            trip_name: '12:30 am from Ashmont - Inbound to Alewife',
            trip_headsign: 'Alewife',
            vehicle_id: '1757',
            vehicle_lat: '42.32335',
            vehicle_lon: '-71.05328',
            vehicle_bearing: '330',
            vehicle_timestamp: '1424239822',
            stop_name: 'Andrew - Inbound',
            pre_away: '42' }
    ] };

exports.routes = function (req, res) {
    res.send(routes);
};

exports.trips = function (req, res) {
    res.status(_(trips).has(req.params.id) ? 200 : 404);
    res.send(trips[req.params.id]);
};


