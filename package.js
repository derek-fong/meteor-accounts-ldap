Package.describe({
  name: 'derek-fong:accounts-ldap',
  version: '1.1.0',
  summary: 'Accounts login for LDAP using ldapjs. Supports anonymous DN search & LDAPS.',
  git: 'https://github.com/derek-fong/meteor-accounts-ldap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use(['derek-fong:ldapjs@0.7.1'], 'server');

  api.use(['accounts-base'], 'server');
  api.imply(['accounts-base', 'accounts-password'], 'server');

  api.use('check');

  api.addFiles(['ldap_client.js'], 'client');
  api.addFiles(['ldap_server.js'], 'server');

  api.export('LDAP', 'server');
  api.export('LDAP_DEFAULTS', 'server');
});
