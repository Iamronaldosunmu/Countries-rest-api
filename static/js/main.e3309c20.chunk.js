(this["webpackJsonpcountries-rest-api"]=this["webpackJsonpcountries-rest-api"]||[]).push([[0],{34:function(e,a,n){},35:function(e,a,n){},64:function(e,a,n){"use strict";n.r(a);var t,c,o,r,i,l,s,d,m,u,b,j,p,h,g,f,O=n(0),x=n.n(O),S=n(27),v=n.n(S),y=(n(34),n(18)),N=n(6),C=n(2),E=(n(35),n(7)),M=n.n(E),I=n(12),A=["title","titleId"];function R(){return R=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},R.apply(this,arguments)}function w(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function B(e,a){var n=e.title,x=e.titleId,S=w(e,A);return O.createElement("svg",R({className:"searchIcon",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 489.713 489.713",style:{enableBackground:"new 0 0 489.713 489.713"},xmlSpace:"preserve",ref:a,"aria-labelledby":x},S),n?O.createElement("title",{id:x},n):null,t||(t=O.createElement("g",null,O.createElement("path",{stroke:"#b3b3b3",strokeWidth:20,d:"M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144   s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144   c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z"}))),c||(c=O.createElement("g",null)),o||(o=O.createElement("g",null)),r||(r=O.createElement("g",null)),i||(i=O.createElement("g",null)),l||(l=O.createElement("g",null)),s||(s=O.createElement("g",null)),d||(d=O.createElement("g",null)),m||(m=O.createElement("g",null)),u||(u=O.createElement("g",null)),b||(b=O.createElement("g",null)),j||(j=O.createElement("g",null)),p||(p=O.createElement("g",null)),h||(h=O.createElement("g",null)),g||(g=O.createElement("g",null)),f||(f=O.createElement("g",null)))}var L=O.forwardRef(B),T=(n.p,n(1));var k=function(e){return Object(T.jsxs)("form",{className:"searchInputGroup",onSubmit:e.onSubmit,children:[Object(T.jsx)("button",{className:"searchBtn",children:Object(T.jsx)(L,{})}),Object(T.jsx)("input",{type:"text",value:e.inputValue,class:"searchInput",placeholder:"Search for a country...",onChange:e.onInputChange})]})};var P=function(e){return Object(T.jsxs)("select",{className:"filter",onChange:e.onFilterChange,children:[Object(T.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Filter by Region"}),Object(T.jsx)("option",{value:"",children:"All"}),Object(T.jsx)("option",{value:"Africa",children:"Africa"}),Object(T.jsx)("option",{value:"Americas",children:"Americas"}),Object(T.jsx)("option",{value:"Asia",children:"Asia"}),Object(T.jsx)("option",{value:"Europe",children:"Europe"}),Object(T.jsx)("option",{value:"Oceania",children:"Oceania"})]})};var G=function(e){return Object(T.jsx)("section",{class:"controlSectionContainer",children:Object(T.jsxs)("div",{className:"controlSection container",children:[Object(T.jsx)(k,{inputValue:e.inputValue,onInputChange:e.onInputChange,onSubmit:e.onSubmit}),Object(T.jsx)(P,{onFilterChange:e.onFilterChange})]})})};var D=function(e){var a=e.flagUrl,n=e.name,t=e.population,c=e.region,o=e.capital,r=e.history;return Object(T.jsxs)("div",{className:"countryContainer",onClick:function(){return r.push("".concat(n))},children:[Object(T.jsx)("section",{className:"countryFlag",children:Object(T.jsx)("img",{src:a})}),Object(T.jsxs)("section",{className:"countryInformation",children:[Object(T.jsx)("h2",{className:"countryName",children:n}),Object(T.jsxs)("p",{className:"countryPopulation",children:[Object(T.jsx)("span",{className:"infoName",children:"Population: "}),Object(T.jsx)("span",{className:"infoValue",children:t.toLocaleString("en-US")})]}),Object(T.jsxs)("p",{className:"countryPopulation",children:[Object(T.jsx)("span",{className:"infoName",children:"Region: "}),Object(T.jsx)("span",{className:"infoValue",children:c})]}),Object(T.jsxs)("p",{className:"countryPopulation",children:[Object(T.jsx)("span",{className:"infoName",children:"Capital: "}),Object(T.jsx)("span",{className:"infoValue",children:o})]})]})]})};var U=function(e){var a=e.countryData,n=e.history,t=a.slice(0,12);return Object(T.jsx)("section",{class:"countriesContainer",children:Object(T.jsx)("div",{className:"container grid grid-1x2 grid-1x3 grid-1x4",children:t.map((function(e){return Object(T.jsx)(D,{flagUrl:e.flags.png,name:e.name,population:e.population,region:e.region,capital:e.capital,history:n},t.indexOf(e))}))})})},F=n(8),V=n.n(F);var K,H,z,W,Z,Y,J,X,q,Q,_,$,ee,ae,ne,te,ce=function(e){var a=Object(O.useState)([]),n=Object(N.a)(a,2),t=n[0],c=n[1],o=Object(O.useState)(""),r=Object(N.a)(o,2),i=r[0],l=r[1],s=Object(O.useState)(""),d=Object(N.a)(s,2),m=d[0],u=d[1];Object(O.useEffect)((function(){function a(){return(a=Object(I.a)(M.a.mark((function a(){var n,t;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,V.a.get("https://restcountries.com/v2/all");case 2:n=a.sent,t=n.data,c(t),e.getCountryData(t);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[]);var b=function(e,a){return e.filter((function(e){return e.name.toLowerCase().startsWith(a.toLowerCase())}))},j=function(e,a){return e.filter((function(e){return e.region===a}))};return Object(T.jsxs)(x.a.Fragment,{children:[Object(T.jsx)(G,{inputValue:m,onInputChange:function(e){u(e.currentTarget.value)},onSubmit:function(e){e.preventDefault()},onFilterChange:function(e){l(e.target.value)}}),Object(T.jsx)(U,{countryData:function(e){var a=i?j(e,i):e;return b(a,m)}(t),history:e.history})]})},oe=[{name:"Afghanistan",code:"AFG"},{name:"\xc5land Islands",code:"ALA"},{name:"Albania",code:"ALB"},{name:"Algeria",code:"DZA"},{name:"American Samoa",code:"ASM"},{name:"Andorra",code:"AND"},{name:"Angola",code:"AGO"},{name:"Anguilla",code:"AIA"},{name:"Antarctica",code:"ATA"},{name:"Antigua and Barbuda",code:"ATG"},{name:"Argentina",code:"ARG"},{name:"Armenia",code:"ARM"},{name:"Aruba",code:"ABW"},{name:"Australia",code:"AUS"},{name:"Austria",code:"AUT"},{name:"Azerbaijan",code:"AZE"},{name:"Bahamas",code:"BHS"},{name:"Bahrain",code:"BHR"},{name:"Bangladesh",code:"BGD"},{name:"Barbados",code:"BRB"},{name:"Belarus",code:"BLR"},{name:"Belgium",code:"BEL"},{name:"Belize",code:"BLZ"},{name:"Benin",code:"BEN"},{name:"Bermuda",code:"BMU"},{name:"Bhutan",code:"BTN"},{name:"Bolivia (Plurinational State of)",code:"BOL"},{name:"Bonaire, Sint Eustatius and Saba",code:"BES"},{name:"Bosnia and Herzegovina",code:"BIH"},{name:"Botswana",code:"BWA"},{name:"Bouvet Island",code:"BVT"},{name:"Brazil",code:"BRA"},{name:"British Indian Ocean Territory",code:"IOT"},{name:"United States Minor Outlying Islands",code:"UMI"},{name:"Virgin Islands (British)",code:"VGB"},{name:"Virgin Islands (U.S.)",code:"VIR"},{name:"Brunei Darussalam",code:"BRN"},{name:"Bulgaria",code:"BGR"},{name:"Burkina Faso",code:"BFA"},{name:"Burundi",code:"BDI"},{name:"Cambodia",code:"KHM"},{name:"Cameroon",code:"CMR"},{name:"Canada",code:"CAN"},{name:"Cabo Verde",code:"CPV"},{name:"Cayman Islands",code:"CYM"},{name:"Central African Republic",code:"CAF"},{name:"Chad",code:"TCD"},{name:"Chile",code:"CHL"},{name:"China",code:"CHN"},{name:"Christmas Island",code:"CXR"},{name:"Cocos (Keeling) Islands",code:"CCK"},{name:"Colombia",code:"COL"},{name:"Comoros",code:"COM"},{name:"Congo",code:"COG"},{name:"Congo (Democratic Republic of the)",code:"COD"},{name:"Cook Islands",code:"COK"},{name:"Costa Rica",code:"CRI"},{name:"Croatia",code:"HRV"},{name:"Cuba",code:"CUB"},{name:"Cura\xe7ao",code:"CUW"},{name:"Cyprus",code:"CYP"},{name:"Czech Republic",code:"CZE"},{name:"Denmark",code:"DNK"},{name:"Djibouti",code:"DJI"},{name:"Dominica",code:"DMA"},{name:"Dominican Republic",code:"DOM"},{name:"Ecuador",code:"ECU"},{name:"Egypt",code:"EGY"},{name:"El Salvador",code:"SLV"},{name:"Equatorial Guinea",code:"GNQ"},{name:"Eritrea",code:"ERI"},{name:"Estonia",code:"EST"},{name:"Ethiopia",code:"ETH"},{name:"Falkland Islands (Malvinas)",code:"FLK"},{name:"Faroe Islands",code:"FRO"},{name:"Fiji",code:"FJI"},{name:"Finland",code:"FIN"},{name:"France",code:"FRA"},{name:"French Guiana",code:"GUF"},{name:"French Polynesia",code:"PYF"},{name:"French Southern Territories",code:"ATF"},{name:"Gabon",code:"GAB"},{name:"Gambia",code:"GMB"},{name:"Georgia",code:"GEO"},{name:"Germany",code:"DEU"},{name:"Ghana",code:"GHA"},{name:"Gibraltar",code:"GIB"},{name:"Greece",code:"GRC"},{name:"Greenland",code:"GRL"},{name:"Grenada",code:"GRD"},{name:"Guadeloupe",code:"GLP"},{name:"Guam",code:"GUM"},{name:"Guatemala",code:"GTM"},{name:"Guernsey",code:"GGY"},{name:"Guinea",code:"GIN"},{name:"Guinea-Bissau",code:"GNB"},{name:"Guyana",code:"GUY"},{name:"Haiti",code:"HTI"},{name:"Heard Island and McDonald Islands",code:"HMD"},{name:"Vatican City",code:"VAT"},{name:"Honduras",code:"HND"},{name:"Hungary",code:"HUN"},{name:"Hong Kong",code:"HKG"},{name:"Iceland",code:"ISL"},{name:"India",code:"IND"},{name:"Indonesia",code:"IDN"},{name:"Ivory Coast",code:"CIV"},{name:"Iran (Islamic Republic of)",code:"IRN"},{name:"Iraq",code:"IRQ"},{name:"Ireland",code:"IRL"},{name:"Isle of Man",code:"IMN"},{name:"Israel",code:"ISR"},{name:"Italy",code:"ITA"},{name:"Jamaica",code:"JAM"},{name:"Japan",code:"JPN"},{name:"Jersey",code:"JEY"},{name:"Jordan",code:"JOR"},{name:"Kazakhstan",code:"KAZ"},{name:"Kenya",code:"KEN"},{name:"Kiribati",code:"KIR"},{name:"Kuwait",code:"KWT"},{name:"Kyrgyzstan",code:"KGZ"},{name:"Lao People's Democratic Republic",code:"LAO"},{name:"Latvia",code:"LVA"},{name:"Lebanon",code:"LBN"},{name:"Lesotho",code:"LSO"},{name:"Liberia",code:"LBR"},{name:"Libya",code:"LBY"},{name:"Liechtenstein",code:"LIE"},{name:"Lithuania",code:"LTU"},{name:"Luxembourg",code:"LUX"},{name:"Macao",code:"MAC"},{name:"North Macedonia",code:"MKD"},{name:"Madagascar",code:"MDG"},{name:"Malawi",code:"MWI"},{name:"Malaysia",code:"MYS"},{name:"Maldives",code:"MDV"},{name:"Mali",code:"MLI"},{name:"Malta",code:"MLT"},{name:"Marshall Islands",code:"MHL"},{name:"Martinique",code:"MTQ"},{name:"Mauritania",code:"MRT"},{name:"Mauritius",code:"MUS"},{name:"Mayotte",code:"MYT"},{name:"Mexico",code:"MEX"},{name:"Micronesia (Federated States of)",code:"FSM"},{name:"Moldova (Republic of)",code:"MDA"},{name:"Monaco",code:"MCO"},{name:"Mongolia",code:"MNG"},{name:"Montenegro",code:"MNE"},{name:"Montserrat",code:"MSR"},{name:"Morocco",code:"MAR"},{name:"Mozambique",code:"MOZ"},{name:"Myanmar",code:"MMR"},{name:"Namibia",code:"NAM"},{name:"Nauru",code:"NRU"},{name:"Nepal",code:"NPL"},{name:"Netherlands",code:"NLD"},{name:"New Caledonia",code:"NCL"},{name:"New Zealand",code:"NZL"},{name:"Nicaragua",code:"NIC"},{name:"Niger",code:"NER"},{name:"Nigeria",code:"NGA"},{name:"Niue",code:"NIU"},{name:"Norfolk Island",code:"NFK"},{name:"Korea (Democratic People's Republic of)",code:"PRK"},{name:"Northern Mariana Islands",code:"MNP"},{name:"Norway",code:"NOR"},{name:"Oman",code:"OMN"},{name:"Pakistan",code:"PAK"},{name:"Palau",code:"PLW"},{name:"Palestine, State of",code:"PSE"},{name:"Panama",code:"PAN"},{name:"Papua New Guinea",code:"PNG"},{name:"Paraguay",code:"PRY"},{name:"Peru",code:"PER"},{name:"Philippines",code:"PHL"},{name:"Pitcairn",code:"PCN"},{name:"Poland",code:"POL"},{name:"Portugal",code:"PRT"},{name:"Puerto Rico",code:"PRI"},{name:"Qatar",code:"QAT"},{name:"Republic of Kosovo",code:"UNK"},{name:"R\xe9union",code:"REU"},{name:"Romania",code:"ROU"},{name:"Russian Federation",code:"RUS"},{name:"Rwanda",code:"RWA"},{name:"Saint Barth\xe9lemy",code:"BLM"},{name:"Saint Helena, Ascension and Tristan da Cunha",code:"SHN"},{name:"Saint Kitts and Nevis",code:"KNA"},{name:"Saint Lucia",code:"LCA"},{name:"Saint Martin (French part)",code:"MAF"},{name:"Saint Pierre and Miquelon",code:"SPM"},{name:"Saint Vincent and the Grenadines",code:"VCT"},{name:"Samoa",code:"WSM"},{name:"San Marino",code:"SMR"},{name:"Sao Tome and Principe",code:"STP"},{name:"Saudi Arabia",code:"SAU"},{name:"Senegal",code:"SEN"},{name:"Serbia",code:"SRB"},{name:"Seychelles",code:"SYC"},{name:"Sierra Leone",code:"SLE"},{name:"Singapore",code:"SGP"},{name:"Sint Maarten (Dutch part)",code:"SXM"},{name:"Slovakia",code:"SVK"},{name:"Slovenia",code:"SVN"},{name:"Solomon Islands",code:"SLB"},{name:"Somalia",code:"SOM"},{name:"South Africa",code:"ZAF"},{name:"South Georgia and the South Sandwich Islands",code:"SGS"},{name:"Korea (Republic of)",code:"KOR"},{name:"Spain",code:"ESP"},{name:"Sri Lanka",code:"LKA"},{name:"Sudan",code:"SDN"},{name:"South Sudan",code:"SSD"},{name:"Suriname",code:"SUR"},{name:"Svalbard and Jan Mayen",code:"SJM"},{name:"Swaziland",code:"SWZ"},{name:"Sweden",code:"SWE"},{name:"Switzerland",code:"CHE"},{name:"Syrian Arab Republic",code:"SYR"},{name:"Taiwan",code:"TWN"},{name:"Tajikistan",code:"TJK"},{name:"Tanzania, United Republic of",code:"TZA"},{name:"Thailand",code:"THA"},{name:"Timor-Leste",code:"TLS"},{name:"Togo",code:"TGO"},{name:"Tokelau",code:"TKL"},{name:"Tonga",code:"TON"},{name:"Trinidad and Tobago",code:"TTO"},{name:"Tunisia",code:"TUN"},{name:"Turkey",code:"TUR"},{name:"Turkmenistan",code:"TKM"},{name:"Turks and Caicos Islands",code:"TCA"},{name:"Tuvalu",code:"TUV"},{name:"Uganda",code:"UGA"},{name:"Ukraine",code:"UKR"},{name:"United Arab Emirates",code:"ARE"},{name:"United Kingdom of Great Britain and Northern Ireland",code:"GBR"},{name:"United States of America",code:"USA"},{name:"Uruguay",code:"URY"},{name:"Uzbekistan",code:"UZB"},{name:"Vanuatu",code:"VUT"},{name:"Venezuela (Bolivarian Republic of)",code:"VEN"},{name:"Vietnam",code:"VNM"},{name:"Wallis and Futuna",code:"WLF"},{name:"Western Sahara",code:"ESH"},{name:"Yemen",code:"YEM"},{name:"Zambia",code:"ZMB"},{name:"Zimbabwe",code:"ZWE"}],re=["title","titleId"];function ie(){return ie=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},ie.apply(this,arguments)}function le(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function se(e,a){var n=e.title,t=e.titleId,c=le(e,re);return O.createElement("svg",ie({className:"backIcon",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:a,"aria-labelledby":t},c),n?O.createElement("title",{id:t},n):null,K||(K=O.createElement("path",{d:"M3.919,243.077c-0.223,0.33-0.414,0.675-0.618,1.015c-0.186,0.31-0.382,0.614-0.552,0.936  c-0.186,0.349-0.346,0.709-0.514,1.066c-0.157,0.332-0.321,0.658-0.464,0.998c-0.144,0.349-0.261,0.706-0.388,1.06  c-0.129,0.362-0.268,0.718-0.38,1.089c-0.107,0.358-0.188,0.721-0.279,1.085c-0.093,0.374-0.199,0.743-0.275,1.125  c-0.084,0.422-0.133,0.849-0.194,1.275c-0.047,0.326-0.109,0.645-0.143,0.976c-0.15,1.53-0.15,3.07,0,4.6  c0.034,0.33,0.096,0.65,0.143,0.976c0.061,0.425,0.11,0.853,0.194,1.275c0.076,0.382,0.18,0.749,0.275,1.125  c0.092,0.362,0.171,0.726,0.279,1.085c0.112,0.369,0.251,0.726,0.38,1.089c0.127,0.354,0.244,0.711,0.388,1.06  c0.143,0.34,0.307,0.666,0.464,0.998c0.168,0.355,0.327,0.715,0.514,1.064c0.171,0.321,0.366,0.625,0.552,0.936  c0.203,0.34,0.394,0.684,0.618,1.015c0.234,0.351,0.493,0.68,0.745,1.015c0.205,0.272,0.393,0.549,0.608,0.813  c0.489,0.596,1.002,1.168,1.548,1.711l116.36,116.36c4.544,4.544,10.501,6.817,16.455,6.817c5.956,0,11.913-2.271,16.455-6.817  c9.089-9.089,9.089-23.824,0-32.912l-76.636-76.636h409.272c12.853,0,23.273-10.42,23.273-23.273  c0-12.853-10.42-23.273-23.273-23.273H79.456l76.636-76.636c9.089-9.089,9.089-23.824,0-32.912c-9.087-9.089-23.824-9.089-32.912,0  L6.82,239.538c-0.546,0.543-1.06,1.116-1.548,1.711c-0.216,0.264-0.403,0.541-0.608,0.813  C4.412,242.397,4.153,242.726,3.919,243.077z"})),H||(H=O.createElement("g",null)),z||(z=O.createElement("g",null)),W||(W=O.createElement("g",null)),Z||(Z=O.createElement("g",null)),Y||(Y=O.createElement("g",null)),J||(J=O.createElement("g",null)),X||(X=O.createElement("g",null)),q||(q=O.createElement("g",null)),Q||(Q=O.createElement("g",null)),_||(_=O.createElement("g",null)),$||($=O.createElement("g",null)),ee||(ee=O.createElement("g",null)),ae||(ae=O.createElement("g",null)),ne||(ne=O.createElement("g",null)),te||(te=O.createElement("g",null)))}var de=O.forwardRef(se);n.p;var me=function(e){var a=e.flag,n=e.name,t=e.nativeName,c=e.population,o=e.region,r=e.subregion,i=e.capital,l=e.topLevelDomain,s=e.currencies,d=e.languages,m=e.borders,u=e.history;return console.log(m),Object(T.jsxs)("div",{className:"countryDetailsComponent",children:[Object(T.jsx)("div",{className:"flagImageContainer",children:Object(T.jsx)("img",{src:a})}),Object(T.jsxs)("div",{className:"extraCountryInfo",children:[Object(T.jsx)("h2",{children:n}),Object(T.jsxs)("div",{className:"countryInfoTextContainer",children:[Object(T.jsxs)("div",{className:"countryInfoTextContainer1",children:[Object(T.jsxs)("p",{class:"details",children:["Native Name: ",Object(T.jsx)("span",{className:"detailValue",children:t||"none"})]}),Object(T.jsxs)("p",{class:"details",children:["Population: ",Object(T.jsx)("span",{className:"detailValue",children:c||"none"})]}),Object(T.jsxs)("p",{class:"details",children:["Region: ",Object(T.jsx)("span",{className:"detailValue",children:o||"none"})]}),Object(T.jsxs)("p",{class:"details",children:["Sub Region: ",Object(T.jsx)("span",{className:"detailValue",children:r||"none"})]}),Object(T.jsxs)("p",{class:"details",children:["Capital: ",Object(T.jsx)("span",{className:"detailValue",children:i||"none"})]})]}),Object(T.jsxs)("div",{className:"countryInfoTextContainer2",children:[Object(T.jsxs)("p",{class:"details",children:["Top Level Domain ",Object(T.jsx)("span",{className:"detailValue",children:l[0]})]}),Object(T.jsxs)("p",{class:"details",children:["Currencies: ",Object(T.jsx)("span",{className:"detailValue",children:s&&s[0].name})]}),Object(T.jsxs)("p",{class:"details",children:["Languages: ",Object(T.jsx)("span",{className:"detailValue",children:d&&function(e){var a=[];return e.forEach((function(e){return a.push(e.name)})),a.length>1?a.join(", "):a}(d)})]})]})]}),Object(T.jsxs)("div",{class:"borderCountriesContainer",children:[Object(T.jsx)("h4",{children:"Border Countries:"}),Object(T.jsx)("div",{className:"borderItems",children:m&&m.map((function(e){return Object(T.jsx)("div",{onClick:function(){return u.push("/".concat(e))},children:e})}))})]})]})]})};var ue,be,je=function(e){var a=e.history,n=e.match.params.name,t=Object(O.useState)([]),c=Object(N.a)(t,2),o=c[0],r=c[1],i=Object(O.useState)([]),l=Object(N.a)(i,2),s=l[0],d=l[1];return Object(O.useEffect)((function(){function e(){return(e=Object(I.a)(M.a.mark((function e(){var a,t,c,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://restcountries.com/v2/name/".concat(n,"?fullText=true"));case 2:a=e.sent,t=a.data,r(t),c=t[0].borders,o=[],c&&c.forEach((function(e){var a=oe.filter((function(a){return a.code===e}));o.push(a[0].name)})),d(o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(T.jsxs)("section",{className:"countryDetailsPage container",children:[Object(T.jsxs)("button",{className:"backButton",onClick:function(){return a.goBack()},children:[Object(T.jsx)(de,{}),Object(T.jsx)("p",{class:"backButtonText",children:"Back"})]}),o.map((function(e){return Object(T.jsx)(me,{flag:e.flag,name:e.name,nativeName:e.nativeName,population:e.population.toLocaleString("en-US"),region:e.region,subregion:e.subregion,capital:e.capital,topLevelDomain:e.topLevelDomain,currencies:e.currencies,languages:e.languages,borders:s,history:a})}))]})},pe=["title","titleId"];function he(){return he=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},he.apply(this,arguments)}function ge(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function fe(e,a){var n=e.title,t=e.titleId,c=ge(e,pe);return O.createElement("svg",he({className:"themeSvg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:256,height:256,viewBox:"0 0 256 256",xmlSpace:"preserve",ref:a,"aria-labelledby":t},c),n?O.createElement("title",{id:t},n):null,ue||(ue=O.createElement("desc",null,"Created with Fabric.js 1.7.22")),be||(be=O.createElement("defs",null)),O.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{}},O.createElement("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:1},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},O.createElement("path",{d:"M 46.715 90 c -3.908 0 -7.841 -0.514 -11.717 -1.552 C 23.391 85.337 13.69 77.893 7.682 67.487 C 1.674 57.08 0.077 44.957 3.188 33.349 c 3.11 -11.607 10.554 -21.308 20.961 -27.316 c 8.601 -4.967 18.349 -6.923 28.193 -5.659 c 1.257 0.162 2.277 1.095 2.548 2.332 c 0.271 1.238 -0.265 2.512 -1.338 3.185 c -13.943 8.735 -18.418 26.742 -10.188 40.996 l 0 0 C 51.592 61.14 69.426 66.268 83.96 58.56 c 1.117 -0.596 2.491 -0.421 3.426 0.434 c 0.936 0.854 1.235 2.204 0.746 3.373 c -3.826 9.156 -10.395 16.621 -18.997 21.586 C 62.204 87.955 54.509 90 46.715 90 z M 43.74 6.101 c -5.805 0.421 -11.436 2.15 -16.592 5.127 c -9.019 5.207 -15.47 13.614 -18.166 23.674 C 6.287 44.961 7.67 55.469 12.877 64.488 c 5.207 9.019 13.614 15.471 23.673 18.165 c 10.058 2.697 20.567 1.311 29.585 -3.895 c 5.156 -2.977 9.47 -6.989 12.737 -11.806 c -15.547 4.094 -32.303 -2.515 -40.705 -17.066 l 0 0 C 29.768 35.336 32.427 17.518 43.74 6.101 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(0,0,0)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}))))}var Oe,xe,Se=O.forwardRef(fe),ve=(n.p,["title","titleId"]);function ye(){return ye=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},ye.apply(this,arguments)}function Ne(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ce(e,a){var n=e.title,t=e.titleId,c=Ne(e,ve);return O.createElement("svg",ye({className:"themeSvg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:256,height:256,viewBox:"0 0 256 256",xmlSpace:"preserve",ref:a,"aria-labelledby":t},c),n?O.createElement("title",{id:t},n):null,Oe||(Oe=O.createElement("desc",null,"Created with Fabric.js 1.7.22")),xe||(xe=O.createElement("defs",null)),O.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{}},O.createElement("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:1},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},O.createElement("path",{d:"M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z",style:{strokeWidth:10,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}))))}var Ee=O.forwardRef(Ce);n.p;var Me=function(e){var a=e.changeTheme,n=e.isDarkTheme;return Object(T.jsx)("div",{className:"navbar",children:Object(T.jsxs)("div",{className:"navbarContainer container",children:[Object(T.jsx)("p",{className:"navbarTitle",children:"Where in the world?"}),Object(T.jsxs)("button",{className:"themeButton",onClick:a,children:[n?Object(T.jsx)(Ee,{}):Object(T.jsx)(Se,{}),Object(T.jsx)("span",{class:"themeButtonText",children:"Dark Mode"})]})]})})};var Ie=function(){var e=Object(O.useState)("darkTheme"),a=Object(N.a)(e,2),n=a[0],t=(a[1],Object(O.useState)(document.body.classList.contains(n))),c=Object(N.a)(t,2),o=c[0],r=c[1],i=Object(O.useState)([]),l=Object(N.a)(i,2),s=(l[0],l[1]),d=function(e){s(e)};return Object(T.jsxs)(x.a.Fragment,{children:[Object(T.jsx)(Me,{changeTheme:function(){document.body.classList.toggle(n),r(document.body.classList.contains(n))},isDarkTheme:o}),Object(T.jsxs)(C.c,{children:[Object(T.jsx)(C.a,{path:"/:name",render:function(e){return Object(T.jsx)(je,Object(y.a)({},e))}}),Object(T.jsx)(C.a,{path:"/",exact:!0,render:function(e){return Object(T.jsx)(ce,Object(y.a)({getCountryData:d},e))}})]})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,o=a.getLCP,r=a.getTTFB;n(e),t(e),c(e),o(e),r(e)}))},Re=n(15);v.a.render(Object(T.jsx)(x.a.StrictMode,{children:Object(T.jsx)(Re.a,{children:Object(T.jsx)(Ie,{})})}),document.getElementById("root")),Ae()}},[[64,1,2]]]);
//# sourceMappingURL=main.e3309c20.chunk.js.map