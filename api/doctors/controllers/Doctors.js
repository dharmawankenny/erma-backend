'use strict';

/**
 * Doctors.js controller
 *
 * @description: A set of functions called "actions" for managing `Doctors`.
 */

module.exports = {

  /**
   * Retrieve doctors records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.doctors.fetchAll(ctx.query);
  },

  /**
   * Retrieve a doctors record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.doctors.fetch(ctx.params);
  },

  /**
   * Count doctors records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.doctors.count(ctx.query);
  },

  /**
   * Create a/an doctors record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.doctors.add(ctx.request.body);
  },

  /**
   * Update a/an doctors record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.doctors.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an doctors record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.doctors.remove(ctx.params);
  }
};
