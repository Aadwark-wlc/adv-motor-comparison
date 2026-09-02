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
  ,{ brand: 'KTM', model: '890 SMT', type: 'Sport Touring', power: 105, torque: 100, weight: 194, seat: 860, tank: 15.8, price: 13990, engine: '889 cc Parallel twin' }
  ,{ brand: 'KTM', model: '1390 Super Adventure R', type: 'Adventure Touring', power: 173, torque: 145, weight: 248, seat: 880, tank: 23, price: 21649, engine: '1,350 cc V-twin' }
  ,{ brand: 'Honda', model: 'CRF1100L Africa Twin', type: 'Adventure Touring', power: 102, torque: 112, weight: 231, seat: 870, tank: 18.8, price: 15499, engine: '1,084 cc Parallel twin' }
  ,{ brand: 'BMW', model: 'R 1300 RS', type: 'Sport Touring', power: 145, torque: 149, weight: 245, seat: 790, tank: 17, price: 17500, engine: '1,300 cc Boxer twin' },{ brand: 'BMW', model: 'R 1300 RT', type: 'Grand Touring', power: 145, torque: 149, weight: 281, seat: 820, tank: 24, price: 25000, engine: '1,300 cc Boxer twin' },{ brand: 'BMW', model: 'K 1600 GT', type: 'Grand Touring', power: 160, torque: 180, weight: 343, seat: 810, tank: 26.5, price: 28000, engine: '1,649 cc Inline-six' }
  ,{ brand: 'Ducati', model: 'Multistrada V4 Rally', type: 'Adventure Touring', power: 170, torque: 124, weight: 260, seat: 870, tank: 30, price: 30000, engine: '1,158 cc V4 Granturismo' }
  ,{ brand: 'Suzuki', model: 'V-Strom 800DE', type: 'Adventure Touring', power: 84, torque: 78, weight: 230, seat: 855, tank: 20, price: 11500, engine: '776 cc Parallel twin' },{ brand: 'Suzuki', model: 'GSX-S1000GT+', type: 'Sport Touring', power: 152, torque: 106, weight: 226, seat: 810, tank: 19, price: 15000, engine: '999 cc Inline-four' }
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
  ,'Multistrada V4 Rally': 'https://www.ducati.com/cms-web/upl/2025/10/Multistrada-V4-Rally-MY26-Model-Preview-1050x650.png'
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
};
const verifiedModels = Object.keys(verifiedImages);
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
    return `<article class="motor-card ${checked ? 'selected' : ''}">
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

filters.addEventListener('click', event => { const button = event.target.closest('[data-brand]'); if (!button) return; activeBrand = button.dataset.brand; renderFilters(); renderBikes(); });
grid.addEventListener('click', event => { const button = event.target.closest('[data-model]'); if (button) toggleBike(button.dataset.model); });
document.querySelector('#sortSelect').addEventListener('change', event => { activeSort = event.target.value; renderBikes(); });
document.querySelector('#clearSelection').addEventListener('click', () => { selected = []; renderBikes(); updateDock(); });
document.querySelector('#openComparison').addEventListener('click', openComparison);
document.querySelector('#navCompare').addEventListener('click', () => { if (selected.length >= 2) openComparison(); else document.querySelector('.explorer').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#closeComparison').addEventListener('click', () => comparisonModal.close());
comparisonModal.addEventListener('click', event => { if (event.target === comparisonModal) comparisonModal.close(); });
document.querySelector('.hero-note span').textContent = String(motorcycles.length).padStart(2, '0');
renderFilters(); renderBikes(); updateDock();
