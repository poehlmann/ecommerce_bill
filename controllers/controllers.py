# -*- coding: utf-8 -*-
from openerp import http

# class EcommerceBill(http.Controller):
#     @http.route('/ecommerce_bill/ecommerce_bill/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/ecommerce_bill/ecommerce_bill/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('ecommerce_bill.listing', {
#             'root': '/ecommerce_bill/ecommerce_bill',
#             'objects': http.request.env['ecommerce_bill.ecommerce_bill'].search([]),
#         })

#     @http.route('/ecommerce_bill/ecommerce_bill/objects/<model("ecommerce_bill.ecommerce_bill"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('ecommerce_bill.object', {
#             'object': obj
#         })