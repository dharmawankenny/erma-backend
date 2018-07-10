'use strict';

/**
 * Medicalrecord.js controller
 *
 * @description: A set of functions called "actions" for managing `Medicalrecord`.
 */

module.exports = {

  /**
   * Retrieve medicalrecord records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.medicalrecord.fetchAll(ctx.query);
  },

  /**
   * Retrieve a medicalrecord record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.medicalrecord.fetch(ctx.params);
  },

  /**
   * Count medicalrecord records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.medicalrecord.count(ctx.query);
  },

  /**
   * Create a/an medicalrecord record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.medicalrecord.add(ctx.request.body);
  },

  /**
   * Update a/an medicalrecord record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.medicalrecord.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an medicalrecord record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.medicalrecord.remove(ctx.params);
  }
};
