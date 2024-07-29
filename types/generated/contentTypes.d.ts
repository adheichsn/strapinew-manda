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
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
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
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
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
    order_labuhs: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    role_reflect: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::role-reflect.role-reflect'
    >;
    order_tambats: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::order-yatch.order-yatch'
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

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'Country';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Attribute.String & Attribute.Required & Attribute.Unique;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    kapals: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::kapal.kapal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
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
    displayName: 'Currency';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    symbol: Attribute.String & Attribute.Required;
    tarif_dasars: Attribute.Relation<
      'api::currency.currency',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    tarif_pandus: Attribute.Relation<
      'api::currency.currency',
      'oneToMany',
      'api::tarif-pandu.tarif-pandu'
    >;
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

export interface ApiJasaJasa extends Schema.CollectionType {
  collectionName: 'jasas';
  info: {
    singularName: 'jasa';
    pluralName: 'jasas';
    displayName: 'Jasa';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    jenis_jasa: Attribute.Relation<
      'api::jasa.jasa',
      'manyToOne',
      'api::jenis-jasa.jenis-jasa'
    >;
    jenis_kapal: Attribute.Relation<
      'api::jasa.jasa',
      'manyToOne',
      'api::jenis-kapal.jenis-kapal'
    >;
    satuan_jasa: Attribute.Relation<
      'api::jasa.jasa',
      'manyToOne',
      'api::satuan-jasa.satuan-jasa'
    >;
    jenis_pelayanans: Attribute.Relation<
      'api::jasa.jasa',
      'manyToMany',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    tarif_dasars: Attribute.Relation<
      'api::jasa.jasa',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    order_labuhs: Attribute.Relation<
      'api::jasa.jasa',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::jasa.jasa',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::jasa.jasa',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::jasa.jasa',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::jasa.jasa', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::jasa.jasa', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiJenisJasaJenisJasa extends Schema.CollectionType {
  collectionName: 'jenis_jasas';
  info: {
    singularName: 'jenis-jasa';
    pluralName: 'jenis-jasas';
    displayName: 'Jenis Jasa';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    jasas: Attribute.Relation<
      'api::jenis-jasa.jenis-jasa',
      'oneToMany',
      'api::jasa.jasa'
    >;
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
    displayName: 'Jenis Kapal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    kapals: Attribute.Relation<
      'api::jenis-kapal.jenis-kapal',
      'oneToMany',
      'api::kapal.kapal'
    >;
    jasas: Attribute.Relation<
      'api::jenis-kapal.jenis-kapal',
      'oneToMany',
      'api::jasa.jasa'
    >;
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

export interface ApiJenisPanduJenisPandu extends Schema.CollectionType {
  collectionName: 'jenis_pandus';
  info: {
    singularName: 'jenis-pandu';
    pluralName: 'jenis-pandus';
    displayName: 'Jenis Pandu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    tarif_pandus: Attribute.Relation<
      'api::jenis-pandu.jenis-pandu',
      'oneToMany',
      'api::tarif-pandu.tarif-pandu'
    >;
    order_labuhs: Attribute.Relation<
      'api::jenis-pandu.jenis-pandu',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jenis-pandu.jenis-pandu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jenis-pandu.jenis-pandu',
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
    displayName: 'Jenis Pelayanan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    jasas: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'manyToMany',
      'api::jasa.jasa'
    >;
    tarif_dasars: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::tarif-dasar.tarif-dasar'
    >;
    tarif_pandus: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::tarif-pandu.tarif-pandu'
    >;
    order_labuhs: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::jenis-pelayanan.jenis-pelayanan',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
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

export interface ApiKapalKapal extends Schema.CollectionType {
  collectionName: 'kapals';
  info: {
    singularName: 'kapal';
    pluralName: 'kapals';
    displayName: 'Kapal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    milik: Attribute.String;
    panjang_kapal: Attribute.String;
    sarat_muka_kapal: Attribute.String;
    sarat_belakang_kapal: Attribute.String;
    dwt: Attribute.String;
    country: Attribute.Relation<
      'api::kapal.kapal',
      'manyToOne',
      'api::country.country'
    >;
    jenis_kapal: Attribute.Relation<
      'api::kapal.kapal',
      'manyToOne',
      'api::jenis-kapal.jenis-kapal'
    >;
    order_labuhs: Attribute.Relation<
      'api::kapal.kapal',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::kapal.kapal',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::kapal.kapal',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::kapal.kapal',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kapal.kapal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kapal.kapal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderAirBersihOrderAirBersih extends Schema.CollectionType {
  collectionName: 'order_air_bersihs';
  info: {
    singularName: 'order-air-bersih';
    pluralName: 'order-air-bersihs';
    displayName: 'Order Air Bersih';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_date: Attribute.DateTime & Attribute.Required;
    finish_date: Attribute.DateTime & Attribute.Required;
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    total_tarif: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Attribute.Text;
    is_verified: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    payment_deadline: Attribute.DateTime & Attribute.Required;
    snap_token: Attribute.Text;
    attachment: Attribute.String;
    payment_status: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::payment-status.payment-status'
    >;
    jasa: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::jasa.jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    kapal: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::kapal.kapal'
    >;
    tarif_dasar: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::tarif-dasar.tarif-dasar'
    >;
    service_status: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::service-status.service-status'
    >;
    role_reflect: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'manyToOne',
      'api::role-reflect.role-reflect'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order-air-bersih.order-air-bersih',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderLabuhOrderLabuh extends Schema.CollectionType {
  collectionName: 'order_labuhs';
  info: {
    singularName: 'order-labuh';
    pluralName: 'order-labuhs';
    displayName: 'Order Labuh';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_date: Attribute.DateTime & Attribute.Required;
    finish_date: Attribute.DateTime & Attribute.Required;
    gt_kapal: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    total_tarif: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Attribute.Text;
    is_verified: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    payment_deadline: Attribute.DateTime & Attribute.Required;
    snap_token: Attribute.Text;
    attachment: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    payment_status: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::payment-status.payment-status'
    >;
    jasa: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::jasa.jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    kapal: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::kapal.kapal'
    >;
    tarif_dasar: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::tarif-dasar.tarif-dasar'
    >;
    jenis_pandu: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::jenis-pandu.jenis-pandu'
    >;
    tarif_pandu: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::tarif-pandu.tarif-pandu'
    >;
    service_status: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::service-status.service-status'
    >;
    role_reflect: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'manyToOne',
      'api::role-reflect.role-reflect'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order-labuh.order-labuh',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderTambatOrderTambat extends Schema.CollectionType {
  collectionName: 'order_tambats';
  info: {
    singularName: 'order-tambat';
    pluralName: 'order-tambats';
    displayName: 'Order Tambat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_date: Attribute.DateTime & Attribute.Required;
    finish_date: Attribute.DateTime & Attribute.Required;
    gt_kapal: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    total_etmal: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    total_tarif: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Attribute.Text;
    is_verified: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    payment_deadline: Attribute.DateTime & Attribute.Required;
    snap_token: Attribute.Text;
    attachment: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    payment_status: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::payment-status.payment-status'
    >;
    jasa: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::jasa.jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    kapal: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::kapal.kapal'
    >;
    tarif_dasar: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::tarif-dasar.tarif-dasar'
    >;
    tarif_pandu: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::tarif-pandu.tarif-pandu'
    >;
    service_status: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::service-status.service-status'
    >;
    role_reflect: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'manyToOne',
      'api::role-reflect.role-reflect'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order-tambat.order-tambat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderYatchOrderYatch extends Schema.CollectionType {
  collectionName: 'order_yatches';
  info: {
    singularName: 'order-yatch';
    pluralName: 'order-yatches';
    displayName: 'Order Yatch';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    start_date: Attribute.DateTime & Attribute.Required;
    finish_date: Attribute.DateTime & Attribute.Required;
    gt_kapal: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    total_tarif: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Attribute.Text;
    is_verified: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    payment_deadline: Attribute.DateTime & Attribute.Required;
    snap_token: Attribute.Text;
    attachment: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    payment_status: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::payment-status.payment-status'
    >;
    jasa: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::jasa.jasa'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    kapal: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::kapal.kapal'
    >;
    tarif_dasar: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::tarif-dasar.tarif-dasar'
    >;
    service_status: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::service-status.service-status'
    >;
    role_reflect: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'manyToOne',
      'api::role-reflect.role-reflect'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order-yatch.order-yatch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentStatusPaymentStatus extends Schema.CollectionType {
  collectionName: 'payment_statuses';
  info: {
    singularName: 'payment-status';
    pluralName: 'payment-statuses';
    displayName: 'Payment Status';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    status: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    order_labuhs: Attribute.Relation<
      'api::payment-status.payment-status',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::payment-status.payment-status',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::payment-status.payment-status',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::payment-status.payment-status',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-status.payment-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-status.payment-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRoleReflectRoleReflect extends Schema.CollectionType {
  collectionName: 'role_reflects';
  info: {
    singularName: 'role-reflect';
    pluralName: 'role-reflects';
    displayName: 'Role Reflect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    role: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    users: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    order_labuhs: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::role-reflect.role-reflect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSatuanJasaSatuanJasa extends Schema.CollectionType {
  collectionName: 'satuan_jasas';
  info: {
    singularName: 'satuan-jasa';
    pluralName: 'satuan-jasas';
    displayName: 'Satuan Jasa';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    satuan: Attribute.String & Attribute.Required & Attribute.Unique;
    description: Attribute.Text;
    jasas: Attribute.Relation<
      'api::satuan-jasa.satuan-jasa',
      'oneToMany',
      'api::jasa.jasa'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::satuan-jasa.satuan-jasa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::satuan-jasa.satuan-jasa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceStatusServiceStatus extends Schema.CollectionType {
  collectionName: 'service_statuses';
  info: {
    singularName: 'service-status';
    pluralName: 'service-statuses';
    displayName: 'Service Status';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    status: Attribute.String & Attribute.Required & Attribute.Unique;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    order_labuhs: Attribute.Relation<
      'api::service-status.service-status',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::service-status.service-status',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::service-status.service-status',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::service-status.service-status',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-status.service-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-status.service-status',
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
    displayName: 'Tarif Dasar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tarif: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    jasa: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'manyToOne',
      'api::jasa.jasa'
    >;
    currency: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'manyToOne',
      'api::currency.currency'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'manyToOne',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    order_labuhs: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
    order_yatches: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::order-yatch.order-yatch'
    >;
    order_air_bersihs: Attribute.Relation<
      'api::tarif-dasar.tarif-dasar',
      'oneToMany',
      'api::order-air-bersih.order-air-bersih'
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
    displayName: 'Tarif Pandu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tarif: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    jenis_pandu: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'manyToOne',
      'api::jenis-pandu.jenis-pandu'
    >;
    currency: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'manyToOne',
      'api::currency.currency'
    >;
    jenis_pelayanan: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'manyToOne',
      'api::jenis-pelayanan.jenis-pelayanan'
    >;
    order_labuhs: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'oneToMany',
      'api::order-labuh.order-labuh'
    >;
    order_tambats: Attribute.Relation<
      'api::tarif-pandu.tarif-pandu',
      'oneToMany',
      'api::order-tambat.order-tambat'
    >;
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
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::country.country': ApiCountryCountry;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::jasa.jasa': ApiJasaJasa;
      'api::jenis-jasa.jenis-jasa': ApiJenisJasaJenisJasa;
      'api::jenis-kapal.jenis-kapal': ApiJenisKapalJenisKapal;
      'api::jenis-pandu.jenis-pandu': ApiJenisPanduJenisPandu;
      'api::jenis-pelayanan.jenis-pelayanan': ApiJenisPelayananJenisPelayanan;
      'api::kapal.kapal': ApiKapalKapal;
      'api::order-air-bersih.order-air-bersih': ApiOrderAirBersihOrderAirBersih;
      'api::order-labuh.order-labuh': ApiOrderLabuhOrderLabuh;
      'api::order-tambat.order-tambat': ApiOrderTambatOrderTambat;
      'api::order-yatch.order-yatch': ApiOrderYatchOrderYatch;
      'api::payment-status.payment-status': ApiPaymentStatusPaymentStatus;
      'api::role-reflect.role-reflect': ApiRoleReflectRoleReflect;
      'api::satuan-jasa.satuan-jasa': ApiSatuanJasaSatuanJasa;
      'api::service-status.service-status': ApiServiceStatusServiceStatus;
      'api::tarif-dasar.tarif-dasar': ApiTarifDasarTarifDasar;
      'api::tarif-pandu.tarif-pandu': ApiTarifPanduTarifPandu;
    }
  }
}
