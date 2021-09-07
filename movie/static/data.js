// var DATA = {"a" : "b", "c" : "d"};

var Instructions_Dic = new Array();
var Connections_Dic = new Array();

//Defines a prompt action statement for a dictionary storage edge
// path_instruction_dic0 -> placeid=0


var path_instruction_dic0 = new Array(); 
path_instruction_dic0['Entrance_D424'] = 'Go downstairs and go straight. It is the first room on the right'
path_instruction_dic0['D424_Entrance'] = 'Go straight ahead and go upstairs'
path_instruction_dic0['Entrance_D401(D403 D404)'] = 'Go straight and turn left.'
path_instruction_dic0['D401(D403 D404)_Entrance'] = 'Go straight and turn right.'
path_instruction_dic0['Entrance_FirstFloor'] = 'Go straight, turn right, enter the stairwell and go upstairs'
path_instruction_dic0['FirstFloor_Entrance'] = 'Go upstairs'
path_instruction_dic0['D424_D401(D403 D404)'] = 'Go straight.'
path_instruction_dic0['D401(D403 D404)_D424'] = 'Go straight.'
path_instruction_dic0['D424_D437(D405 D406 D414)'] = 'Go through the door'
path_instruction_dic0['D437(D405 D406 D414)_D424'] = 'Go through the door. D424 is on your left'
path_instruction_dic0['D437(D405 D406 D414)_D416(D417 D434A D444)'] = 'Go straight from room D414.'
path_instruction_dic0['D416(D417 D434A D444)_D437(D405 D406 D414)'] = 'Go Straight.'
path_instruction_dic0['D416(D417 D434 D444)_StaffToilet(D433 D419 D431)'] = 'Turn left from D444 and go straight.'
path_instruction_dic0['StaffToilet(D433 D419 D431)_D416(D417 D434A D444)'] = 'Go straight and you will see D444 in the corner and turn right you will see other rooms.'
path_instruction_dic0['StaffToilet(D433 D419 D431)_D426(D420 D421 D413 D422 D428)'] = 'Go straight from Staff Toilet and you will see a door. Go through the door, you will see the room D428 on your right anf other romms on your left.'
path_instruction_dic0['D426(D420 D421 D413 D422 D428)_StaffToilet(D433 D419 D431)'] = 'There is a door near the room D428. You need to go through the door.'
path_instruction_dic0['D426(D420 D421 D413 D422 D428)_D410(D412)'] = 'Go through the door.'
path_instruction_dic0['D410(D412)_D426(D420 D421 D413 D422 D428)'] = 'Go through the door.'
path_instruction_dic0['FirstFloor_D523(D521 D518)'] = 'Go through the door and go straight.'
path_instruction_dic0['D523(D521 D518)_FirstFloor'] = 'Go straight.'
path_instruction_dic0['FirstFloor_D522(D534 D535)'] = 'Go Straight'
path_instruction_dic0['D522(D534 D535)_FirstFloor'] = 'Go straight'
path_instruction_dic0['D523(D521 D518)_D525(D517 D516 D515)'] = 'Go straight'
path_instruction_dic0['D525(D517 D516 D515)_D523(D521 D518)'] = 'Go straight'
path_instruction_dic0['D525(D517 D516 D515)_D511(D526 D526 D510 D509 D527 D528 D508 D529)'] = 'Go straight and turn left'
path_instruction_dic0['D511(D526 D526 D510 D509 D527 D528 D508 D529)_D525(D517 D516 D515)'] = 'Go straight and turn right.'
path_instruction_dic0['D511(D526 D526 D510 D509 D527 D528 D508 D529)_D503(D504 D505 D506 D507 D530 D531 D532 D533)'] = 'The end of the hall is D506, and than turn lef you will see other rooms.'
path_instruction_dic0['D503(D504 D505 D506 D507 D530 D531 D532 D533)_D511(D526 D526 D510 D509 D527 D528 D508 D529)'] = 'Go straight and turn right..'
path_instruction_dic0['D503(D504 D505 D506 D507 D530 D531 D532 D533)_(D522 D534 D535)'] = 'Go straight and turn left.'
path_instruction_dic0['D522(D534 D535)_D503(D504 D505 D506 D507 D530 D531 D532 D533)'] = 'From D522, go straight and turn right.'
path_instruction_dic0['D503(D504 D505 D506 D507 D530 D531 D532 D533)_D501(D502)'] = 'Go straight and turn right.'
path_instruction_dic0['D501(D502)_D503(D504 D505 D506 D507 D530 D531 D532 D533)'] = 'From D501, go straight.'
path_instruction_dic0['D522(D534 D535)_FirstFloor'] = 'Go straight'
path_instruction_dic0['D525(D517 D516 D515)_D514(D512 D513)'] = 'Go straight and turn right.'
path_instruction_dic0['D514(D512 D513)_D525(D517 D516 D515)'] = 'Go straight and turn left'

