<?php

namespace Sakura\Classes;

use Exception;
use GeoIp2\Database\Reader;
use Sakura\Classes\Lib\QqIpLocation;

class GetIpLocation
{
    /**
     * print($record->country->isoCode . "\n"); // 'US'
     * print($record->country->name . "\n"); // 'United States'
     * print($record->country->names['zh-CN'] . "\n"); // '美国'
     *
     * print($record->mostSpecificSubdivision->name . "\n"); // 'Minnesota'
     * print($record->mostSpecificSubdivision->isoCode . "\n"); // 'MN'
     *
     * print($record->city->name . "\n"); // 'Minneapolis'
     *
     * print($record->postal->code . "\n"); // '55455'
     *
     * print($record->location->latitude . "\n"); // 44.9733
     * print($record->location->longitude . "\n"); // -93.2323
     *
     * @param string $ip
     * @param string $lang = sakura_options('geo_ip_local')
     * @return string
     */
    public static function get_ip_location_geoip2($ip, $lang = 'en')
    {
        $reader = new Reader(__DIR__ . '/../../data/GeoLite2-City.mmdb');

        $record = $reader->city($ip);

        $location = $record->city->names[$lang] . ', ';

        // TOTO: 处理直辖市
        if (array_key_exists($lang, $record->mostSpecificSubdivision->names)) {
            $location .= $record->mostSpecificSubdivision->names[$lang] . ', ';
        } else {
            $location .= '';
        }

        $location .= $record->country->names[$lang];

        return $location;
    }

    /**
     * echo json_encode(QqIpLocation::getLocation('101.87.249.108'), JSON_UNESCAPED_UNICODE);
     *
     * @return string
     */
    public static function get_ip_location_qqwarry($ip)
    {
        return QqIpLocation::getLocation($ip)['area'];
    }

    /**
     * UA string to readble string
     * @since 4.0
     *
     * @param string $ip;
     * @param string $db 1:geoip2 2:qqwarry
     * @return string
     */
    public static function get_location($ip, $db = null)
    {
        $db = $db ? sakura_options('ip_database') : 1;
        try {
            if (sakura_options('ip_database') == 1) {
                return self::get_ip_location_geoip2($ip, sakura_options('geo_ip_local'));
            } else {
                return self::get_ip_location_qqwarry($ip);
            }
        } catch (Exception $e) {
            return '';
        }
    }
}
