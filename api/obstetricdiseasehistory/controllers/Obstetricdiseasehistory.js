'use strict';

/**
 * Obstetricdiseasehistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Obstetricdiseasehistory`.
 */

module.exports = {

  /**
   * Retrieve obstetricdiseasehistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.obstetricdiseasehistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a obstetricdiseasehistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.obstetricdiseasehistory.fetch(ctx.params);
  },

  /**
   * Count obstetricdiseasehistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.obstetricdiseasehistory.count(ctx.query);
  },

  /**
   * Create a/an obstetricdiseasehistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.obstetricdiseasehistory.add(ctx.request.body);
  },

  /**
   * Update a/an obstetricdiseasehistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.obstetricdiseasehistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an obstetricdiseasehistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.obstetricdiseasehistory.remove(ctx.params);
  }
};
