var map = L.map('map').setView([52.5838, -0.2216], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(52.5779, -0.2376),
		L.latLng(52.5865, -0.2327)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}
})).addTo(map);

L.Routing.errorControl(control).addTo(map);

var myIcon = L.icon({
	iconUrl: 'red_marker.png',
	iconSize: [40, 40],
});

var m1 = L.marker([52.58958094, -0.23378378],{icon: myIcon}).addTo(map); //0
m1.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m2 = L.marker([52.57525136, -0.24297829],{icon: myIcon}).addTo(map); //1
m2.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m3 = L.marker([52.60850500, -0.25864660],{icon: myIcon}).addTo(map); //2
m3.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m4 = L.marker([52.62816000, -0.25383267],{icon: myIcon}).addTo(map); //3
m4.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m5 = L.marker([52.64850200, -0.30180425],{icon: myIcon}).addTo(map); //4
m5.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m6 = L.marker([52.62270100, -0.05630068],{icon: myIcon}).addTo(map); //5
m6.bindPopup("<h2>B1167</h2><h3>Year: 2019<br>All vehicles: 730</h3>");
var m7 = L.marker([52.64179150, -0.13639241],{icon: myIcon}).addTo(map); //6
m7.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m8 = L.marker([52.57235900, -0.34110809],{icon: myIcon}).addTo(map); //7
m8.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m9 = L.marker([52.61187400, -0.18656751],{icon: myIcon}).addTo(map); //8
m9.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m10 = L.marker([52.58573200, -0.41623878],{icon: myIcon}).addTo(map); //9
m10.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m11 = L.marker([52.60784600, -0.20373285],{icon: myIcon}).addTo(map); //10
m11.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m12 = L.marker([52.55016700, -0.23223993],{icon: myIcon}).addTo(map); //11
m12.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m13 = L.marker([52.57253600, -0.32371799],{icon: myIcon}).addTo(map); //12
m13.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m14 = L.marker([52.55129489, -0.22939213],{icon: myIcon}).addTo(map); //13
m14.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m15 = L.marker([52.55047783, -0.21688793],{icon: myIcon}).addTo(map); //14
m15.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m16 = L.marker([52.67043400, -0.32293149],{icon: myIcon}).addTo(map); //15
m16.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m17 = L.marker([52.53907300, -0.29107825],{icon: myIcon}).addTo(map); //16
m17.bindPopup("<h2>A1139</h2><h3>Year: 2021<br>All vehicles: 67899</h3>");
var m18 = L.marker([52.54295700, -0.26143363],{icon: myIcon}).addTo(map); //17
m18.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m19 = L.marker([52.59333300, -0.46641154],{icon: myIcon}).addTo(map); //18
m19.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m20 = L.marker([52.54822255, -0.24647684],{icon: myIcon}).addTo(map); //19
m20.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m21 = L.marker([52.55878200, -0.24930129],{icon: myIcon}).addTo(map); //20
m21.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 7696</h3>");
var m22 = L.marker([52.56241100, -0.28220449],{icon: myIcon}).addTo(map); //21
m22.bindPopup("<h2>A1260</h2><h3>Year: 2021<br>All vehicles: 54396</h3>");
var m23 = L.marker([52.59310200, -0.22947878],{icon: myIcon}).addTo(map); //22
m23.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m24 = L.marker([52.59303410, -0.21643031],{icon: myIcon}).addTo(map); //23
m24.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m25 = L.marker([52.59275850, -0.26505831],{icon: myIcon}).addTo(map); //24
m25.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m26 = L.marker([52.56431300, -0.24818106],{icon: myIcon}).addTo(map); //25
m26.bindPopup("<h2>U</h2><h3>Year: 2019<br>All vehicles: 1399</h3>");
var m27 = L.marker([52.53417400, -0.26887244],{icon: myIcon}).addTo(map); //26
m27.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m28 = L.marker([52.60237871, -0.24917295],{icon: myIcon}).addTo(map); //27
m28.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m29 = L.marker([52.63066943, -0.13466333],{icon: myIcon}).addTo(map); //28
m29.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m30 = L.marker([52.54222552, -0.29759178],{icon: myIcon}).addTo(map); //29
m30.bindPopup("<h2>U</h2><h3>Year: 2009<br>All vehicles: 570</h3>");
var m31 = L.marker([52.63222300, -0.34847915],{icon: myIcon}).addTo(map); //30
m31.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m32 = L.marker([52.59155100, -0.24244442],{icon: myIcon}).addTo(map); //31
m32.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m33 = L.marker([52.63849500, -0.22034548],{icon: myIcon}).addTo(map); //32
m33.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m34 = L.marker([52.59357900, -0.27642363],{icon: myIcon}).addTo(map); //33
m34.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m35 = L.marker([52.58529400, -0.41246101],{icon: myIcon}).addTo(map); //34
m35.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m36 = L.marker([52.60594000, -0.22337869],{icon: myIcon}).addTo(map); //35
m36.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m37 = L.marker([52.55308600, -0.22902503],{icon: myIcon}).addTo(map); //36
m37.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m38 = L.marker([52.54127500, -0.25707620],{icon: myIcon}).addTo(map); //37
m38.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m39 = L.marker([52.58567888, -0.41621115],{icon: myIcon}).addTo(map); //38
m39.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m40 = L.marker([52.55231635, -0.23156353],{icon: myIcon}).addTo(map); //39
m40.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m41 = L.marker([52.63753800, -0.49077245],{icon: myIcon}).addTo(map); //40
m41.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m42 = L.marker([52.54783700, -0.32808091],{icon: myIcon}).addTo(map); //41
m42.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m43 = L.marker([52.58698400, -0.28102234],{icon: myIcon}).addTo(map); //42
m43.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m44 = L.marker([52.56676400, -0.24190105],{icon: myIcon}).addTo(map); //43
m44.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m45 = L.marker([52.55765600, -0.24610071],{icon: myIcon}).addTo(map); //44
m45.bindPopup("<h2>A1129</h2><h3>Year: 2021<br>All vehicles: 5638</h3>");
var m46 = L.marker([52.60361800, -0.24131161],{icon: myIcon}).addTo(map); //45
m46.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m47 = L.marker([52.61534625, -0.15516765],{icon: myIcon}).addTo(map); //46
m47.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m48 = L.marker([52.63429559, -0.40780624],{icon: myIcon}).addTo(map); //47
m48.bindPopup("<h2>Bainton Road</h2><h3>Year: 2009<br>All vehicles: 3038</h3>");
var m49 = L.marker([52.59463700, -0.24437317],{icon: myIcon}).addTo(map); //48
m49.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m50 = L.marker([52.53523152, -0.22542345],{icon: myIcon}).addTo(map); //49
m50.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m51 = L.marker([52.54751564, -0.27547096],{icon: myIcon}).addTo(map); //50
m51.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m52 = L.marker([52.61509800, -0.26869523],{icon: myIcon}).addTo(map); //51
m52.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m53 = L.marker([52.54988100, -0.30806240],{icon: myIcon}).addTo(map); //52
m53.bindPopup("<h2>U</h2><h3>Year: 2019<br>All vehicles: 857</h3>");
var m54 = L.marker([52.53841100, -0.27026877],{icon: myIcon}).addTo(map); //53
m54.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m55 = L.marker([52.64173266, -0.11449032],{icon: myIcon}).addTo(map); //54
m55.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m56 = L.marker([52.58206200, -0.11928106],{icon: myIcon}).addTo(map); //55
m56.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m57 = L.marker([52.60009056, -0.28885209],{icon: myIcon}).addTo(map); //56
m57.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m58 = L.marker([52.65080300, -0.19771512],{icon: myIcon}).addTo(map); //57
m58.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m59 = L.marker([52.62548000, -0.28269081],{icon: myIcon}).addTo(map); //58
m59.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m60 = L.marker([52.63423500, -0.26164456],{icon: myIcon}).addTo(map); //59
m60.bindPopup("<h2>U</h2><h3>Year: 2019<br>All vehicles: 474</h3>");
var m61 = L.marker([52.61308336, -0.17741880],{icon: myIcon}).addTo(map); //60
m61.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m62 = L.marker([52.59579523, -0.21231692],{icon: myIcon}).addTo(map); //61
m62.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m63 = L.marker([52.54960200, -0.19479956],{icon: myIcon}).addTo(map); //62
m63.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m64 = L.marker([52.54848000, -0.23968214],{icon: myIcon}).addTo(map); //63
m64.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m65 = L.marker([52.54799800, -0.23748914],{icon: myIcon}).addTo(map); //64
m65.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m66 = L.marker([52.55309300, -0.22946727],{icon: myIcon}).addTo(map); //65
m66.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m67 = L.marker([52.60751000, -0.27364662],{icon: myIcon}).addTo(map); //66
m67.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m68 = L.marker([52.55535394, -0.24840517],{icon: myIcon}).addTo(map); //67
m68.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m69 = L.marker([52.57284446, -0.28858491],{icon: myIcon}).addTo(map); //68
m69.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m70 = L.marker([52.62703842, -0.27106084],{icon: myIcon}).addTo(map); //69
m70.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m71 = L.marker([52.60743037, -0.31795529],{icon: myIcon}).addTo(map); //70
m71.bindPopup("<h2>C</h2><h3>Year: 2009<br>All vehicles: 3521</h3>");
var m72 = L.marker([52.59104010, -0.24181529],{icon: myIcon}).addTo(map); //71
m72.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m73 = L.marker([52.56153389, -0.25288001],{icon: myIcon}).addTo(map); //72
m73.bindPopup("<h2>A1129</h2><h3>Year: 2002<br>All vehicles: 1448</h3>");
var m74 = L.marker([52.54201900, -0.30525322],{icon: myIcon}).addTo(map); //73
m74.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m75 = L.marker([52.57073300, -0.29375802],{icon: myIcon}).addTo(map); //74
m75.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m76 = L.marker([52.53943431, -0.30545598],{icon: myIcon}).addTo(map); //75
m76.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m77 = L.marker([52.56969318, -0.28206748],{icon: myIcon}).addTo(map); //76
m77.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m78 = L.marker([52.63772400, -0.29753686],{icon: myIcon}).addTo(map); //77
m78.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m79 = L.marker([52.63891474, -0.35824728],{icon: myIcon}).addTo(map); //78
m79.bindPopup("<h2>B1443</h2><h3>Year: 2008<br>All vehicles: 4020</h3>");
var m80 = L.marker([52.60803978, -0.19446482],{icon: myIcon}).addTo(map); //79
m80.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m81 = L.marker([52.61076322, -0.44336802],{icon: myIcon}).addTo(map); //80
m81.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m82 = L.marker([52.59188549, -0.22555647],{icon: myIcon}).addTo(map); //81
m82.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m83 = L.marker([52.58481900, -0.23955490],{icon: myIcon}).addTo(map); //82
m83.bindPopup("<h2>All Saints Road</h2><h3>Year: 2019<br>All vehicles: 620</h3>");
var m84 = L.marker([52.59696067, -0.24879838],{icon: myIcon}).addTo(map); //83
m84.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m85 = L.marker([52.64218800, -0.23457688],{icon: myIcon}).addTo(map); //84
m85.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m86 = L.marker([52.61204874, -0.26416294],{icon: myIcon}).addTo(map); //85
m86.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m87 = L.marker([52.57926417, -0.29171471],{icon: myIcon}).addTo(map); //86
m87.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m88 = L.marker([52.58924032, -0.26609779],{icon: myIcon}).addTo(map); //87
m88.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m89 = L.marker([52.55678071, -0.22228226],{icon: myIcon}).addTo(map); //88
m89.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m90 = L.marker([52.59616011, -0.22342002],{icon: myIcon}).addTo(map); //89
m90.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m91 = L.marker([52.62363700, -0.27465203],{icon: myIcon}).addTo(map); //90
m91.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m92 = L.marker([52.60315633, -0.26290493],{icon: myIcon}).addTo(map); //91
m92.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m93 = L.marker([52.58972800, -0.25047444],{icon: myIcon}).addTo(map); //92
m93.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m94 = L.marker([52.55495600, -0.31398879],{icon: myIcon}).addTo(map); //93
m94.bindPopup("<h2>C</h2><h3>Year: 2019<br>All vehicles: 3185</h3>");
var m95 = L.marker([52.55789030, -0.31158975],{icon: myIcon}).addTo(map); //94
m95.bindPopup("<h2>U</h2><h3>Year: 2009<br>All vehicles: 1263</h3>");
var m96 = L.marker([52.55680318, -0.21899173],{icon: myIcon}).addTo(map); //95
m96.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m97 = L.marker([52.57498876, -0.27958781],{icon: myIcon}).addTo(map); //96
m97.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m98 = L.marker([52.56095300, -0.25017380],{icon: myIcon}).addTo(map); //97
m98.bindPopup("<h2>U</h2><h3>Year: 2019<br>All vehicles: 821</h3>");
var m99 = L.marker([52.62066400, -0.26995292],{icon: myIcon}).addTo(map); //98
m99.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m100 = L.marker([52.60731600, -0.27080394],{icon: myIcon}).addTo(map); //99
m100.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m101 = L.marker([52.58773127, -0.20880698],{icon: myIcon}).addTo(map); //100
m101.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m102 = L.marker([52.62861818, -0.36915285],{icon: myIcon}).addTo(map); //101
m102.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m103 = L.marker([52.60914236, -0.24995179],{icon: myIcon}).addTo(map); //102
m103.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m104 = L.marker([52.54865619, -0.22070800],{icon: myIcon}).addTo(map); //103
m104.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m105 = L.marker([52.62987800, -0.27660817],{icon: myIcon}).addTo(map); //104
m105.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m106 = L.marker([52.54413700, -0.25914541],{icon: myIcon}).addTo(map); //105
m106.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m107 = L.marker([52.57673056, -0.22881021],{icon: myIcon}).addTo(map); //106
m107.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m108 = L.marker([52.55631379, -0.26474101],{icon: myIcon}).addTo(map); //107
m108.bindPopup("<h2>U</h2><h3>Year: 2009<br>All vehicles: 8784</h3>");
var m109 = L.marker([52.56364300, -0.24059474],{icon: myIcon}).addTo(map); //108
m109.bindPopup("<h2>U</h2><h3>Year: 2021<br>All vehicles: 327</h3>");
var m110 = L.marker([52.57291600, -0.22993792],{icon: myIcon}).addTo(map); //109
m110.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m111 = L.marker([52.56592300, -0.24577093],{icon: myIcon}).addTo(map); //110
m111.bindPopup("<h2>A605</h2><h3>Year: 2021<br>All vehicles: 9630</h3>");
var m112 = L.marker([52.57713400, -0.27392515],{icon: myIcon}).addTo(map); //111
m112.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m113 = L.marker([52.66039000, -0.33047254],{icon: myIcon}).addTo(map); //112
m113.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m114 = L.marker([52.60410100, -0.29024636],{icon: myIcon}).addTo(map); //113
m114.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m115 = L.marker([52.53952700, -0.26729049],{icon: myIcon}).addTo(map); //114
m115.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m116 = L.marker([52.63810000, -0.42690984],{icon: myIcon}).addTo(map); //115
m116.bindPopup("<h2>Bainton Road</h2><h3>Year: 2021<br>All vehicles: 2287</h3>");
var m117 = L.marker([52.58340100, -0.23063733],{icon: myIcon}).addTo(map); //116
m117.bindPopup("<h2>Braodway</h2><h3>Year: 2021<br>All vehicles: 3603</h3>");
var m118 = L.marker([52.61382200, -0.18638361],{icon: myIcon}).addTo(map); //117
m118.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m119 = L.marker([52.55063600, -0.25051049],{icon: myIcon}).addTo(map); //118
m119.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m120 = L.marker([52.55667700, -0.25715914],{icon: myIcon}).addTo(map); //119
m120.bindPopup("<h2>U</h2><h3>Year: 2021<br>All vehicles: 5995</h3>");
var m121 = L.marker([52.60891100, -0.44486626],{icon: myIcon}).addTo(map); //120
m121.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m122 = L.marker([52.66118300, -0.03940725],{icon: myIcon}).addTo(map); //121
m122.bindPopup("<h2>B1167</h2><h3>Year: 2021<br>All vehicles: 1505</h3>");
var m123 = L.marker([52.58224100, -0.26833713],{icon: myIcon}).addTo(map); //122
m123.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m124 = L.marker([52.65797700, -0.18054951],{icon: myIcon}).addTo(map); //123
m124.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m125 = L.marker([52.59992900, -0.22304604],{icon: myIcon}).addTo(map); //124
m125.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m126 = L.marker([52.60121800, -0.26264200],{icon: myIcon}).addTo(map); //125
m126.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m127 = L.marker([52.53820200, -0.25601827],{icon: myIcon}).addTo(map); //126
m127.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m128 = L.marker([52.55018800, -0.32014497],{icon: myIcon}).addTo(map); //127
m128.bindPopup("<h2>A605</h2><h3>Year: 2021<br>All vehicles: 9122</h3>");
var m129 = L.marker([52.60654772, -0.20870386],{icon: myIcon}).addTo(map); //128
m129.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m130 = L.marker([52.62717600, -0.26094915],{icon: myIcon}).addTo(map); //129
m130.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m131 = L.marker([52.58003600, -0.37804090],{icon: myIcon}).addTo(map); //130
m131.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m132 = L.marker([52.54221300, -0.25364729],{icon: myIcon}).addTo(map); //131
m132.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m133 = L.marker([52.57121100, -0.32539171],{icon: myIcon}).addTo(map); //132
m133.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m134 = L.marker([52.55245100, -0.22865234],{icon: myIcon}).addTo(map); //133
m134.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m135 = L.marker([52.54960358, -0.19479948],{icon: myIcon}).addTo(map); //134
m135.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m136 = L.marker([52.60089600, -0.25175715],{icon: myIcon}).addTo(map); //135
m136.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m137 = L.marker([52.60680700, -0.22124648],{icon: myIcon}).addTo(map); //136
m137.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m138 = L.marker([52.54868300, -0.23524932],{icon: myIcon}).addTo(map); //137
m138.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m139 = L.marker([52.54818400, -0.23792414],{icon: myIcon}).addTo(map); //138
m139.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m140 = L.marker([52.57235800, -0.31689243],{icon: myIcon}).addTo(map); //139
m140.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m141 = L.marker([52.54802800, -0.23955272],{icon: myIcon}).addTo(map); //140
m141.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m142 = L.marker([52.54814400, -0.23527095],{icon: myIcon}).addTo(map); //141
m142.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m143 = L.marker([52.55170200, -0.22906600],{icon: myIcon}).addTo(map); //142
m143.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m144 = L.marker([52.62441000, -0.08562661],{icon: myIcon}).addTo(map); //143
m144.bindPopup("<h2>A47</h2><h3>Year: 2021<br>All vehicles: 17705</h3>");
var m145 = L.marker([52.54772500, -0.25183566],{icon: myIcon}).addTo(map); //144
m145.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m146 = L.marker([52.55308759, -0.22902496],{icon: myIcon}).addTo(map); //145
m146.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m147 = L.marker([52.54953600, -0.23211780],{icon: myIcon}).addTo(map); //146
m147.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m148 = L.marker([52.58272400, -0.41720328],{icon: myIcon}).addTo(map); //147
m148.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m149 = L.marker([52.64204500, -0.48467582],{icon: myIcon}).addTo(map); //148
m149.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m150 = L.marker([52.58938100, -0.21457094],{icon: myIcon}).addTo(map); //149
m150.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m151 = L.marker([52.55085884, -0.23029466],{icon: myIcon}).addTo(map); //150
m151.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m152 = L.marker([52.55307700, -0.22843537],{icon: myIcon}).addTo(map); //151
m152.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m153 = L.marker([52.63908900, -0.49261073],{icon: myIcon}).addTo(map); //152
m153.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m154 = L.marker([52.58581911, -0.41325389],{icon: myIcon}).addTo(map); //153
m154.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m155 = L.marker([52.62074432, -0.07073241],{icon: myIcon}).addTo(map); //154
m155.bindPopup("<h2>B1040</h2><h3>Year: 2006<br>All vehicles: 15641</h3>");
var m156 = L.marker([52.58494800, -0.41549945],{icon: myIcon}).addTo(map); //155
m156.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m157 = L.marker([52.55509000, -0.30446934],{icon: myIcon}).addTo(map); //156
m157.bindPopup("<h2>A605</h2><h3>Year: 2021<br>All vehicles: 13343</h3>");
var m158 = L.marker([52.57041500, -0.24559162],{icon: myIcon}).addTo(map); //157
m158.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 26755</h3>");
var m159 = L.marker([52.58492300, -0.25386894],{icon: myIcon}).addTo(map); //158
m159.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m160 = L.marker([52.62882646, -0.18385714],{icon: myIcon}).addTo(map); //159
m160.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m161 = L.marker([52.57585700, -0.24876873],{icon: myIcon}).addTo(map); //160
m161.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m162 = L.marker([52.55518300, -0.24914952],{icon: myIcon}).addTo(map); //161
m162.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m163 = L.marker([52.59462500, -0.25938894],{icon: myIcon}).addTo(map); //162
m163.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m164 = L.marker([52.55954500, -0.24012435],{icon: myIcon}).addTo(map); //163
m164.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m165 = L.marker([52.60220000, -0.20666624],{icon: myIcon}).addTo(map); //164
m165.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m166 = L.marker([52.58312400, -0.41352836],{icon: myIcon}).addTo(map); //165
m166.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m167 = L.marker([52.63021200, -0.29536081],{icon: myIcon}).addTo(map); //166
m167.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m168 = L.marker([52.55759600, -0.23002354],{icon: myIcon}).addTo(map); //167
m168.bindPopup("<h2>A606</h2><h3>Year: 2021<br>All vehicles: 10312</h3>");
var m169 = L.marker([52.53598400, -0.30827231],{icon: myIcon}).addTo(map); //168
m169.bindPopup("<h2>A1139</h2><h3>Year: 2021<br>All vehicles: 52659</h3>");
var m170 = L.marker([52.56188200, -0.26195422],{icon: myIcon}).addTo(map); //169
m170.bindPopup("<h2>A605</h2><h3>Year: 2021<br>All vehicles: 10894</h3>");
var m171 = L.marker([52.62379600, -0.26706668],{icon: myIcon}).addTo(map); //170
m171.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m172 = L.marker([52.55003000, -0.26610987],{icon: myIcon}).addTo(map); //171
m172.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m173 = L.marker([52.60280300, -0.22583884],{icon: myIcon}).addTo(map); //172
m173.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m174 = L.marker([52.56080100, -0.24597527],{icon: myIcon}).addTo(map); //173
m174.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 6165</h3>");
var m175 = L.marker([52.57287900, -0.26025025],{icon: myIcon}).addTo(map); //174
m175.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m176 = L.marker([52.59213500, -0.41774995],{icon: myIcon}).addTo(map); //175
m176.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 25700</h3>");
var m177 = L.marker([52.56497200, -0.24226783],{icon: myIcon}).addTo(map); //176
m177.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 14568</h3>");
var m178 = L.marker([52.58003752, -0.37804083],{icon: myIcon}).addTo(map); //177
m178.bindPopup("<h2>A15</h2><h3>Year: 2021<br>All vehicles: 14568</h3>");