var path_instruction_dic1 = new Array(); 
path_instruction_dic1['Faculty of Lifelong Learning_Entrance']='The opsite of the entrance is Lifelong Learning'
path_instruction_dic1['Faculty of Lifelong Learning_C180(C178 C179)']='Go straight and then you will see room C180. Turnleft and then you will see room C179 AND C178'
path_instruction_dic1['Faculty of Lifelong Learning_First Floor']='Go straight and turn right.'
path_instruction_dic1['C180(C178 C179)_C085']='Go straight and turn left'
path_instruction_dic1['C180(C178 C179)_C139(C138 C138,C137)']='Go straight and turn right'
path_instruction_dic1['C139(C138 C138,C137)_C131(C132 C135 C136A C136B)']='Go straight and turn left'
path_instruction_dic1['C131(C132 C135 C136A C136B)_C170(C141 C144 C176 C145 C146 C148 C175)']='Go straight'
path_instruction_dic1['C170(C141 C144 C176 C145 C146 C148 C175)_C156(C174 C152 C173)']="Go straight. If you wat to C156, you need to turn right"
path_instruction_dic1['C156(C174 C152 C173)_C172(C171 C169)']='Go straight'
path_instruction_dic1['C172(C171 C169)_C166(C165 C164 C149 C162 C160)']= 'Go straight'

var path_instruction_dic2 = new Array(); 
path_instruction_dic2['Entrance_Coffee Dock']='Walking along with the red arrow, and you will see the sign of cafe'
path_instruction_dic2['Coffee Dock_Entrance']='Go straight and turn left'
path_instruction_dic2['Entrance_First Floor']='Walking along with the red arrow and than go upstairs.'
path_instruction_dic2['First Floor_Entrance']='Go downstairs and walking along with the red arrow'
path_instruction_dic2['Coffee Dock_Craft Kitch']='Go straight'
path_instruction_dic2['Coffee Dock_Reception']='Go straight'
path_instruction_dic2['Craft Kitch_Coffee Dock']='Walking along with the red arrow, and you will see the sign of cafe'
path_instruction_dic2['Reception_Cafe']="Go straight."
path_instruction_dic2['Reception__Exit']='Walking along with the red arrow'

var path_instruction_dic3 = new Array(); 
path_instruction_dic3['Entrance_Parking']='Go straight along the sidewalk and you will see the parking sign'
path_instruction_dic3['Parking_Entrance']='Go straight along the sidewalk'
path_instruction_dic3['Parking_Playground']='Go straight and turn right.'
path_instruction_dic3['Parking_Barrow Center']='Walking along with the red arrow.'
path_instruction_dic3['Playground_Parking']='Go straight and turn left'
path_instruction_dic3['Barrow Center_Parking']='Walking along with the red arrow'
path_instruction_dic3['Barrow Center_Library']='Walking along with the red arrow'
path_instruction_dic3['Barrow Center_Canteen']='Walking along with the red arrow'
path_instruction_dic3['Library_Barrow Center']="Walking along with the red arrow."
path_instruction_dic3['Library_Canteen']='Walking along with the red arrow'
path_instruction_dic3['Canteen_Library']="Walking along with the red arrow."
path_instruction_dic3['Canteen_Barrow Center']='You need to enter the canteen and then walking along with the red arrow'
path_instruction_dic3['Canteen_Burrin Building']="Walking along with the red arrow."
path_instruction_dic3['Canteen_Killeshin Centre']='Walking along with the red arrow'
path_instruction_dic3['Burrin Building_Canteen']="Walking along with the red arrow."
path_instruction_dic3['Burrin Building_Haughton Building']='Walking along with the red arrow'
path_instruction_dic3['Haughton Building_Canteen']="Walking along with the red arrow."
path_instruction_dic3['Haughton Building_Dargan Centre']='Walking along with the red arrow'
path_instruction_dic3['Dargan Centre_Haughton Building']='Walking along with the red arrow'
path_instruction_dic3['Killeshin Centre_Canteen']='Walking along with the red arrow'
path_instruction_dic3['Nore Building_Burrin Building']='Walking along with the red arrow'
path_instruction_dic3['Burrin Building_Nore Building']='Walking along with the red arrow'


