import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountrieCountrie extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'countrie';
    pluralName: 'countries';
    displayName: 'countrie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    short_code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::countrie.countrie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::countrie.countrie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyCurrency extends Schema.CollectionType {
  collectionName: 'currencies';
  info: {
    singularName: 'currency';
    pluralName: 'currencies';
    displayName: 'currency';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount: Attribute.Decimal;
    date: Attribute.Date;
    rate_dollar: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDataKapalDataKapal extends Schema.CollectionType {
  collectionName: 'data_kapals';
  info: {
    singularName: 'data-kapal';
    pluralName: 'data-kapals';
    displayName: 'data_kapal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama_kapal: Attribute.String;
    milik: Attribute.String;
    panjang_kapal: Attribute.String;
    sarat_muka_kapal: Attribute.String;
    sarat_belakang_kapal: Attribute.String;
    dwt: Attribute.String;
    datang_dari: Attribute.String;
    tujuan: Attribute.String;
    bendera_kebangsaan: Attribute.Relation<
      'api::data-kapal.data-kapal',
      'oneToOne',
      'api::countrie.countrie'
    >;
    jenis_kapal: Attribute.Relation<
      'api::data-kapal.data-kapal',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::data-kapal.data-kapal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::data-kapal.data-kapal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDetailJenisJasaDetailJenisJasa
  extends Schema.CollectionType {
  collectionName: 'detail_jenis_jasas';
  info: {
    singularName: 'detail-jenis-jasa';
    pluralName: 'detail-jenis-jasas';
    displayName: 'detail_jenis_jasa';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    detail_jenis_jasa: Attribute.String;
    jenis_pelayanan: Attribute.Relation<
      'api::detail-jenis-jasa.detail-jenis-jasa',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    nama_jasa: Attribute.Relation<
      'api::detail-jenis-jasa.detail-jenis-jasa',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::detail-jenis-jasa.detail-jenis-jasa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::detail-jenis-jasa.detail-jenis-jasa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHitunganEtmalHitunganEtmal extends Schema.CollectionType {
  collectionName: 'hitungan_etmals';
  info: {
    singularName: 'hitungan-etmal';
    pluralName: 'hitungan-etmals';
    displayName: 'hitungan_etmal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    dasar_etmal: Attribute.Float;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hitungan-etmal.hitungan-etmal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hitungan-etmal.hitungan-etmal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJasaAirBersihJasaAirBersih extends Schema.CollectionType {
  collectionName: 'jasa_air_bersihs';
  info: {
    singularName: 'jasa-air-bersih';
    pluralName: 'jasa-air-bersihs';
    displayName: 'jasa_air_bersih';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_layanan: Attribute.DateTime;
    finish_layanan: Attribute.DateTime;
    qty: Attribute.Integer;
    total_tarif: Attribute.Decimal;
    keterangan: Attribute.String;
    data_kapal: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToMany',
      'api::data-kapal.data-kapal'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    tarif_dasar: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    status: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToMany',
      'api::status-service.status-service'
    >;
    assign_to_id: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToMany',
      'api::roless.roless'
    >;
    satuan_details: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToMany',
      'api::satuan-detail.satuan-detail'
    >;
    file: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jasa-air-bersih.jasa-air-bersih',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJasaLabuhJasaLabuh extends Schema.CollectionType {
  collectionName: 'jasa_labuhs';
  info: {
    singularName: 'jasa-labuh';
    pluralName: 'jasa-labuhs';
    displayName: 'jasa_labuh';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_layanan: Attribute.DateTime;
    finish_layanan: Attribute.DateTime;
    gt_kapal: Attribute.Integer;
    pandu: Attribute.String;
    total_tarif: Attribute.Decimal;
    description: Attribute.String;
    name: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    data_kapal: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::data-kapal.data-kapal'
    >;
    jenis_kapal: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    jenis_jasa: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    detail_jenis_jasa: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::detail-jenis-jasa.detail-jenis-jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    tarif_dasar: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    tarif_pandu: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::tarif-pandu.tarif-pandu'
    >;
    status: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::status-service.status-service'
    >;
    assign_to_id: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::roless.roless'
    >;
    satuan_detail: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToMany',
      'api::satuan-detail.satuan-detail'
    >;
    file: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jasa-labuh.jasa-labuh',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJasaTambatJasaTambat extends Schema.CollectionType {
  collectionName: 'jasa_tambats';
  info: {
    singularName: 'jasa-tambat';
    pluralName: 'jasa-tambats';
    displayName: 'jasa_tambat';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_layanan: Attribute.DateTime;
    finish_layanan: Attribute.DateTime;
    gt_kapal: Attribute.Integer;
    pandu: Attribute.String;
    total_etmal: Attribute.Integer;
    total_tarif: Attribute.Decimal;
    description: Attribute.Text;
    name: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    data_kapal: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::data-kapal.data-kapal'
    >;
    jenis_kapal: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    jenis_jasa: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    detail_jenis_jasa: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::detail-jenis-jasa.detail-jenis-jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    tarif_pandu: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::tarif-pandu.tarif-pandu'
    >;
    status: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::status-service.status-service'
    >;
    file: Attribute.Media;
    tarif_dasar: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    assign_to_id: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToMany',
      'api::roless.roless'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jasa-tambat.jasa-tambat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJasaYatchJasaYatch extends Schema.CollectionType {
  collectionName: 'jasa_yatches';
  info: {
    singularName: 'jasa-yatch';
    pluralName: 'jasa-yatches';
    displayName: 'jasa_yatch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_layanan: Attribute.DateTime;
    finish_layanan: Attribute.DateTime;
    gt_kapal: Attribute.Integer;
    total_tarif: Attribute.Decimal;
    description: Attribute.String;
    name: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    data_kapal: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::data-kapal.data-kapal'
    >;
    jenis_kapal: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    jenis_jasa: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    detail_jenis_jasa: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::detail-jenis-jasa.detail-jenis-jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    tarif_dasar: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    status: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::status-service.status-service'
    >;
    assign_to_id: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::roless.roless'
    >;
    satuan_detail: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToMany',
      'api::satuan-detail.satuan-detail'
    >;
    file: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jasa-yatch.jasa-yatch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJenisJasaJenisJasa extends Schema.CollectionType {
  collectionName: 'jenis_jasas';
  info: {
    singularName: 'jenis-jasa';
    pluralName: 'jenis-jasas';
    displayName: 'jenis_jasa';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama_jasa: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jenis-jasa.jenis-jasa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jenis-jasa.jenis-jasa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJenisKapalJenisKapal extends Schema.CollectionType {
  collectionName: 'jenis_kapals';
  info: {
    singularName: 'jenis-kapal';
    pluralName: 'jenis-kapals';
    displayName: 'jenis_kapal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis_kapal: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jenis-kapal.jenis-kapal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jenis-kapal.jenis-kapal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJenisPelayananJenisPelayanan extends Schema.CollectionType {
  collectionName: 'jenis_pelayanans';
  info: {
    singularName: 'jenis-pelayanan';
    pluralName: 'jenis-pelayanans';
    displayName: 'jenis_pelayanan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis_pelayanan: Attribute.String;
    satuan_tarif: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::satuan-bayar.satuan-bayar'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMedicalMedical extends Schema.CollectionType {
  collectionName: 'medicals';
  info: {
    singularName: 'medical';
    pluralName: 'medicals';
    displayName: 'medical';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    stock: Attribute.Integer;
    price: Attribute.Integer;
    description: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medical.medical',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medical.medical',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPasswordResetPasswordReset extends Schema.CollectionType {
  collectionName: 'password_resets';
  info: {
    singularName: 'password-reset';
    pluralName: 'password-resets';
    displayName: 'password_reset';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.String;
    token: Attribute.String;
    create_at: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::password-reset.password-reset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::password-reset.password-reset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPermissionRolePermissionRole extends Schema.CollectionType {
  collectionName: 'permission_roles';
  info: {
    singularName: 'permission-role';
    pluralName: 'permission-roles';
    displayName: 'permission_role';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    roles: Attribute.Relation<
      'api::permission-role.permission-role',
      'oneToMany',
      'api::roless.roless'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::permission-role.permission-role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::permission-role.permission-role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPermissionssPermissionss extends Schema.CollectionType {
  collectionName: 'permissionsss';
  info: {
    singularName: 'permissionss';
    pluralName: 'permissionsss';
    displayName: 'permission';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::permissionss.permissionss',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::permissionss.permissionss',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRoleUserRoleUser extends Schema.CollectionType {
  collectionName: 'role_users';
  info: {
    singularName: 'role-user';
    pluralName: 'role-users';
    displayName: 'role_user';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    users: Attribute.Relation<
      'api::role-user.role-user',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    roles: Attribute.Relation<
      'api::role-user.role-user',
      'oneToMany',
      'api::roless.roless'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::role-user.role-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::role-user.role-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRolessRoless extends Schema.CollectionType {
  collectionName: 'rolesss';
  info: {
    singularName: 'roless';
    pluralName: 'rolesss';
    displayName: 'roles';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::roless.roless',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::roless.roless',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSatuanBayarSatuanBayar extends Schema.CollectionType {
  collectionName: 'satuan_bayars';
  info: {
    singularName: 'satuan-bayar';
    pluralName: 'satuan-bayars';
    displayName: 'satuan_bayar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    satuan_tarif: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::satuan-bayar.satuan-bayar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::satuan-bayar.satuan-bayar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSatuanDetailSatuanDetail extends Schema.CollectionType {
  collectionName: 'satuan_details';
  info: {
    singularName: 'satuan-detail';
    pluralName: 'satuan-details';
    displayName: 'satuan_detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    satuan: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::satuan-detail.satuan-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::satuan-detail.satuan-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatusServiceStatusService extends Schema.CollectionType {
  collectionName: 'status_services';
  info: {
    singularName: 'status-service';
    pluralName: 'status-services';
    displayName: 'status_service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    status: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::status-service.status-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::status-service.status-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTarifDasarTarifDasar extends Schema.CollectionType {
  collectionName: 'tarif_dasars';
  info: {
    singularName: 'tarif-dasar';
    pluralName: 'tarif-dasars';
    displayName: 'tarif_dasar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tarif_dasar: Attribute.Decimal;
    currency: Attribute.Decimal;
    currency_usd: Attribute.Decimal;
    jenis_jasa: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::jenis-jasa.jenis-jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    jenis_kapal: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::jenis-kapal.jenis-kapal'
    >;
    satuan_bayar: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::satuan-bayar.satuan-bayar'
    >;
    detail_jenis_jasa: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::detail-jenis-jasa.detail-jenis-jasa'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTarifPanduTarifPandu extends Schema.CollectionType {
  collectionName: 'tarif_pandus';
  info: {
    singularName: 'tarif-pandu';
    pluralName: 'tarif-pandus';
    displayName: 'tarif_pandu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTerminalPelabuhanTerminalPelabuhan
  extends Schema.CollectionType {
  collectionName: 'terminal_pelabuhans';
  info: {
    singularName: 'terminal-pelabuhan';
    pluralName: 'terminal-pelabuhans';
    displayName: 'terminal_pelabuhan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terminal-pelabuhan.terminal-pelabuhan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terminal-pelabuhan.terminal-pelabuhan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::countrie.countrie': ApiCountrieCountrie;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::data-kapal.data-kapal': ApiDataKapalDataKapal;
      'api::detail-jenis-jasa.detail-jenis-jasa': ApiDetailJenisJasaDetailJenisJasa;
      'api::hitungan-etmal.hitungan-etmal': ApiHitunganEtmalHitunganEtmal;
      'api::jasa-air-bersih.jasa-air-bersih': ApiJasaAirBersihJasaAirBersih;
      'api::jasa-labuh.jasa-labuh': ApiJasaLabuhJasaLabuh;
      'api::jasa-tambat.jasa-tambat': ApiJasaTambatJasaTambat;
      'api::jasa-yatch.jasa-yatch': ApiJasaYatchJasaYatch;
      'api::jenis-jasa.jenis-jasa': ApiJenisJasaJenisJasa;
      'api::jenis-kapal.jenis-kapal': ApiJenisKapalJenisKapal;
      'api::jenis-pelayanan.jenis-pelayanan': ApiJenisPelayananJenisPelayanan;
      'api::medical.medical': ApiMedicalMedical;
      'api::password-reset.password-reset': ApiPasswordResetPasswordReset;
      'api::permission-role.permission-role': ApiPermissionRolePermissionRole;
      'api::permissionss.permissionss': ApiPermissionssPermissionss;
      'api::role-user.role-user': ApiRoleUserRoleUser;
      'api::roless.roless': ApiRolessRoless;
      'api::satuan-bayar.satuan-bayar': ApiSatuanBayarSatuanBayar;
      'api::satuan-detail.satuan-detail': ApiSatuanDetailSatuanDetail;
      'api::status-service.status-service': ApiStatusServiceStatusService;
      'api::tarif-dasar.tarif-dasar': ApiTarifDasarTarifDasar;
      'api::tarif-pandu.tarif-pandu': ApiTarifPanduTarifPandu;
      'api::terminal-pelabuhan.terminal-pelabuhan': ApiTerminalPelabuhanTerminalPelabuhan;
    }
  }
}
