'use strict';

/**
 * Educationhistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Educationhistory`.
 */

module.exports = {

  /**
   * Retrieve educationhistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.educationhistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a educationhistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.educationhistory.fetch(ctx.params);
  },

  /**
   * Count educationhistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.educationhistory.count(ctx.query);
  },

  /**
   * Create a/an educationhistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.educationhistory.add(ctx.request.body);
  },

  /**
   * Update a/an educationhistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.educationhistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an educationhistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.educationhistory.remove(ctx.params);
  }
};
