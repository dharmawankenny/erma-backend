'use strict';

/**
 * Elderdiseasehistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Elderdiseasehistory`.
 */

module.exports = {

  /**
   * Retrieve elderdiseasehistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.elderdiseasehistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a elderdiseasehistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.elderdiseasehistory.fetch(ctx.params);
  },

  /**
   * Count elderdiseasehistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.elderdiseasehistory.count(ctx.query);
  },

  /**
   * Create a/an elderdiseasehistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.elderdiseasehistory.add(ctx.request.body);
  },

  /**
   * Update a/an elderdiseasehistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.elderdiseasehistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an elderdiseasehistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.elderdiseasehistory.remove(ctx.params);
  }
};
