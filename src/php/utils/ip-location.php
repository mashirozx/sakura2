<?php

function get_ip_location($ip)
{
    $reader = new GeoIp2\Database\Reader('/var/www/dev/wp-content/themes/sakura2/data/GeoLite2-City.mmdb');

    $record = $reader->city($ip);

    $location = $record->city->name . ', ';
    $location .= $record->mostSpecificSubdivision->name . ', ';
    $location .= $record->country->name;

    return $location;
}

// echo get_ip_location('128.101.101.101');

// QQwarry
// echo json_encode(IpLocation::getLocation('101.87.249.108'), JSON_UNESCAPED_UNICODE);

// GeoIP2
// use GeoIp2\Database\Reader;

// $reader = new Reader('/var/www/dev/wp-content/themes/sakura2/data/GeoLite2-City.mmdb');

// $record = $reader->city('128.101.101.101');

// print($record->country->isoCode . "\n"); // 'US'
// print($record->country->name . "\n"); // 'United States'
// print($record->country->names['ja'] . "\n"); // '美国'

// print($record->mostSpecificSubdivision->name . "\n"); // 'Minnesota'
// print($record->mostSpecificSubdivision->isoCode . "\n"); // 'MN'

// print($record->city->name . "\n"); // 'Minneapolis'

// print($record->postal->code . "\n"); // '55455'

// print($record->location->latitude . "\n"); // 44.9733
// print($record->location->longitude . "\n"); // -93.2323
