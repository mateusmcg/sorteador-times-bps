export interface Map {
  name: string;
  isSelected: boolean;
  imgUrl: string;
}

export interface MapList {
  DE_DUST_2: Map;
  DE_INFERNO: Map;
  DE_TRAIN: Map;
  DE_MIRAGE: Map;
  DE_NUKE: Map;
  DE_OVERPASS: Map;
  DE_CACHE: Map;
  DE_SHORTDUST: Map;
  FY_ICEWORLD: Map;
  FY_POOL_DAY: Map;
  AIM_PISTOL_CSGO: Map;
  AIM_MAP: Map;
  AWP_LEGO: Map;
  AWP_INDIA: Map;
  GD_RIALTO: Map;
}

export const MAPS: MapList = {
  DE_DUST_2: { name: 'de_dust2', isSelected: false, imgUrl: './assets/images/maps/de_dust2.jpg' } as Map,
  DE_INFERNO: { name: 'de_inferno', isSelected: false, imgUrl: './assets/images/maps/de_inferno.jpg' } as Map,
  DE_TRAIN: { name: 'de_train', isSelected: false, imgUrl: './assets/images/maps/de_train.jpg' } as Map,
  DE_CACHE: { name: 'de_cache', isSelected: false, imgUrl: './assets/images/maps/de_cache.jpg' } as Map,
  DE_MIRAGE: { name: 'de_mirage', isSelected: false, imgUrl: './assets/images/maps/de_mirage.jpg' } as Map,
  DE_NUKE: { name: 'de_nuke', isSelected: false, imgUrl: './assets/images/maps/de_nuke.jpg' } as Map,
  DE_SHORTDUST: { name: 'de_shortdust', isSelected: false, imgUrl: './assets/images/maps/de_shortdust.jpg' } as Map,
  FY_ICEWORLD: { name: 'fy_iceworld', isSelected: false, imgUrl: './assets/images/maps/fy_iceworld.jpg' } as Map,
  DE_OVERPASS: { name: 'de_overpass', isSelected: false, imgUrl: './assets/images/maps/de_overpass.jpg' } as Map,
  FY_POOL_DAY: { name: 'fy_pool_day', isSelected: false, imgUrl: './assets/images/maps/fy_pool_day.jpg' } as Map,
  AIM_PISTOL_CSGO: { name: 'aim_pistol_csgo', isSelected: false, imgUrl: './assets/images/maps/aim_pistol_csgo.jpg' } as Map,
  AIM_MAP: { name: 'aim_map', isSelected: false, imgUrl: './assets/images/maps/aim_map.jpg' } as Map,
  AWP_LEGO: { name: 'awp_lego', isSelected: false, imgUrl: './assets/images/maps/awp_lego.jpg' } as Map,
  AWP_INDIA: { name: 'awp_india', isSelected: false, imgUrl: './assets/images/maps/awp_india.jpg' } as Map,
  GD_RIALTO: { name: 'gd_rialto', isSelected: false, imgUrl: './assets/images/maps/gd_rialto.jpg' } as Map,
};
