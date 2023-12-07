import type { Schema, Attribute } from '@strapi/strapi';

export interface CountriesCountries extends Schema.Component {
  collectionName: 'components_countries_countries';
  info: {
    displayName: 'countries';
  };
  attributes: {
    name: Attribute.String;
    short_code: Attribute.String;
  };
}

export interface CurrencyCurrency extends Schema.Component {
  collectionName: 'components_currency_currencies';
  info: {
    displayName: 'currency';
  };
  attributes: {
    amount: Attribute.Decimal;
    date: Attribute.Date;
    rate_dollar: Attribute.Decimal;
  };
}

export interface DataKapalKapal extends Schema.Component {
  collectionName: 'components_kapal_kapals';
  info: {
    displayName: 'data_kapal';
    description: '';
  };
  attributes: {
    nama_kapal: Attribute.String;
    milik: Attribute.Text;
    panjang_kapal: Attribute.String;
    sarat_muka_kapal: Attribute.String;
    sarat_belakang_kapal: Attribute.String;
    dwt: Attribute.String;
    datang_dari: Attribute.String;
    tujuan: Attribute.String;
    name: Attribute.Relation<
      'data-kapal.kapal',
      'oneToMany',
      'api::countrie.countrie'
    >;
    jenis_kapal: Attribute.Relation<
      'data-kapal.kapal',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
  };
}

export interface DetailJenisJasaDetailJenisJasa extends Schema.Component {
  collectionName: 'components_detail_jenis_jasa_detail_jenis_jasas';
  info: {
    displayName: 'detail_jenis_jasa';
    description: '';
  };
  attributes: {
    detail_jenis_jasa: Attribute.String;
    jenis_pelayanan: Attribute.Relation<
      'detail-jenis-jasa.detail-jenis-jasa',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    nama_jasa: Attribute.Relation<
      'detail-jenis-jasa.detail-jenis-jasa',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
  };
}

export interface HitunganEtmalHitunganEtmal extends Schema.Component {
  collectionName: 'components_hitungan_etmal_hitungan_etmals';
  info: {
    displayName: 'hitungan_etmal';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    dasar_etmal: Attribute.Float;
  };
}

export interface IzinIzin extends Schema.Component {
  collectionName: 'components_izin_izins';
  info: {
    displayName: 'izin';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface JasaLabuhJasaLabuh extends Schema.Component {
  collectionName: 'components_jasa_labuh_jasa_labuhs';
  info: {
    displayName: 'jasa_labuh';
    description: '';
  };
  attributes: {
    start_layanan: Attribute.DateTime;
    finish_layanan: Attribute.DateTime;
    gt_kapal: Attribute.Integer;
    pandu: Attribute.String;
    total_tarif: Attribute.Decimal;
    description: Attribute.String;
    data_kapal: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jasa-kapal.jasa-kapal'
    >;
    jenis_kapal: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    jenis_jasa: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    detail_jenis_jasa: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::detail-jenis-jasa.detail-jenis-jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    tarif_dasar: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    tarif_pandu: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::tarif-pandu.tarif-pandu'
    >;
    status_services: Attribute.Relation<
      'jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::status-service.status-service'
    >;
  };
}

export interface JenisJasaJenisJasa extends Schema.Component {
  collectionName: 'components_jenis_jasa_jenis_jasas';
  info: {
    displayName: 'jenis_jasa';
  };
  attributes: {
    nama_jasa: Attribute.String;
  };
}

export interface JenisKapalJenisKapal extends Schema.Component {
  collectionName: 'components_jenis_kapal_jenis_kapals';
  info: {
    displayName: 'jenis_kapal';
  };
  attributes: {
    jenis_layanan_kapal: Attribute.String;
  };
}

export interface JenisPelayananJenisPelayanan extends Schema.Component {
  collectionName: 'components_jenis_pelayanan_jenis_pelayanans';
  info: {
    displayName: 'jenis_pelayanan';
    description: '';
  };
  attributes: {
    jenis_pelayanan: Attribute.String;
    satuan_tarif: Attribute.Relation<
      'jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::satuan-bayar.satuan-bayar'
    >;
  };
}

export interface RoleUserRoleUser extends Schema.Component {
  collectionName: 'components_role_user_role_users';
  info: {
    displayName: 'role_user';
    description: '';
  };
  attributes: {};
}

export interface RolesRoles extends Schema.Component {
  collectionName: 'components_roles_roles';
  info: {
    displayName: 'roles';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SatuanBayarSatuanBayar extends Schema.Component {
  collectionName: 'components_satuan_bayar_satuan_bayars';
  info: {
    displayName: 'satuan_bayar';
  };
  attributes: {
    satuan_tarif: Attribute.String;
  };
}

export interface SatuanDetailSatuanDetail extends Schema.Component {
  collectionName: 'components_satuan_detail_satuan_details';
  info: {
    displayName: 'satuan_detail';
  };
  attributes: {
    satuan: Attribute.String;
  };
}

export interface StatusServiceStatusService extends Schema.Component {
  collectionName: 'components_status_service_status_services';
  info: {
    displayName: 'status_service';
  };
  attributes: {
    status: Attribute.String;
  };
}

export interface TarifDasarTarifDasar extends Schema.Component {
  collectionName: 'components_tarif_dasar_tarif_dasars';
  info: {
    displayName: 'tarif_dasar';
    description: '';
  };
  attributes: {
    tarif_dasar: Attribute.Decimal;
    currency: Attribute.Decimal;
    currency_usd: Attribute.Decimal;
    jenis_jasa: Attribute.Relation<
      'tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    jenis_kapal: Attribute.Relation<
      'tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    satuan_bayar: Attribute.Relation<
      'tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::satuan-bayar.satuan-bayar'
    >;
    detail_jenis_jasa: Attribute.Relation<
      'tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::detail-jenis-jasa.detail-jenis-jasa'
    >;
  };
}

export interface TarifPanduTarifPandu extends Schema.Component {
  collectionName: 'components_tarif_pandu_tarif_pandus';
  info: {
    displayName: 'tarif_pandu';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Decimal;
  };
}

export interface TerminalPelabuhanTerminalPelabuhan extends Schema.Component {
  collectionName: 'components_terminal_pelabuhan_terminal_pelabuhans';
  info: {
    displayName: 'terminal_pelabuhan';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'countries.countries': CountriesCountries;
      'currency.currency': CurrencyCurrency;
      'data-kapal.kapal': DataKapalKapal;
      'detail-jenis-jasa.detail-jenis-jasa': DetailJenisJasaDetailJenisJasa;
      'hitungan-etmal.hitungan-etmal': HitunganEtmalHitunganEtmal;
      'izin.izin': IzinIzin;
      'jasa-labuh.jasa-labuh': JasaLabuhJasaLabuh;
      'jenis-jasa.jenis-jasa': JenisJasaJenisJasa;
      'jenis-kapal.jenis-kapal': JenisKapalJenisKapal;
      'jenis-pelayanan.jenis-pelayanan': JenisPelayananJenisPelayanan;
      'role-user.role-user': RoleUserRoleUser;
      'roles.roles': RolesRoles;
      'satuan-bayar.satuan-bayar': SatuanBayarSatuanBayar;
      'satuan-detail.satuan-detail': SatuanDetailSatuanDetail;
      'status-service.status-service': StatusServiceStatusService;
      'tarif-dasar.tarif-dasar': TarifDasarTarifDasar;
      'tarif-pandu.tarif-pandu': TarifPanduTarifPandu;
      'terminal-pelabuhan.terminal-pelabuhan': TerminalPelabuhanTerminalPelabuhan;
    }
  }
}
