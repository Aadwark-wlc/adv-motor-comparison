const motorcycles = [
  { brand: 'BMW', model: 'R 1300 GS Adventure', type: 'Adventure Touring', power: 145, torque: 149, weight: 269, seat: 870, tank: 30, price: 22895, engine: '1,300 cc Boxer twin', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85' },
  { brand: 'BMW', model: 'R 1300 RT', type: 'Grand Touring', power: 145, torque: 149, weight: 281, seat: 820, tank: 24, price: 24995, engine: '1,300 cc Boxer twin', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85' },
  { brand: 'BMW', model: 'S 1000 XR', type: 'Sport Touring', power: 170, torque: 114, weight: 226, seat: 840, tank: 20, price: 19995, engine: '999 cc Inline-four', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85' },
  { brand: 'BMW', model: 'F 900 XR', type: 'Sport Touring', power: 105, torque: 92, weight: 216, seat: 825, tank: 15.5, price: 13995, engine: '895 cc Parallel twin', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Ducati', model: 'Multistrada V4 S', type: 'Adventure Touring', power: 170, torque: 125, weight: 243, seat: 840, tank: 22, price: 29695, engine: '1,158 cc V4 Granturismo', image: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Ducati', model: 'Multistrada V2 S', type: 'Adventure Touring', power: 115, torque: 92, weight: 202, seat: 830, tank: 20, price: 19995, engine: '937 cc V-twin', image: 'https://images.unsplash.com/photo-1614165935009-56a7b3607ae7?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Ducati', model: 'Diavel V4', type: 'Muscle Touring', power: 168, torque: 126, weight: 236, seat: 790, tank: 20, price: 27995, engine: '1,158 cc V4 Granturismo', image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=85' },
  { brand: 'KTM', model: '1390 Super Adventure S EVO', type: 'Adventure Touring', power: 173, torque: 145, weight: 227, seat: 869, tank: 23, price: 23749, engine: '1,350 cc V-twin', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85' },
  { brand: 'KTM', model: '1290 Super Duke GT', type: 'Sport Touring', power: 175, torque: 141, weight: 234, seat: 835, tank: 23, price: 22499, engine: '1,301 cc V-twin', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85' },
  { brand: 'KTM', model: '890 SMT', type: 'Sport Touring', power: 105, torque: 100, weight: 194, seat: 860, tank: 15.8, price: 15499, engine: '889 cc Parallel twin', image: 'https://images.unsplash.com/photo-1619771914272-1e12c1b5cf89?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Suzuki', model: 'GSX-S1000GX+', type: 'Sport Touring', power: 152, torque: 106, weight: 232, seat: 845, tank: 19, price: 18999, engine: '999 cc Inline-four', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Suzuki', model: 'V-Strom 1050DE', type: 'Adventure Touring', power: 107, torque: 100, weight: 252, seat: 880, tank: 20, price: 17499, engine: '1,037 cc V-twin', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Suzuki', model: 'V-Strom 800DE', type: 'Adventure Touring', power: 84, torque: 78, weight: 230, seat: 855, tank: 20, price: 11999, engine: '776 cc Parallel twin', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Suzuki', model: 'GSX-S1000GT+', type: 'Sport Touring', power: 152, torque: 106, weight: 226, seat: 810, tank: 19, price: 15599, engine: '999 cc Inline-four', image: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=900&q=85' },
  { brand: 'BMW', model: 'K 1600 GT', type: 'Grand Touring', power: 160, torque: 180, weight: 343, seat: 810, tank: 26.5, price: 27995, engine: '1,649 cc Inline-six', image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=85' },
  { brand: 'Ducati', model: 'XDiavel V4', type: 'Cruiser Touring', power: 168, torque: 126, weight: 229, seat: 770, tank: 20, price: 29995, engine: '1,158 cc V4 Granturismo', image: 'https://images.unsplash.com/photo-1614165935009-56a7b3607ae7?auto=format&fit=crop&w=900&q=85' }
  ,{ brand: 'KTM', model: '1390 Super Adventure R', type: 'Adventure Touring', power: 173, torque: 145, weight: 248, seat: 880, tank: 23, price: 21649, engine: '1,350 cc V-twin' }
  ,{ brand: 'Honda', model: 'CRF1100L Africa Twin', type: 'Adventure Touring', power: 102, torque: 112, weight: 231, seat: 870, tank: 18.8, price: 15499, engine: '1,084 cc Parallel twin' }
  ,{ brand: 'BMW', model: 'R 1300 RS', type: 'Sport Touring', power: 145, torque: 149, weight: 245, seat: 790, tank: 17, price: 17500, engine: '1,300 cc Boxer twin' }
  ,{ brand: 'Ducati', model: 'Multistrada V4 Rally', type: 'Adventure Touring', power: 170, torque: 124, weight: 260, seat: 870, tank: 30, price: 30000, engine: '1,158 cc V4 Granturismo' }
  ,{ brand: 'Honda', model: 'NT1100', type: 'Touring', power: 102, torque: 112, weight: 238, seat: 820, tank: 20.4, price: 15000, engine: '1,084 cc Parallel twin' },{ brand: 'Honda', model: 'Africa Twin Adventure Sports', type: 'Adventure Touring', power: 102, torque: 112, weight: 243, seat: 835, tank: 24.8, price: 19000, engine: '1,084 cc Parallel twin' }
  ,{ brand: 'Yamaha', model: 'Tracer 7 GT', type: 'Sport Touring', power: 73, torque: 68, weight: 203, seat: 835, tank: 18, price: 11500, engine: '689 cc Parallel twin' },{ brand: 'Yamaha', model: 'Tracer 9 GT', type: 'Sport Touring', power: 119, torque: 93, weight: 227, seat: 845, tank: 19, price: 17000, engine: '890 cc Triple' },{ brand: 'Yamaha', model: 'Tracer 9 GT+', type: 'Sport Touring', power: 119, torque: 93, weight: 232, seat: 845, tank: 19, price: 19000, engine: '890 cc Triple' },{ brand: 'Yamaha', model: 'Ténéré 700 World Raid', type: 'Adventure Touring', power: 73, torque: 68, weight: 220, seat: 885, tank: 23, price: 14000, engine: '689 cc Parallel twin' }
  ,{ brand: 'Kawasaki', model: 'Ninja 1100SX', type: 'Sport Touring', power: 136, torque: 113, weight: 235, seat: 835, tank: 19, price: 15000, engine: '1,099 cc Inline-four' },{ brand: 'Kawasaki', model: 'Versys 1100 SE', type: 'Adventure Touring', power: 135, torque: 112, weight: 257, seat: 840, tank: 21, price: 19000, engine: '1,099 cc Inline-four' },{ brand: 'Kawasaki', model: 'Versys 650', type: 'Adventure Touring', power: 67, torque: 61, weight: 219, seat: 845, tank: 21, price: 9500, engine: '649 cc Parallel twin' }
  ,{ brand: 'Triumph', model: 'Tiger Sport 660', type: 'Sport Touring', power: 94, torque: 68, weight: 207, seat: 835, tank: 17.2, price: 10500, engine: '660 cc Triple' },{ brand: 'Triumph', model: 'Tiger Sport 800 Tour', type: 'Sport Touring', power: 115, torque: 84, weight: 232, seat: 835, tank: 18.6, price: 15000, engine: '798 cc Triple' },{ brand: 'Triumph', model: 'Tiger 900 GT Pro', type: 'Adventure Touring', power: 108, torque: 90, weight: 222, seat: 820, tank: 20, price: 17000, engine: '888 cc Triple' },{ brand: 'Triumph', model: 'Tiger 1200 GT Pro', type: 'Adventure Touring', power: 150, torque: 130, weight: 255, seat: 850, tank: 20, price: 22000, engine: '1,160 cc Triple' }
  ,{ brand: 'Moto Guzzi', model: 'Stelvio', type: 'Adventure Touring', power: 115, torque: 105, weight: 246, seat: 830, tank: 21, price: 17000, engine: '1,042 cc V-twin' },{ brand: 'Moto Guzzi', model: 'V100 Mandello S', type: 'Sport Touring', power: 115, torque: 105, weight: 233, seat: 815, tank: 17, price: 19000, engine: '1,042 cc V-twin' }
  ,{ brand: 'Aprilia', model: 'Tuareg 660 Rally', type: 'Adventure Touring', power: 80, torque: 70, weight: 199, seat: 860, tank: 18, price: 14000, engine: '659 cc Parallel twin' }
  ,{ brand: 'Harley-Davidson', model: 'Pan America 1250 Special', type: 'Adventure Touring', power: 150, torque: 128, weight: 258, seat: 850, tank: 21.2, price: 23000, engine: '1,252 cc V-twin' },{ brand: 'Indian', model: 'FTR x R Carbon', type: 'Sport Touring', power: 123, torque: 118, weight: 233, seat: 780, tank: 13, price: 19000, engine: '1,203 cc V-twin' }
  ,{ brand: 'CFMOTO', model: '800MT Explore', type: 'Adventure Touring', power: 91, torque: 75, weight: 231, seat: 825, tank: 19, price: 11500, engine: '799 cc Parallel twin' },{ brand: 'CFMOTO', model: '450MT', type: 'Adventure Touring', power: 42, torque: 44, weight: 196, seat: 820, tank: 17.5, price: 6500, engine: '449 cc Parallel twin' }
  ,{ brand: 'Benelli', model: 'TRK 702 X', type: 'Adventure Touring', power: 76, torque: 68, weight: 235, seat: 835, tank: 20, price: 8000, engine: '698 cc Parallel twin' },{ brand: 'MV Agusta', model: 'Enduro Veloce', type: 'Adventure Touring', power: 124, torque: 102, weight: 224, seat: 850, tank: 21, price: 22000, engine: '931 cc Triple' },{ brand: 'Royal Enfield', model: 'Himalayan 450', type: 'Adventure Touring', power: 40, torque: 40, weight: 196, seat: 825, tank: 17, price: 6500, engine: '452 cc Single' }
];

const brands = ['All Brands', 'Aprilia', 'Benelli', 'BMW', 'CFMOTO', 'Ducati', 'Harley-Davidson', 'Honda', 'Indian', 'Kawasaki', 'KTM', 'Moto Guzzi', 'MV Agusta', 'Royal Enfield', 'Suzuki', 'Triumph', 'Yamaha'];
const verifiedImages = {
  'R 1300 GS Adventure': 'https://www.bmw-motorrad.ch/content/dam/bmwmotorradnsc/common/multiimages/images/models/adventure/r1300gs-adventure/2026/productstage/nsc-r1300gs-adventure-P0NA5-multiimage-2560x1440.jpg.asset.1751284937652.jpg',
  'S 1000 XR': 'https://cdpcdn.dx1app.com/products/USA/BM/2026/MC/BMWS/S_1000_XR/50/STYLE_SPORT_-_SAGE_GREEN_METALLIC/2000000002.jpg',
  'Multistrada V4 S': 'https://images5.1000ps.net/images_bikekat/2026/5-Ducati/10346-Multistrada_V4_S/004-639001980324170576-ducati-multistrada-v4-s.jpg?format=webp&width=1472',
  'Multistrada V2 S': 'https://images.ctfassets.net/1s6xoeufncy6/262uL0N1jecXK1VEeytkjq/d0a1a396ee0e803601bb4449b1e48a58/20.png?fm=webp&q=95&w=1920',
  '1390 Super Adventure S EVO': 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_LIVO_MY25-KTM-1390-Super-Adventure-S-EVO-Orange-left-front_%23SALL_%23AEPI_%23V1.png',
  '1290 Super Duke GT': 'https://1113070120.rsc.cdn77.org/temp/1719398654_22eb93a42cb816a32c69b0d00f077ef3.jpg',
  'GSX-S1000GX+': 'https://www.gearpatrol.com/wp-content/uploads/sites/2/2025/12/2026-Suzuki-GSX-S1000GX-Hero.webp?w=1500',
  'V-Strom 1050DE': 'https://images5.1000ps.net/images_bikekat/2026/3-Suzuki/11303-V_Strom_1050DE/004-639003533269700413-suzuki-v-strom-1050de.jpg?format=webp&width=1984'
  ,'F 900 XR': 'https://images5.1000ps.net/images_bikekat/2026/7-BMW/9949-F_900_XR/005-639020849918061108-bmw-f-900-xr.jpg?format=webp&width=1984'
  ,'890 SMT': 'https://press.ktm.com/Content/997518/2cb2728a-ff45-4cfa-a7aa-1773459051d9/1200/2400/.jpg'
  ,'1390 Super Adventure R': 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_LIVO_ktm-travel-1390-super-adventure-bike-front-left-view_%23SALL_%23AEPI_%23V1.png'
  ,'CRF1100L Africa Twin': 'https://images5.1000ps.net/images_bikekat/2026/2-Honda/9895-CRF1100L_Africa_Twin/017-639040718488019686-honda-crf1100l-africa-twin.jpg'
  ,'R 1300 RT': 'https://www.totalmotorcycle.com/wp-content/uploads/2025/04/2026-BMW-R1300RT3.jpg'
  ,'K 1600 GT': 'https://cdpcdn.dx1app.com/products/USA/BM/2026/MC/BMWK/K_1600_GT/50/STYLE_SPORT_-_RACING_BLUE_METALLIC/2000000019.jpg'
  ,'Multistrada V4 Rally': 'https://mediahouse.ducati.com/wp-content/uploads/2025/11/75c754adeaa911fd80421f04e4935b15-l.jpg'
  ,'R 1300 RS': 'https://cloudfront-us-east-1.images.arcpublishing.com/octane/ZJQBQ7BVFJA67KAW5GTMCYF5S4.jpg'
  ,'Ninja 1100SX': 'https://www.kawasaki.com/Content/Images/SubBrand/2026-ninja/26ZX1100H_40TBK1DRF3CG_A.png?w=980'
  ,'Versys 1100 SE': 'https://www.kawasaki.nl/content/dam/products/pim/resource/ver/Resource_325626_26MY_Versys_1100_SE_Tourer_Plus_BU1_Front.jpg'
  ,'Tiger Sport 660': 'https://ridermagazine.com/wp-content/uploads/2026/01/2026-Triumph-Tiger-Sport-660-Preview-2.jpg'
  ,'Tiger 900 GT Pro': 'https://images5.1000ps.net/images_bikekat/2026/37-Triumph/9979-Tiger_900_GT_Pro/003-638966362582155504-triumph-tiger-900-gt-pro.jpg?format=webp&height=566&mode=crop&width=920'
  ,'NT1100': 'https://www.motopark.cz/images/0/ceb1d100e0126531/2/honda-nt1100-mt-2026-pearl-hawkseye-blue.png?hash=488245943'
  ,'Africa Twin Adventure Sports': 'https://powersports.honda.com/motorcycle/adventure/africa-twin/2026/-/media/products/family/africa-twin/trims/trim-main/africa-twin-dct/2026/2026-africa-twin-dct-pearl_white-1505x923.png?imwidth=1024'
  ,'Tracer 7 GT': 'https://images5.1000ps.net/images_bikekat/2026/4-Yamaha/10360-Tracer_7_GT/001-639005337144036542-yamaha-tracer-7-gt.jpg?format=webp&height=566&mode=crop&width=920'
  ,'Tracer 9 GT': 'https://cdn1.npcdn.net/images/941db038936e95ab2d241a539a76736e_1772703506.webp?from=jpeg&md5id=1f9a72a09b50fed7cde992033530b7c0&new_height=1000&new_width=1000&size=max&type=1&w=1739589906'
  ,'Ténéré 700 World Raid': 'https://cdpcdn.dx1app.com/products/USA/YA/2026/MC/DUALPURP/TNR_700_WORLD_RAID/50/RAVEN/2000000004.jpg'
  ,'V-Strom 800DE': 'https://cycles.aws-prod.suzuki.com/-/media/project/cycles/images/products/motorcycles/dl800de---v-strom-800de/2026/gallery/dl800dercm5_yu1_diagonal_cgi_2400x1600.png'
  ,'Diavel V4': 'https://cdpcdn.dx1app.com/products/USA/DU/2026/MC/CRUISER/DIAVEL_V4/50/DUCATI_RED/2000000051.jpg'
  ,'XDiavel V4': 'https://images5.1000ps.net/images_bikekat/2026/5-Ducati/12996-XDiavel_V4/004-639001912651402860-ducati-xdiavel-v4.jpg?bgcolor=rgba_39_42_44_0&format=webp&height=680&mode=pad&quality=80&scale=both&width=1208'
  ,'GSX-S1000GT+': 'https://www.globalsuzuki.com/motorcycle/smgs/products/2026gsx-s1000gt/img/colors_ph02_big.jpg'
  ,'Tiger Sport 800 Tour': 'https://www.motorrad-bilder.at/thumbs/1984x1116xfarx272a2c00/slideshows/291/023719/Tiger-Sport-800_MY25_Graphite_RHS-Front-Angle.jpg'
  ,'Tiger 1200 GT Pro': 'https://images5.1000ps.net/images_bikekat/2026/37-Triumph/10919-Tiger_1200_GT_PRO/006-639008758821591412-triumph-tiger-1200-gt-pro.jpg'
  ,'Stelvio': 'https://images5.1000ps.net/images_bikekat/2026/28-Moto_Guzzi/12243-Stelvio/009-639038934271759724-moto-guzzi-stelvio.jpg?bgcolor=rgba_39_42_44_0&format=webp&height=558&mode=pad&quality=80&scale=both&width=992'
  ,'V100 Mandello S': 'https://images5.1000ps.net/images_bikekat/2026/28-Moto_Guzzi/11687-V100_Mandello_S/007-639038960693339572-moto-guzzi-v100-mandello-s.jpg?bgcolor=rgba_39_42_44_0&format=webp&height=680&mode=pad&quality=80&scale=both&width=1208'
  ,'Tuareg 660 Rally': 'https://studiocycle.ca/cdn/shop/files/CopyofAprilia_Tuareg-Rally_Lat-dx.jpg?v=1741218245'
  ,'Pan America 1250 Special': 'https://www.harley-davidson.com/ctfasset/5vy1mse9fkav/2JFZHM1vuTo1TyU15tcJzp/63312d77c57c184a666062bc95dc1b8d/2026-pan-america-1250-special-m85lb-motorcycle-03'
  ,'FTR x R Carbon': 'https://www.indianmotorcycle.fr/fileadmin/templates/model_22/gallery/ftr-r-carbon/1.jpg'
  ,'800MT Explore': 'https://cdn.abicart.com/shop/images/209190089-origpic-19c833/10720/art20/h0089/MY2025_800MT-EXPLORE_Gem-Black_Right.jpg'
  ,'TRK 702 X': 'https://images5.1000ps.net/images_bikekat/2026/49-Benelli/11403-TRK_702_X/003-639034795364744320-benelli-trk-702-x.jpg?bgcolor=rgba_39_42_44_0&format=webp&height=1116&mode=pad&quality=80&scale=both&width=1984'
  ,'Enduro Veloce': 'https://cdn.powergo.ca/media/catalog/2025/49/cc0c0699e4aa45b1a4991c24b4aea4f1_81c2a9c412fc4ca7892c0d472e3847cc_1000/2026-mv-agusta-enduro-veloce-0.webp'
  ,'450MT': 'https://images5.1000ps.net/images_bikekat/2026/177-CFMOTO/12466-450MT/005-639033977416292147-cfmoto-450mt.jpg?bgcolor=rgba_39_42_44_0&format=webp&height=1116&mode=pad&quality=80&scale=both&width=1984'
  ,'Himalayan 450': 'https://cdn.powergo.ca/media/catalog/2026/6/ee01b14643a94c209e5b67515f3286bf_81c2a9c412fc4ca7892c0d472e3847cc_1000/2026-royal-enfield-himalayan-450-studio-shots-3.webp'
  ,'Versys 650': 'https://www.kawasaki.eu/content/dam/products/pim/studio/j/Resource_320376_26KLE650H_J_44TBK1DRS3CG_A.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.png'
};
verifiedImages['Tracer 9 GT+'] = verifiedImages['Tracer 9 GT'];
const verifiedModels = Object.keys(verifiedImages);
const officialSpecs = {
  '890 SMT': { chassis: 'Chromium-molybdenum steel frame; 64.21° steering head; 111.6 mm trail; 320 mm / 260 mm brakes.', suspension: 'WP APEX 43 fork / WP APEX monoshock; 180 mm / 180 mm travel.', dimensions: 'Wheelbase 1,502 ±15 mm · ground clearance 227 mm · cast 17-inch wheels.', source: 'https://www.ktm.com/en-be/models/sports-tourer/2026-ktm-890-smt/technical-specifications.html' },
  '1390 Super Adventure R': { chassis: 'Chromium-molybdenum steel trellis frame; 64.7° steering head; 112 mm trail; 320 mm / 267 mm Brembo brakes.', suspension: 'WP XPLOR-USD 48 mm fork / WP XPLOR PDS shock; 240 mm / 240 mm travel.', dimensions: 'Wheelbase 1,577 ±15 mm · ground clearance 242 mm · 21/18-inch spoked wheels.', source: 'https://www.ktm.com/en-ph/models/adventure/2026-ktm-1390-superadventurer/technical-specifications.html' },
  '1390 Super Adventure S EVO': { chassis: 'Chromium-molybdenum steel trellis frame; 65.3° steering head; 110 mm trail; 320 mm / 267 mm brakes.', suspension: 'WP SAT semi-active 48 mm USD fork / WP SAT shock; 220 mm / 220 mm travel.', dimensions: 'Wheelbase 1,558 ±15 mm · ground clearance 223 mm · cast 19/17-inch wheels.', source: 'https://www.ktm.com/en-za/models/adventure/2026-ktm-1390-superadventuresevo/technical-specifications.html' },
  'Multistrada V4 Rally': { chassis: 'Aluminium monocoque frame; 330 mm Brembo Stylema front brakes; 19/17-inch spoked wheels.', suspension: 'Marzocchi 50 mm electronic DSS EVO fork / electronic Skyhook monoshock; 200 mm / 200 mm travel.', dimensions: 'Adjustable seat 870–890 mm · 30 L tank · 240 kg running-order weight without fuel.', source: 'https://www.ducati.com/gb/en/bikes/multistrada/multistrada-v4-rally/insights' },
  'Multistrada V4 S': { chassis: 'Aluminium monocoque frame; light-alloy 19/17-inch wheels.', suspension: 'Marzocchi 50 mm electronic Ducati Skyhook fork / electronic Skyhook monoshock with lowering device.', dimensions: 'Adjustable seat 840–860 mm · 231 kg running-order weight without fuel.', source: 'https://www.ducati.com/ww/en/bikes/multistrada/multistrada-v4/insights' },
  'Diavel V4': { chassis: 'Aluminium monocoque frame; aluminium single-sided swingarm; 330 mm Brembo Stylema front brakes.', suspension: 'Fully adjustable 50 mm USD fork / fully adjustable monoshock; 120 mm / 145 mm travel.', dimensions: 'Wheelbase 1,593 mm · seat 790 mm · 240/45 ZR17 rear tyre.', source: 'https://www.ducati.com/ww/en/bikes/diavel/diavel-v4/insights' },
  'XDiavel V4': { chassis: 'Aluminium monocoque frame; aluminium single-sided swingarm; 330 mm Brembo Stylema front brakes.', suspension: 'Fully adjustable 50 mm USD fork / fully adjustable monoshock; 120 mm / 145 mm travel.', dimensions: 'Seat 770 mm · 229 kg running-order weight without fuel · 240/45 ZR17 rear tyre.', source: 'https://www.ducati.com/ww/en/bikes/xdiavel/xdiavel-v4/insights' },
  'CRF1100L Africa Twin': { chassis: 'Semi-double cradle frame; 310 mm twin front discs with radial four-piston calipers.', suspension: 'Showa 45 mm adjustable USD fork / Pro-Link Showa shock; 230 mm / 220 mm travel.', dimensions: '2,330 × 960 × 1,485 mm · wheelbase 1,575 mm · ground clearance 250 mm.', source: 'https://www.honda.co.uk/motorcycles/range/adventure/crf1100l-africa-twin/specifications-and-price.html' },
  'NT1100': { chassis: 'Steel semi-double cradle frame; 310 mm twin front discs.', suspension: 'Showa 43 mm SFF-BP USD fork / Pro-Link Showa shock; 150 mm / 150 mm travel.', dimensions: 'Seat 820 mm · 20.4 L tank · cast 17-inch wheels.', source: 'https://www.honda.co.uk/motorcycles/range/touring/nt1100/specifications-and-price.html' },
  'Tracer 9 GT': { chassis: 'Diamond frame; 24°25′ rake; 106 mm trail; 298 mm twin front discs.', suspension: 'USD telescopic fork / link-type Monocross rear; 130 mm / 131 mm travel.', dimensions: '2,175 × 900 × 1,440–1,530 mm · wheelbase 1,500 mm · ground clearance 135 mm.', source: 'https://www.yamaha-motor.eu/content/dam/yme/language-masters/en/eicma-2025/digital-brochures/2026_EICMA_MC_BROCHURE_EN.pdf' },
  'Tracer 9 GT+': { chassis: 'Diamond frame; 24°25′ rake; 106 mm trail; 298 mm twin front discs.', suspension: 'USD telescopic fork / link-type Monocross rear; 130 mm / 131 mm travel.', dimensions: '2,175 × 900 × 1,460–1,505 mm · wheelbase 1,500 mm · ground clearance 135 mm.', source: 'https://www.yamaha-motor.eu/content/dam/yme/language-masters/en/eicma-2025/digital-brochures/2026_EICMA_MC_BROCHURE_EN.pdf' },
  'Tracer 7 GT': { chassis: 'Diamond frame; 25°10′ rake; 99 mm trail; 298 mm twin front discs.', suspension: '41 mm USD fork / link-type rear shock; 130 mm / 139 mm travel.', dimensions: '2,135 × 875 × 1,425–1,480 mm · wheelbase 1,495 mm · ground clearance 140 mm.', source: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2026/MT07TRGTS-35/Factsheets/2026-MT07TRGTS-35_sr-Latn-RS.pdf' },
  'Ténéré 700 World Raid': { chassis: 'Steel-tube double-cradle frame; 27° rake; 105 mm trail; 282 mm twin front discs.', suspension: 'KYB USD fork / link-type Monocross rear; 230 mm / 220 mm travel.', dimensions: '2,370 × 905 × 1,490 mm · wheelbase 1,595 mm · ground clearance 255 mm.', source: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2023/XTZ700D/Factsheets/2023-XTZ700D_en-GB.pdf' },
  'Ninja 1100SX': { chassis: 'Aluminium frame; 24° rake; 98 mm trail; 300 mm twin front discs.', suspension: '41 mm adjustable USD fork / Horizontal Back-link gas shock; 120 mm / 141 mm travel.', dimensions: '2,100 × 805 × 1,190 mm · wheelbase 1,440 mm · ground clearance 135 mm.', source: 'https://www.kawasaki.eu/en/Motorcycles/Sport_Tourer/Ninja_1100SX_2026.html' },
  'Versys 1100 SE': { chassis: 'Twin-tube aluminium frame; 27° rake; 106 mm trail; 310 mm twin front discs.', suspension: '43 mm KECS electronic fork / KECS BFRC-lite rear shock; 150 mm / 152 mm travel.', dimensions: '2,270 × 950 × 1,490 mm · wheelbase 1,520 mm · ground clearance 150 mm.', source: 'https://www.kawasaki.eu/en/Motorcycles/Adventure_Tourer/Versys_1100_se_2026.dispdir.html' },
  'Versys 650': { chassis: 'High-tensile steel tubular diamond frame; 300 mm twin front discs.', suspension: '41 mm adjustable USD fork / remote-preload laydown shock; 150 mm / 145 mm travel.', dimensions: '2,165 × 840 × 1,360 mm · wheelbase 1,415 mm · ground clearance 170 mm.', source: 'https://www.kawasaki.eu/en/EICMA/Versys_650.html' },
  'Tiger Sport 800 Tour': { chassis: 'Tubular steel perimeter frame; cast 17-inch wheels; 310 mm twin front discs.', suspension: 'Showa 41 mm USD fork / Showa monoshock; 150 mm / 150 mm travel.', dimensions: 'Seat 835 mm · wheelbase 1,422 mm · 18.6 L tank.', source: 'https://www.triumphmotorcycles.co.uk/motorcycles/adventure/tiger-sport/tiger-sport-800-tour' },
  'Tiger 900 GT Pro': { chassis: 'Steel trellis main frame with bolt-on aluminium subframe; cast 19/17-inch wheels.', suspension: 'Marzocchi 45 mm USD fork / electronically adjustable Marzocchi shock; 180 mm / 170 mm travel.', dimensions: 'Seat 820–840 mm · wheelbase 1,556 mm · 20 L tank.', source: 'https://www.triumphmotorcycles.co.uk/motorcycles/adventure/tiger-900/tiger-900-gt-pro-2024' },
  'Tiger 1200 GT Pro': { chassis: 'Tubular steel frame with forged aluminium outriggers; Tri-Link aluminium swingarm.', suspension: 'Showa 49 mm semi-active USD fork / semi-active Showa monoshock; 200 mm / 200 mm travel.', dimensions: 'Seat 850/870 mm · wheelbase 1,560 mm · 20 L tank.', source: 'https://www.triumphmotorcycles.co.uk/motorcycles/adventure/tiger-1200/tiger-1200-gt-pro-2024' },
  'V-Strom 1050DE': { chassis: 'Twin-spar aluminium-alloy frame; 27°30′ rake; 126 mm trail; 21/17-inch wire-spoked wheels.', suspension: 'Inverted telescopic fork / link-type rear; oil damped.', dimensions: '2,390 × 960 × 1,505 mm · wheelbase 1,595 mm · ground clearance 190 mm.', source: 'https://www.globalsuzuki.com/motorcycle/smgs/products/2026v-strom1050de/' },
  'V-Strom 800DE': { chassis: 'High-rigidity steel frame; aluminium swingarm; 21/17-inch wire-spoked wheels.', suspension: 'Adjustable Showa inverted fork / Showa monoshock; 220 mm / 220 mm travel.', dimensions: '2,345 × 975 × 1,310 mm · wheelbase 1,570 mm · ground clearance 220 mm.', source: 'https://www.globalsuzuki.com/motorcycle/smgs/products/2026v-strom800de/' },
  'GSX-S1000GX+': { chassis: 'Aluminium twin-spar frame; 25.5° rake; 97 mm trail.', suspension: 'Showa EERA electronic fork / BFRC-lite electronic rear shock; 150 mm / 150 mm travel.', dimensions: '2,150 × 925 × 1,350 mm · wheelbase 1,470 mm · ground clearance 155 mm.', source: 'https://www.globalsuzuki.com/motorcycle/smgs/products/2026gsx-s1000gx/' },
  'GSX-S1000GT+': { chassis: 'Aluminium twin-spar frame; 25° rake; 100 mm trail; 310 mm Brembo twin front discs.', suspension: '43 mm adjustable KYB inverted fork / adjustable link-type monoshock; 120 mm front travel.', dimensions: '2,140 × 825 × 1,215 mm · wheelbase 1,460 mm · ground clearance 140 mm.', source: 'https://www.globalsuzuki.com/motorcycle/smgs/products/2026gsx-s1000gt/' },
  'Pan America 1250 Special': { chassis: '47 mm inverted fork and aluminium triple clamps; 19/17-inch wheels.', suspension: 'Electronically adjustable semi-active fork / linkage monoshock with automatic electronic preload.', dimensions: '2,270 × 975 mm · wheelbase 1,585 mm · ground clearance 175 mm.', source: 'https://www.harley-davidson.com/fr/fr/motorcycles/pan-america-1250-special.html.' },
  'Tuareg 660 Rally': { chassis: 'High-strength steel-tube and aluminium-plate trellis frame.', suspension: 'Fully adjustable Kayaba 43 mm USD fork / fully adjustable Kayaba monoshock; 240 mm / 240 mm travel.', dimensions: 'Ground clearance 240 mm · 18 L tank · 21/18-inch wheels.', source: 'https://wlassets.aprilia.com/wlassets/aprilia/de/tech_spec/Tuareg/Tuareg-Rally-660_Technische_Daten/original/Tuareg-Rally-660_Technische_Daten.pdf' },
  'TRK 702 X': { chassis: 'Steel-tube trestle frame; 320 mm twin front discs; 19/17-inch spoked wheels.', suspension: '50 mm USD fork / adjustable central shock; 140 mm front and 173 mm rear-wheel travel.', dimensions: '2,220 × 925 × 1,480 mm · wheelbase 1,505 mm · ground clearance 205 mm.', source: 'https://presskit.benelli.com/presskit/presskit_pack/my_moto/trk702x/tech_data.pdf' },
  'Enduro Veloce': { chassis: 'High-tensile steel and forged-component double-cradle frame; aluminium twin-sided swingarm.', suspension: 'Fully adjustable Sachs 48 mm USD fork / adjustable Sachs progressive-link monoshock; 210 mm / 210 mm travel.', dimensions: '2,360 × 980 mm · wheelbase 1,610 mm · ground clearance 230 mm.', source: 'https://www.mvagusta.com/media/ad5add84-0017-4ff2-b883-22fd0c90e679/Enduro_Veloce_my26_en.pdf' },
  'Himalayan 450': { chassis: 'Steel twin-spar tubular frame; 320 mm front / 270 mm rear disc brakes.', suspension: '43 mm USD fork / linkage monoshock; 200 mm / 200 mm travel.', dimensions: '2,285 × 852 × 1,316 mm · wheelbase 1,510 mm · ground clearance 230 mm.', source: 'https://www.royalenfield.com/content/dam/open-pdf/royal-enfield-himalayan-450-technical-specifications-english-2026.pdf' },
  'FTR x R Carbon': { chassis: 'Cast 17-inch wheels; Brembo 320 mm twin front / 260 mm rear brakes.', suspension: 'Fully adjustable Öhlins 43 mm cartridge fork / Öhlins piggyback shock; 120 mm / 120 mm travel.', dimensions: '2,223 × 830 × 1,295 mm · wheelbase 1,524 mm · ground clearance 165 mm.', source: 'https://www.indianmotorcycle.com/en-ca/ftr-motorcycles/ftr-100-percent-r-carbon/specs/' }
  ,'R 1300 GS Adventure': { chassis: 'Steel main frame with aluminium rear frame; Evo Telelever front and Evo Paralever rear; 19/17-inch cross-spoke wheels.', suspension: 'Dynamic Suspension Adjustment spring struts; 210 mm / 220 mm wheel travel.', dimensions: 'Wheelbase 1,518 mm · ground clearance 220 mm · 30 L tank.', source: 'https://www.bmw-motorrad.com/en/models/adventure/r1300gs-adventure.html' }
  ,'R 1300 RT': { chassis: 'BMW Telelever / Paralever chassis with cast 17-inch wheels and integrated ABS brakes.', suspension: 'Electronically controlled suspension configuration with front Telelever and rear Paralever.', dimensions: 'Wheelbase 1,500 mm · 24 L tank · kerb weight 281 kg.', source: 'https://www.authorities.bmw-motorrad.com/en/models/r1300-rt-p.html' }
  ,'S 1000 XR': { chassis: 'Aluminium bridge frame; aluminium swingarm; 17-inch cast wheels.', suspension: '45 mm USD fork / central rear spring strut; Dynamic ESA available.', dimensions: 'Wheelbase 1,552 mm · seat height 840 mm · 20 L tank.', source: 'https://www.bmw-motorrad.com/en/models/sport/s1000xr.html' }
  ,'F 900 XR': { chassis: 'Steel bridge frame with engine as a load-bearing element; aluminium swingarm.', suspension: '43 mm USD fork / central rear spring strut; Dynamic ESA available.', dimensions: 'Wheelbase 1,521 mm · seat height 825 mm · 15.5 L tank.', source: 'https://www.bmw-motorrad.com/en/models/sport/f900xr.html' }
  ,'Multistrada V2 S': { chassis: 'Aluminium monocoque frame; 19/17-inch light-alloy wheels.', suspension: 'Electronic Ducati Skyhook suspension with fully adjustable fork and monoshock.', dimensions: 'Adjustable seat height · 20 L tank · 17-inch rear wheel.', source: 'https://www.ducati.com/es/es/motocicletas/multistrada/multistrada-v2/insights' }
  ,'1290 Super Duke GT': { chassis: 'Chromium-molybdenum steel trellis frame with aluminium subframe; Brembo radial brakes.', suspension: 'WP semi-active USD fork / WP semi-active monoshock.', dimensions: 'Wheelbase 1,482 mm · seat height 835 mm · 23 L tank.', source: 'https://www.ktm.com/en-gb/models/sports-tourer/ktm1290superdukegt.html' }
  ,'K 1600 GT': { chassis: 'Cast light-alloy welded frame with bolt-on light-alloy rear frame; shaft drive.', suspension: 'BMW Duolever front / Paralever rear suspension with electronic adjustment.', dimensions: 'Length 2,324 mm · seat height 810–830 mm · 26.5 L tank.', source: 'https://www.bmw-motorrad.com/en/models/tour/k1600gt.html' }
  ,'R 1300 RS': { chassis: 'Steel main frame with die-cast aluminium rear frame; cast 17-inch wheels.', suspension: 'Evo Telelever front / Evo Paralever rear; Dynamic Suspension Adjustment available.', dimensions: 'Seat height 790 mm · 17 L tank · boxer touring geometry.', source: 'https://www.bmw-motorrad.com/en/models/sport/r1300rs.html' }
  ,'Africa Twin Adventure Sports': { chassis: 'Semi-double cradle frame; 19/18-inch tubeless wheel package.', suspension: 'Showa EERA electronic 45 mm USD fork / electronically controlled Pro-Link shock.', dimensions: 'Wheelbase 1,575 mm · seat height 835 mm · 24.8 L tank.', source: 'https://www.honda.co.uk/motorcycles/range/adventure/crf1100l-africa-twin/specifications-and-price.html' }
  ,'Tiger Sport 660': { chassis: 'Tubular steel perimeter frame; lightweight cast aluminium wheels; 310 mm twin front discs.', suspension: 'Showa 41 mm USD fork / Showa monoshock with remote preload; 150 mm travel.', dimensions: 'Seat height 835 mm · 17.2 L tank · sport-touring ergonomics.', source: 'https://www.triumphmotorcycles.co.uk/motorcycles/adventure/tiger-sport/tiger-sport-660/specification' }
  ,'Stelvio': { chassis: 'Tubular steel frame; aluminium swingarm; 19/17-inch tubeless spoked wheels.', suspension: '46 mm USD fork / monoshock with linkage; manually adjustable damping.', dimensions: 'Seat height 830 mm · 21 L tank · touring-ready 19-inch front wheel.', source: 'https://www.motoguzzi.com/en_EN/models/stelvio.html' }
  ,'V100 Mandello S': { chassis: 'Steel tubular frame with shaft drive and cast 17-inch wheels.', suspension: 'Öhlins Smart EC2.0 43 mm semi-active fork / Öhlins TTX Smart EC2.0 monoshock.', dimensions: 'Seat height 815 mm · 17 L tank · 17-inch wheels.', source: 'https://www.motoguzzi.com/wlassets/EICMA/EICMA-2025/Moto-Guzzi/brochure/EN-DIGITAL-MG-RANGE-Brochure-11-2025/original/EN-DIGITAL-MG-RANGE-Brochure-11-2025.pdf' }
  ,'800MT Explore': { chassis: 'Chromoly steel main frame and subframe with high-strength cast-aluminium swingarm; 19/17-inch cast wheels.', suspension: 'Adjustable KYB USD fork / adjustable KYB rear shock; 160 mm / 150 mm travel.', dimensions: 'Ground clearance 190 mm · 19 L tank · adventure touring layout.', source: 'https://www.cfmoto.com/global/motorcycles/mult-touring/800mt_explore.html' }
  ,'450MT': { chassis: 'Steel trellis frame with aluminium swingarm; 21/18-inch spoked wheels.', suspension: 'Long-travel KYB USD fork / KYB monoshock; adjustable damping and preload.', dimensions: 'Seat height 820 mm · 17.5 L tank · kerb weight 196 kg.', source: 'https://www.cfmoto.com/global/motorcycles/mult-touring/450mt.html' }
};
let activeBrand = 'All Brands';
let activeSort = 'featured';
let selected = [];
const grid = document.querySelector('#motorGrid');
const filters = document.querySelector('#brandFilters');
const resultCount = document.querySelector('#resultCount');
const dock = document.querySelector('#compareDock');
const dockCount = document.querySelector('#dockCount');
const dockTitle = document.querySelector('#dockTitle');
const dockText = document.querySelector('#dockText');
const dockBikes = document.querySelector('#dockBikes');
const comparisonModal = document.querySelector('#comparisonModal');
const detailModal = document.querySelector('#detailModal');

function brandIcon(brand) {
  if (brand === 'All Brands') return 'ALL';
  if (brand === 'BMW' || brand === 'KTM') return brand;
  return brand.split(/[ -]/).map(part => part[0]).join('').slice(0, 3);
}
function modelImage(bike) {
  if (verifiedImages[bike.model]) return verifiedImages[bike.model];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520"><rect width="900" height="520" fill="#dfe3d9"/><path d="M172 350h556M247 350a65 65 0 1 0 0 1M653 350a65 65 0 1 0 0 1M310 317l65-100h170l74 100M410 217l28-55h98l28 55M354 317h210" fill="none" stroke="#111311" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><text x="45" y="65" font-family="monospace" font-size="24" fill="#6f756d">MODEL VISUAL / PHOTO VERIFICATION PENDING</text><text x="45" y="468" font-family="Arial" font-size="36" font-weight="700" fill="#111311">${bike.brand} ${bike.model}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
function euro(value) { return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value); }
function priceRange(value) {
  const low = Math.round((value * 0.9) / 500) * 500;
  const high = Math.round((value * 1.1) / 500) * 500;
  return `${euro(low)}–${euro(high)}`;
}
function filteredBikes() {
  const list = activeBrand === 'All Brands' ? [...motorcycles] : motorcycles.filter(bike => bike.brand === activeBrand);
  if (activeSort === 'power') list.sort((a,b) => b.power - a.power);
  if (activeSort === 'weight') list.sort((a,b) => a.weight - b.weight);
  if (activeSort === 'price') list.sort((a,b) => a.price - b.price);
  return list;
}
function renderFilters() {
  filters.innerHTML = brands.map(brand => `<button type="button" class="brand-filter ${brand === activeBrand ? 'active' : ''}" data-brand="${brand}"><span class="brand-icon">${brandIcon(brand)}</span>${brand}</button>`).join('');
}
function renderBikes() {
  const bikes = filteredBikes();
  const label = activeBrand === 'All Brands' ? 'ALL MACHINES' : `${activeBrand.toUpperCase()} MACHINES`;
  resultCount.innerHTML = `${label} <span>${bikes.length}</span>`;
  grid.innerHTML = bikes.length ? bikes.map(bike => {
    const checked = selected.includes(bike.model);
    return `<article class="motor-card ${checked ? 'selected' : ''}" data-details="${bike.model}" tabindex="0" role="button" aria-label="View details for ${bike.brand} ${bike.model}">
      <div class="card-top"><span class="model-kind">${bike.type.toUpperCase()}</span><button class="compare-toggle" type="button" data-model="${bike.model}" aria-pressed="${checked}"><span class="checkmark">${checked ? '✓' : ''}</span>COMPARE</button></div>
      <img class="bike-image" src="${modelImage(bike)}" alt="${bike.brand} ${bike.model}" loading="lazy" />
      <p class="bike-brand">${bike.brand.toUpperCase()}</p><h2 class="bike-name">${bike.model}</h2>
      <div class="quick-specs"><div><span>POWER</span><strong>${bike.power} hp</strong></div><div><span>WEIGHT</span><strong>${bike.weight} kg</strong></div><div><span>ENGINE</span><strong>${bike.engine}</strong></div><div><span>EST. EU PRICE</span><strong>${priceRange(bike.price)}</strong></div></div>
    </article>`;
  }).join('') : document.querySelector('#emptyTemplate').innerHTML;
}
function updateDock() {
  const picks = motorcycles.filter(bike => selected.includes(bike.model));
  dock.classList.toggle('visible', picks.length > 0);
  dockCount.textContent = picks.length;
  document.querySelector('.nav-action b').textContent = picks.length;
  dockTitle.textContent = picks.length ? `${picks.length} machine${picks.length > 1 ? 's' : ''} selected` : 'Your garage is empty';
  dockText.textContent = picks.length < 2 ? 'Select one more machine to compare.' : 'Ready for a side-by-side view.';
  dockBikes.innerHTML = picks.map(bike => `<img class="dock-bike" src="${modelImage(bike)}" alt="" />`).join('');
  document.querySelector('#openComparison').disabled = picks.length < 2;
}
function toggleBike(model) {
  if (selected.includes(model)) selected = selected.filter(item => item !== model);
  else if (selected.length < 4) selected = [...selected, model];
  else { dockText.textContent = 'Four-machine limit reached — remove one to continue.'; return; }
  renderBikes(); updateDock();
}
function valueCell(bikes, key, format, best) {
  const values = bikes.map(bike => bike[key]);
  const target = best === 'min' ? Math.min(...values) : Math.max(...values);
  return bikes.map(bike => `<td class="${bike[key] === target ? 'best' : ''}">${format(bike[key])}</td>`).join('');
}
function openComparison() {
  const picks = motorcycles.filter(bike => selected.includes(bike.model));
  const content = `<table class="compare-table"><thead><tr><th>SPECIFICATION</th>${picks.map(bike => `<th><img class="compare-bike-thumb" src="${modelImage(bike)}" alt="" />${bike.brand}<br />${bike.model}</th>`).join('')}</tr></thead><tbody>
  <tr><td>TYPE</td>${picks.map(bike => `<td>${bike.type}</td>`).join('')}</tr>
  <tr><td>ENGINE</td>${picks.map(bike => `<td>${bike.engine}</td>`).join('')}</tr>
  <tr><td>POWER</td>${valueCell(picks,'power',v => `${v} hp`,'max')}</tr>
  <tr><td>TORQUE</td>${valueCell(picks,'torque',v => `${v} Nm`,'max')}</tr>
  <tr><td>WET WEIGHT</td>${valueCell(picks,'weight',v => `${v} kg`,'min')}</tr>
  <tr><td>SEAT HEIGHT</td>${valueCell(picks,'seat',v => `${v} mm`,'min')}</tr>
  <tr><td>FUEL CAPACITY</td>${valueCell(picks,'tank',v => `${v} L`,'max')}</tr>
  <tr><td>EST. EU PRICE RANGE</td>${picks.map(bike => `<td>${priceRange(bike.price)}</td>`).join('')}</tr>
  </tbody></table><p style="font-family:'DM Mono';font-size:9px;color:#6f756d;margin:25px 0 0">GREEN VALUES MARK THE STRONGEST FIGURE IN EACH COMPARABLE ROW. EU PRICE RANGES ARE INDICATIVE ONLY; FINAL PRICES VARY BY COUNTRY, TAXES, PACKAGES AND DEALER.</p>`;
  document.querySelector('#comparisonContent').innerHTML = content;
  comparisonModal.showModal();
}
function openBikeDetails(model) {
  const bike = motorcycles.find(item => item.model === model);
  const spec = officialSpecs[model];
  if (!bike) return;
  document.querySelector('#detailContent').innerHTML = `<div class="detail-hero">
    <img class="detail-image" src="${modelImage(bike)}" alt="${bike.brand} ${bike.model}" />
    <div class="detail-title"><p class="bike-brand">${bike.brand.toUpperCase()}</p><h3>${bike.model}</h3><p>${bike.type}</p></div>
  </div>
  <div class="detail-specs">
    <div><span>ENGINE</span><strong>${bike.engine}</strong></div>
    <div><span>POWER</span><strong>${bike.power} hp</strong></div>
    <div><span>TORQUE</span><strong>${bike.torque} Nm</strong></div>
    <div><span>WET WEIGHT</span><strong>${bike.weight} kg</strong></div>
    <div><span>SEAT HEIGHT</span><strong>${bike.seat} mm</strong></div>
    <div><span>FUEL CAPACITY</span><strong>${bike.tank} L</strong></div>
    <div><span>EST. EU PRICE</span><strong>${priceRange(bike.price)}</strong></div>
  </div>
  ${spec ? `<section class="official-specs"><p class="eyebrow">OFFICIAL TECHNICAL SPECIFICATION</p><div class="official-spec-grid"><div><span>CHASSIS</span><strong>${spec.chassis}</strong></div><div><span>SUSPENSION</span><strong>${spec.suspension}</strong></div><div><span>DIMENSIONS</span><strong>${spec.dimensions}</strong></div></div><a class="official-source" href="${spec.source}" target="_blank" rel="noopener noreferrer">VIEW MANUFACTURER SPECIFICATION <span>↗</span></a></section>` : ''}
  <p class="detail-note">Technical details are sourced from the linked manufacturer specification. Indicative European price range only; final pricing varies by country, taxes, packages and dealer.</p>`;
  detailModal.showModal();
}

filters.addEventListener('click', event => { const button = event.target.closest('[data-brand]'); if (!button) return; activeBrand = button.dataset.brand; renderFilters(); renderBikes(); });
grid.addEventListener('click', event => { const button = event.target.closest('[data-model]'); if (button) { toggleBike(button.dataset.model); return; } const card = event.target.closest('[data-details]'); if (card) openBikeDetails(card.dataset.details); });
grid.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-details]')) { event.preventDefault(); openBikeDetails(event.target.dataset.details); } });
document.querySelector('#sortSelect').addEventListener('change', event => { activeSort = event.target.value; renderBikes(); });
document.querySelector('#clearSelection').addEventListener('click', () => { selected = []; renderBikes(); updateDock(); });
document.querySelector('#openComparison').addEventListener('click', openComparison);
document.querySelector('#navCompare').addEventListener('click', () => { if (selected.length >= 2) openComparison(); else document.querySelector('.explorer').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#closeComparison').addEventListener('click', () => comparisonModal.close());
comparisonModal.addEventListener('click', event => { if (event.target === comparisonModal) comparisonModal.close(); });
document.querySelector('#closeDetails').addEventListener('click', () => detailModal.close());
detailModal.addEventListener('click', event => { if (event.target === detailModal) detailModal.close(); });
document.querySelector('.hero-note span').textContent = String(motorcycles.length).padStart(2, '0');
renderFilters(); renderBikes(); updateDock();
