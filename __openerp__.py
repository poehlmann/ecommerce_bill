# -*- coding: utf-8 -*-
{
    'name': "ecommerce_bill",
    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,
    'author': "Redesk",
    'website': "http://www.redeskbolivia.com",
    'category': 'Uncategorized',
    'version': '0.1',
    # any module necessary for this one to work correctly
    'depends': ['base'],
    # always loaded
    'data': [
        'views/templates.xml',
        'views/views.xml',
    ],
    'js': ['static/src/js/fields_bill.js'],
}