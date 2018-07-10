'use strict';

/**
 * Employmenthistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Employmenthistory`.
 */

module.exports = {

  /**
   * Retrieve employmenthistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.employmenthistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a employmenthistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.employmenthistory.fetch(ctx.params);
  },

  /**
   * Count employmenthistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.employmenthistory.count(ctx.query);
  },

  /**
   * Create a/an employmenthistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.employmenthistory.add(ctx.request.body);
  },

  /**
   * Update a/an employmenthistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.employmenthistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an employmenthistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.employmenthistory.remove(ctx.params);
  }
};
