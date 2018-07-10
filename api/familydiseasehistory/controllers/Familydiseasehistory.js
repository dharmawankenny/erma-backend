'use strict';

/**
 * Familydiseasehistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Familydiseasehistory`.
 */

module.exports = {

  /**
   * Retrieve familydiseasehistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.familydiseasehistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a familydiseasehistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.familydiseasehistory.fetch(ctx.params);
  },

  /**
   * Count familydiseasehistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.familydiseasehistory.count(ctx.query);
  },

  /**
   * Create a/an familydiseasehistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.familydiseasehistory.add(ctx.request.body);
  },

  /**
   * Update a/an familydiseasehistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.familydiseasehistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an familydiseasehistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.familydiseasehistory.remove(ctx.params);
  }
};
