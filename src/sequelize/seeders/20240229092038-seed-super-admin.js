'use strict';

const AdminService = require('../../admin/services/service.admin')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    INSERT INTO "AdminRoles" (
      code,
      name,
      created_at,
      updated_at
    ) VALUES (
      'SADM',
      'super admin',
      NOW(),
      NOW()
    ) ON CONFLICT (code)
    DO
    UPDATE
    SET
    code = EXCLUDED.code,
    name = EXCLUDED.name`)

    const admin_id = await AdminService.generateUniqueAdminId();

    await queryInterface.sequelize.query(`
    INSERT INTO "Admins" (
      admin_id, 
      role_type, 
      email, 
      status, 
      is_verified_email,
      password,
      is_completed_profile,
      is_created_password,
      is_deleted,
      created_at,
      updated_at
    ) VALUES (
      '${admin_id}',
      'SADM',
      'oluwatosin.thomas@theseedfi.com',
      'active',
      TRUE,
      '$2b$10$XcafMg8J3zyWMbR3bKFyRet51YY9KYx/z6MbM0ZqEZ7XXHldcu2YO',
      FALSE,
      FALSE,
      FALSE,
      NOW(),
      NOW()
    ) ON CONFLICT (email)
    DO
    UPDATE
    SET
    role_type = EXCLUDED.role_type,
    is_verified_email = EXCLUDED.is_verified_email,
    status = EXCLUDED.status`)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DELETE FROM "AdminRoles" WHERE code = 'SADM'`);
    await queryInterface.sequelize.query(`DELETE FROM "Admins" WHERE email = 'oluwatosin.thomas@theseedfi.com'`);
  }
};