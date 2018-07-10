'use strict';

/**
 * Childimmunizationhistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Childimmunizationhistory`.
 */

module.exports = {

  /**
   * Retrieve childimmunizationhistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.childimmunizationhistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a childimmunizationhistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.childimmunizationhistory.fetch(ctx.params);
  },

  /**
   * Count childimmunizationhistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.childimmunizationhistory.count(ctx.query);
  },

  /**
   * Create a/an childimmunizationhistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.childimmunizationhistory.add(ctx.request.body);
  },

  /**
   * Update a/an childimmunizationhistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.childimmunizationhistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an childimmunizationhistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.childimmunizationhistory.remove(ctx.params);
  }
};
