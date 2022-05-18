/* Source - https://geographyfieldwork.com/WorldCapitalCities.htm */
const citiesList = [
    {
        country: "Afghanistan",
        city: "Kabul",
        id: Math.random()*100000,
    },
    {
        country: "Albania",
        city: "Tirana",
        id: Math.random()*100000,
    },
    {
        country: "Algeria",
        city: "Algiers",
        id: Math.random()*100000,
    },
    {
        country: "Andorra",
        city: "Andorra la Vella",
        id: Math.random()*100000,
    },
    {
        country: "Angola",
        city: "Luanda",
        id: Math.random()*100000,
    },
    {
        country: "Antigua and Barbuda",
        city: "Saint John's",
        id: Math.random()*100000,
    },
    {
        country: "Argentina",
        city: "Buenos Aires",
        id: Math.random()*100000,
    },
    {
        country: "Armenia",
        city: "Yerevan",
        id: Math.random()*100000,
    },
    {
        country: "Australia",
        city: "Canberra",
        id: Math.random()*100000,
    },
    {
        country: "Austria",
        city: "Vienna",
        id: Math.random()*100000,
    },
    {
        country: "Azerbaijan",
        city: "Baku",
        id: Math.random()*100000,
    },
    {
        country: "Bahamas",
        city: "Nassau",
        id: Math.random()*100000,
    },
    {
        country: "Bahrain",
        city: "Manama",
        id: Math.random()*100000,
    },
    {
        country: "Bangladesh",
        city: "Dhaka",
        id: Math.random()*100000,
    },
    {
        country: "Barbados",
        city: "Bridgetown",
        id: Math.random()*100000,
    },
    {
        country: "Belarus",
        city: "Minsk",
        id: Math.random()*100000,
    },
    {
        country: "Belgium",
        city: "Brussels",
        id: Math.random()*100000,
    },
    {
        country: "Belize",
        city: "Belmopan",
        id: Math.random()*100000,
    },
    {
        country: "Benin",
        city: "Porto Novo",
        id: Math.random()*100000,
    },
    {
        country: "Bhutan",
        city: "Thimphu",
        id: Math.random()*100000,
    },
    {
        country: "Bolivia",
        city: "La Paz",
        id: Math.random()*100000,
    },
    {
        country: "Bosnia and Herzegovina",
        city: "Sarajevo",
        id: Math.random()*100000,
    },
    {
        country: "Botswana",
        city: "Gaborone",
        id: Math.random()*100000,
    },
    {
        country: "Brazil",
        city: "Brasilia",
        id: Math.random()*100000,
    },
    {
        country: "Brunei",
        city: "Bandar Seri Begawan",
        id: Math.random()*100000,
    },
    {
        country: "Bulgaria",
        city: "Sofia",
        id: Math.random()*100000,
    },
    {
        country: "Burkina Faso",
        city: "Ouagadougou",
        id: Math.random()*100000,
    },
    {
        country: "Burundi",
        city: "Gitega",
        id: Math.random()*100000,
    },
    {
        country: "Cambodia",
        city: "Phnom Penh",
        id: Math.random()*100000,
    },
    {
        country: "Cameroon",
        city: "Yaounde",
        id: Math.random()*100000,
    },
    {
        country: "Canada",
        city: "Ottawa",
        id: Math.random()*100000,
    },
    {
        country: "Cape Verde",
        city: "Praia",
        id: Math.random()*100000,
    },
    {
        country: "Central African Republic",
        city: "Bangui",
        id: Math.random()*100000,
    },
    {
        country: "Chad",
        city: "N'Djamena",
        id: Math.random()*100000,
    },
    {
        country: "Chile",
        city: "Santiago",
        id: Math.random()*100000,
    },
    {
        country: "China",
        city: "Beijing",
        id: Math.random()*100000,
    },
    {
        country: "Colombia",
        city: "Bogota",
        id: Math.random()*100000,
    },
    {
        country: "Comoros",
        city: "Moroni",
        id: Math.random()*100000,
    },
    {
        country: "Costa Rica",
        city: "San Jose",
        id: Math.random()*100000,
    },
    {
        country: 'Cote D\'Ivoire',
        city: "Yamoussoukro",
        id: Math.random()*100000,
    },
    {
        country: "Croatia",
        city: "Zagreb",
        id: Math.random()*100000,
    },
    {
        country: "Cuba",
        city: "Havana",
        id: Math.random()*100000,
    },
    {
        country: "Cyprus",
        city: "Nicosia",
        id: Math.random()*100000,
    },
    {
        country: "Czech Republic",
        city: "Prague",
        id: Math.random()*100000,
    },
    {
        country: "Democratic Republic of the Congo",
        city: "Brazzaville",
        id: Math.random()*100000,
    },
    {
        country: "Denmark",
        city: "Copenhagen",
        id: Math.random()*100000,
    },
    {
        country: "Djibouti",
        city: "Djibouti",
        id: Math.random()*100000,
    },
    {
        country: "Dominica",
        city: "Roseau",
        id: Math.random()*100000,
    },
    {
        country: "Dominican Republic",
        city: "Santo Domingo",
        id: Math.random()*100000,
    },
    {
        country: "Ecuador",
        city: "Quito",
        id: Math.random()*100000,
    },
    {
        country: "Egypt",
        city: "Cairo",
        id: Math.random()*100000,
    },
    {
        country: "El Salvador",
        city: "San Salvador",
        id: Math.random()*100000,
    },
    {
        country: "Equatorial Guinea",
        city: "Malabo",
        id: Math.random()*100000,
    },
    {
        country: "Eritrea",
        city: "Asmara",
        id: Math.random()*100000,
    },
    {
        country: "Estonia",
        city: "Tallinn",
        id: Math.random()*100000,
    },
    {
        country: "Ethiopia",
        city: "Addis Ababa",
        id: Math.random()*100000,
    },
    {
        country: "Fiji",
        city: "Suva",
        id: Math.random()*100000,
    },
    {
        country: "Finland",
        city: "Helsinki",
        id: Math.random()*100000,
    },
    {
        country: "France",
        city: "Paris",
        id: Math.random()*100000,
    },
    {
        country: "Gabon",
        city: "Libreville",
        id: Math.random()*100000,
    },
    {
        country: "Gambia",
        city: "Banjul",
        id: Math.random()*100000,
    },
    {
        country: "Georgia",
        city: "Tbilisi",
        id: Math.random()*100000,
    },
    {
        country: "Germany",
        city: "Berlin",
        id: Math.random()*100000,
    },
    {
        country: "Ghana",
        city: "Accra",
        id: Math.random()*100000,
    },
    {
        country: "Greece",
        city: "Athens",
        id: Math.random()*100000,
    },
    {
        country: "Grenada",
        city: "Saint George's",
        id: Math.random()*100000,
    },
    {
        country: "Guatemala",
        city: "Guatemala City",
        id: Math.random()*100000,
    },
    {
        country: "Guinea",
        city: "Conakry",
        id: Math.random()*100000,
    },
    {
        country: "Guinea-Bissau",
        city: "Bissau",
        id: Math.random()*100000,
    },
    {
        country: "Guyana",
        city: "Georgetown",
        id: Math.random()*100000,
    },
    {
        country: "Haiti",
        city: "Port au Prince",
        id: Math.random()*100000,
    },
    {
        country: "Honduras",
        city: "Tegucigalpa",
        id: Math.random()*100000,
    },
    {
        country: "Hungary",
        city: "Budapest",
        id: Math.random()*100000,
    },
    {
        country: "Iceland",
        city: "Reykjavik",
        id: Math.random()*100000,
    },
    {
        country: "India",
        city: "New Delhi",
        id: Math.random()*100000,
    },
    {
        country: "Indonesia",
        city: "Jakarta",
        id: Math.random()*100000,
    },
    {
        country: "Iran",
        city: "Tehran",
        id: Math.random()*100000,
    },
    {
        country: "Iraq",
        city: "Baghdad",
        id: Math.random()*100000,
    },
    {
        country: "Ireland",
        city: "Dublin",
        id: Math.random()*100000,
    },
    {
        country: "Israel",
        city: "Jerusalem",
        id: Math.random()*100000,
    },
    {
        country: "Italy",
        city: "Rome",
        id: Math.random()*100000,
    },
    {
        country: "Jamaica",
        city: "Kingston",
        id: Math.random()*100000,
    },
    {
        country: "Japan",
        city: "Tokyo",
        id: Math.random()*100000,
    },
    {
        country: "Jordan",
        city: "Amman",
        id: Math.random()*100000,
    },
    {
        country: "Kazakhstan",
        city: "Nur-Sultan",
        id: Math.random()*100000,
    },
    {
        country: "Kenya",
        city: "Nairobi",
        id: Math.random()*100000,
    },
    {
        country: "Kuwait",
        city: "Kuwait City",
        id: Math.random()*100000,
    },
    {
        country: "Kyrgyzstan",
        city: "Bishkek",
        id: Math.random()*100000,
    },
    {
        country: "Latvia",
        city: "Riga",
        id: Math.random()*100000,
    },
    {
        country: "Lebanon",
        city: "Beirut",
        id: Math.random()*100000,
    },
    {
        country: "Lesotho",
        city: "Maseru",
        id: Math.random()*100000,
    },
    {
        country: "Liberia",
        city: "Monrovia",
        id: Math.random()*100000,
    },
    {
        country: "Liechtenstein",
        city: "Vaduz",
        id: Math.random()*100000,
    },
    {
        country: "Lithuania",
        city: "Vilnius",
        id: Math.random()*100000,
    },
    {
        country: "Luxembourg",
        city: "Luxembourg",
        id: Math.random()*100000,
    },
    {
        country: "Madagascar",
        city: "Antananarivo",
        id: Math.random()*100000,
    },
    {
        country: "Malawi",
        city: "Lilongwe",
        id: Math.random()*100000,
    },
    {
        country: "Malaysia",
        city: "Kuala Lumpur",
        id: Math.random()*100000,
    },
    {
        country: "Maldives",
        city: "Male",
        id: Math.random()*100000,
    },
    {
        country: "Mali",
        city: "Bamako",
        id: Math.random()*100000,
    },
    {
        country: "Malta",
        city: "Valletta",
        id: Math.random()*100000,
    },
    {
        country: "Marshall Islands",
        city: "Majuro",
        id: Math.random()*100000,
    },
    {
        country: "Mauritania",
        city: "Nouakchott",
        id: Math.random()*100000,
    },
    {
        country: "Mauritius",
        city: "Port Louis",
        id: Math.random()*100000,
    },
    {
        country: "Mexico",
        city: "Mexico City",
        id: Math.random()*100000,
    },
    {
        country: "Monaco",
        city: "Monaco",
        id: Math.random()*100000,
    },
    {
        country: "Mongolia",
        city: "Ulaanbaatar",
        id: Math.random()*100000,
    },
    {
        country: "Montenegro",
        city: "Podgorica",
        id: Math.random()*100000,
    },
    {
        country: "Morocco",
        city: "Rabat",
        id: Math.random()*100000,
    },
    {
        country: "Mozambique",
        city: "Maputo",
        id: Math.random()*100000,
    },
    {
        country: "Myanmar",
        city: "Nay Pyi Taw",
        id: Math.random()*100000,
    },
    {
        country: "Namibia",
        city: "Windhoek",
        id: Math.random()*100000,
    },
    {
        country: "Nepal",
        city: "Kathmandu",
        id: Math.random()*100000,
    },
    {
        country: "Netherlands",
        city: "Amsterdam",
        id: Math.random()*100000,
    },
    {
        country: "New Zealand",
        city: "Wellington",
        id: Math.random()*100000,
    },
    {
        country: "Nicaragua",
        city: "Managua",
        id: Math.random()*100000,
    },
    {
        country: "Niger",
        city: "Niamey",
        id: Math.random()*100000,
    },
    {
        country: "Nigeria",
        city: "Abuja",
        id: Math.random()*100000,
    },
    {
        country: "Norway",
        city: "Oslo",
        id: Math.random()*100000,
    },
    {
        country: "Oman",
        city: "Muscat",
        id: Math.random()*100000,
    },
    {
        country: "Pakistan",
        city: "Islamabad",
        id: Math.random()*100000,
    },
    {
        country: "Palau",
        city: "Melekeok",
        id: Math.random()*100000,
    },
    {
        country: "Panama",
        city: "Panama City",
        id: Math.random()*100000,
    },
    {
        country: "Papua New Guinea",
        city: "Port Moresby",
        id: Math.random()*100000,
    },
    {
        country: "Paraguay",
        city: "Asuncion",
        id: Math.random()*100000,
    },
    {
        country: "Peru",
        city: "Lima",
        id: Math.random()*100000,
    },
    {
        country: "Philippines",
        city: "Manila",
        id: Math.random()*100000,
    },
    {
        country: "Poland",
        city: "Warsaw",
        id: Math.random()*100000,
    },
    {
        country: "Portugal",
        city: "Lisbon",
        id: Math.random()*100000,
    },
    {
        country: "Qatar",
        city: "Doha",
        id: Math.random()*100000,
    },
    {
        country: "Romania",
        city: "Bucharest",
        id: Math.random()*100000,
    },
    {
        country: "Russia",
        city: "Moscow",
        id: Math.random()*100000,
    },
    {
        country: "Rwanda",
        city: "Kigali",
        id: Math.random()*100000,
    },
    {
        country: "Saint Lucia",
        city: "Castries",
        id: Math.random()*100000,
    },
    {
        country: "Saint Vincent and the Grenadines",
        city: "Kingstown",
        id: Math.random()*100000,
    },
    {
        country: "Samoa",
        city: "Apia",
        id: Math.random()*100000,
    },
    {
        country: "San Marino",
        city: "San Marino",
        id: Math.random()*100000,
    },
    {
        country: "Sao Tome and Principe",
        city: "Sao Tome",
        id: Math.random()*100000,
    },
    {
        country: "Saudi Arabia",
        city: "Riyadh",
        id: Math.random()*100000,
    },
    {
        country: "Senegal",
        city: "Dakar",
        id: Math.random()*100000,
    },
    {
        country: "Serbia",
        city: "Belgrade",
        id: Math.random()*100000,
    },
    {
        country: "Seychelles",
        city: "Victoria",
        id: Math.random()*100000,
    },
    {
        country: "Sierra Leone",
        city: "Freetown",
        id: Math.random()*100000,
    },
    {
        country: "Singapore",
        city: "Singapore",
        id: Math.random()*100000,
    },
    {
        country: "Slovakia",
        city: "Bratislava",
        id: Math.random()*100000,
    },
    {
        country: "Slovenia",
        city: "Ljubljana",
        id: Math.random()*100000,
    },
    {
        country: "Solomon Islands",
        city: "Honiara",
        id: Math.random()*100000,
    },
    {
        country: "Somalia",
        city: "Mogadishu",
        id: Math.random()*100000,
    },
    {
        country: "South Africa",
        city: "Cape Town",
        id: Math.random()*100000,
    },
    {
        country: "Spain",
        city: "Madrid",
        id: Math.random()*100000,
    },
    {
        country: "Sri Lanka",
        city: "Colombo",
        id: Math.random()*100000,
    },
    {
        country: "Sudan",
        city: "Khartoum",
        id: Math.random()*100000,
    },
    {
        country: "Suriname",
        city: "Paramaribo",
        id: Math.random()*100000,
    },
    {
        country: "Sweden",
        city: "Stockholm",
        id: Math.random()*100000,
    },
    {
        country: "Switzerland",
        city: "Bern",
        id: Math.random()*100000,
    },
    {
        country: "Syria",
        city: "Damascus",
        id: Math.random()*100000,
    },
    {
        country: "Taiwan",
        city: "Taipei",
        id: Math.random()*100000,
    },
    {
        country: "Tajikistan",
        city: "Dushanbe",
        id: Math.random()*100000,
    },
    {
        country: "Tanzania",
        city: "Dodoma",
        id: Math.random()*100000,
    },
    {
        country: "Thailand",
        city: "Bangkok",
        id: Math.random()*100000,
    },
    {
        country: "Togo",
        city: "Lome",
        id: Math.random()*100000,
    },
    {
        country: "Tonga",
        city: "Nuku'alofa",
        id: Math.random()*100000,
    },
    {
        country: "Trinidad and Tobago",
        city: "Port of Spain",
        id: Math.random()*100000,
    },
    {
        country: "Tunisia",
        city: "Tunis",
        id: Math.random()*100000,
    },
    {
        country: "Turkey",
        city: "Ankara",
        id: Math.random()*100000,
    },
    {
        country: "Turkmenistan",
        city: "Ashgabat",
        id: Math.random()*100000,
    },
    {   country: "Tuvalu",
        city: "Funafuti",
        id: Math.random()*100000,
    },
    {
        country: "Uganda",
        city: "Kampala",
        id: Math.random()*100000,
    },
    {
        country: "Ukraine",
        city: "Kyiv",
        id: Math.random()*100000,
    },
    {
        country: "United Arab Emirates",
        city: "Abu Dhabi",
        id: Math.random()*100000,
    },
    {
        country: "United Kingdom",
        city: "London",
        id: Math.random()*100000,
    },
    {
        country: "United States",
        city: "Washington D.C.",
        id: Math.random()*100000,
    },
    {
        country: "Uruguay",
        city: "Montevideo",
        id: Math.random()*100000,
    },
    {
        country: "Uzbekistan",
        city: "Tashkent",
        id: Math.random()*100000,
    },
    {
        country: "Vanuatu",
        city: "Port Vila",
        id: Math.random()*100000,
    },
    {
        country: "Vietnam",
        city: "Hanoi",
        id: Math.random()*100000,
    },
    {
        country: "Yemen",
        city: "Sana'a",
        id: Math.random()*100000,
    },
    {
        country: "Zambia",
        city: "Lusaka",
        id: Math.random()*100000,
    },
    {
        country: "Zimbabwe",
        city: "Harare",
        id: Math.random()*100000,
    }
]
export default citiesList;
