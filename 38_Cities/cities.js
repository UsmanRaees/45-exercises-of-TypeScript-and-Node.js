"use strict";
function describe_city(city, country = 'Default Country.') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('California', 'America');
describe_city('France');
