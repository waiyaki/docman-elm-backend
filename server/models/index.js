const User = require('./users');
const Role = require('./roles');
const Document = require('./documents');

Role.initialize() // Create default roles.
  .catch(() => {});

module.exports = { User, Role, Document };