var connection0 = [
  ['Entrance', [['D424', 5],['D401(D403 D404)', 10],['FirstFloor', 15]] ], 
  ['D424', [['Entrance', 5],['D401(D403 D404)', 8],['D437(D405 D406 D414)', 5]] ], 
  ['D401(D403 D404)', [['Entrance', 10],['D424', 8]] ], 
  ['D437(D405 D406 D414)', [['D424', 5],['D416(D417 D434A D444)', 10]]],
  ['D416(D417 D434A D444)', [['D437(D405 D406 D414)', 10], ['StaffToilet(D433 D419 D431)', 10]] ], 
  ['StaffToilet(D433 D419 D431)', [['D416(D417 D434A D444)', 10], ['D426(D420 D421 D413 D422 D428)', 10]] ], 
  ['D426(D420 D421 D413 D422 D428)', [['StaffToilet(D433 D419 D431)', 10], ['D410(D412)', 10]] ], 
  ['D410(D412)', [['D426(D420 D421 D413 D422 D428)', 10]] ],
  ['FirstFloor', [['D523(D521 D518)', 5],['Entrance', 15],['D501(D502 D522 D534 D535)', 5]] ], 
  ['D523(D521 D518)', [['D525(D517 D516 D515)', 5],['FirstFloor', 5]] ], 
  ['D525(D517 D516 D515)', [['D511(D526 D526 D510 D509 D527 D528 D508 D529)', 5],['D514(D512 D513)', 5],['D523(D521 D518)', 5]] ],
  ['D511(D526 D526 D510 D509 D527 D528 D508 D529)', [['D503(D504 D505 D506 D507 D530 D531 D532 D533)', 5],['D525(D517 D516 D515)', 5]] ],  
  ['D503(D504 D505 D506 D507 D530 D531 D532 D533)', [['D511(D526 D526 D510 D509 D527 D528 D508 D529)', 5],['(D522 D534 D535)', 5],['D501(D502)', 5]] ],
  ['D522(D534 D535)',[['FirstFloor', 5], ['D503(D504 D505 D506 D507 D530 D531 D532 D533)', 5]] ],
  ['D501(D502)',[['D503(D504 D505 D506 D507 D530 D531 D532 D533)', 5]] ],
  ['D514(D512 D513)', [['D525(D517 D516 D515)', 5]] ]
];

var connection1 = [
  ['Faculty of Lifelong Learning', [['Entrence', 5], ['C180(C178 C179)', 10], ['First Floor', 5]] ],
  ['C180(C178 C179)', [['C085', 5], ['C139(C138 C138,C137)', 10]] ],
  ['C139(C138 C138,C137)', [['C131(C132 C135 C136A C136B)', 10]] ],
  ['C131(C132 C135 C136A C136B)', [['C170(C141 C144 C176 C145 C146 C148 C175)', 15]]],
  ['C170(C141 C144 C176 C145 C146 C148 C175)', [['C156(C174 C152 C173)', 10]] ],
  ['C156(C174 C152 C173)', [['C172(C171 C169)', 10]]],
  ['C172(C171 C169)', [['C166(C165 C164 C149 C162 C160)', 10]] ]

];

var connection2 = [
  ['Entrance',[['Coffee Dock', 20], ['First Floor', 15]] ],
  ['Coffee Dock',[['Entrance', 20], ['Craft Kitch', 10], ['Reception', 10]] ],
  ['Craft Kitch',[['Coffee Dock', 10]] ],
  ['Reception',[['Cafe', 10], ['Exit', 5]] ],
  ['First Floor',[['Entrance', 15]] ]
];

var connection3 = [
  ['Entrance',[['Parking', 20]] ],
  ['Parking',[['Entrance', 20], ['Playground', 15], ['Barrow Center', 15]] ],
  ['Playground',[['Parking', 15]] ],
  ['Barrow Center',[['Parking',20], ['Library', 5], ['Canteen', 5]] ],
  ['Library',[['Barrow Center', 5], ['Canteen', 20]] ],
  ['Canteen', [['Library', 20], ['Barrow Center', 5], ['Burrin Building', 15], ['Killeshin Centre', 10]] ],
  ['Burrin Building', [['Canteen', 15], ['Haughton Building', 15],['Nore building', 15]] ],
  ['Nore Building', [['Burrin Building', 15]] ],
  ['Haughton Building', [['Canteen', 10], ['Dargan Centre', 10]] ],
  ['Dargan Centre', [['Haughton Building', 10]] ]
  ['Killeshin Centre', [['Canteen',10]]]
];








Instructions_Dic[0] = path_instruction_dic0;
Connections_Dic[0] = connection0;

Instructions_Dic[1] = path_instruction_dic1;
Connections_Dic[1] = connection1;

Instructions_Dic[2] = path_instruction_dic2;
Connections_Dic[2] = connection2;

Instructions_Dic[3] = path_instruction_dic3;
Connections_Dic[3] = connection3;

