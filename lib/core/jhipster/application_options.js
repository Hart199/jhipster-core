/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ApplicationTypes = require('./application_types');
const DatabaseTypes = require('./database_types');

const Options = {
  applicationType: {
    monolith: ApplicationTypes.MONOLITH,
    microservice: ApplicationTypes.MICROSERVICE,
    gateway: ApplicationTypes.GATEWAY,
    uaa: ApplicationTypes.UAA
  },
  authenticationType: {
    jwt: 'jwt', oauth2: 'oauth2', session: 'session', uaa: 'uaa'
  },
  baseName: 'jhipster',
  blueprint: undefined,
  buildTool: {
    maven: 'maven', gradle: 'gradle'
  },
  cacheProvider: {
    ehcache: 'ehcache', hazelcast: 'hazelcast', infinispan: 'infinispan', no: 'no'
  },
  clientFramework: {
    angularX: 'angularX', react: 'react'
  },
  clientPackageManager: {
    yarn: 'yarn', npm: 'npm'
  },
  databaseType: {
    sql: DatabaseTypes.SQL,
    mongodb: DatabaseTypes.MONGODB,
    cassandra: DatabaseTypes.CASSANDRA,
    couchbase: DatabaseTypes.COUCHBASE,
    no: 'no'
  },
  devDatabaseType: { // these options + the prod database type
    h2Disk: 'h2Disk', h2Memory: 'h2Memory'
  },
  enableHibernateCache: true,
  enableSwaggerCodegen: false,
  enableTranslation: true,
  experimental: false,
  i18n: true,
  installModules: false,
  jhiPrefix: 'jhi',
  jhipsterVersion: '',
  jwtSecretKey: '',
  languages: ['en', 'fr'],
  messageBroker: {
    kafka: 'kafka', false: false
  },
  nativeLanguage: 'en',
  npm: false,
  otherModules: [],
  packageName: 'com.mycompany.myapp',
  packageFolder: 'com/mycompany/myapp',
  prodDatabaseType: {
    mysql: DatabaseTypes.MYSQL,
    mariadb: DatabaseTypes.MARIADB,
    postgresql: DatabaseTypes.POSTGRESQL,
    oracle: DatabaseTypes.ORACLE,
    mssql: DatabaseTypes.MSSQL,
    no: 'no'
  },
  reactive: false,
  rememberMeKey: '',
  searchEngine: {
    elasticsearch: 'elasticsearch', false: false
  },
  serverPort: '8080',
  serviceDiscoveryType: {
    eureka: 'eureka', consul: 'consul', false: false
  },
  skipClient: false,
  skipGit: false,
  skipInstall: false,
  skipServer: false,
  skipUserManagement: false,
  testFrameworks: {
    protractor: 'protractor', cucumber: 'cucumber', gatling: 'gatling'
  },
  uaaBaseName: '../uaa',
  useSass: false,
  useYarn: true,
  websocket: {
    'spring-websocket': 'spring-websocket', false: false
  },
  withEntities: false
};

Options.defaults = () => ({
  applicationType: Options.applicationType.monolith,
  clientPackageManager: Options.useYarn ? Options.clientPackageManager.yarn : Options.clientPackageManager.npm,
  databaseType: Options.databaseType.sql,
  devDatabaseType: Options.devDatabaseType.h2Disk,
  enableHibernateCache: Options.enableHibernateCache,
  enableSwaggerCodegen: Options.enableSwaggerCodegen,
  enableTranslation: Options.enableTranslation,
  jhiPrefix: Options.jhiPrefix,
  languages: Options.languages,
  messageBroker: Options.messageBroker.false,
  nativeLanguage: Options.nativeLanguage,
  packageName: Options.packageName,
  packageFolder: Options.packageFolder,
  prodDatabaseType: Options.prodDatabaseType.mysql,
  searchEngine: Options.searchEngine.false,
  serviceDiscoveryType: Options.serviceDiscoveryType.false,
  skipClient: Options.skipClient,
  skipServer: Options.skipServer,
  testFrameworks: [],
  useSass: Options.useSass,
  websocket: Options.websocket.false
});

module.exports = Options;