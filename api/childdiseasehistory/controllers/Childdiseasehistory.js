'use strict';

/**
 * Childdiseasehistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Childdiseasehistory`.
 */

module.exports = {

  /**
   * Retrieve childdiseasehistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.childdiseasehistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a childdiseasehistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.childdiseasehistory.fetch(ctx.params);
  },

  /**
   * Count childdiseasehistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.childdiseasehistory.count(ctx.query);
  },

  /**
   * Create a/an childdiseasehistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.childdiseasehistory.add(ctx.request.body);
  },

  /**
   * Update a/an childdiseasehistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.childdiseasehistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an childdiseasehistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.childdiseasehistory.remove(ctx.params);
  }
};
