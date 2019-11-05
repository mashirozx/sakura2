/**
 * Function to convert hex format to a rgb color
 * @param   {string}    rgb the rgb string, eg. `rgb(252, 184, 171)` or `rgba(252, 184, 171, 1)`
 * @return  {string}        the hex triplet, eg. `#fcb8ab`
 */
export default function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}