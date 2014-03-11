/*
 * Purchase controller
 */

var express = require('express');

exports.integration = function(req, res) {
  res.render('integration', {});
};

exports.integrationIframe = function(req, res) {
  var productUrl = { url: req.query.product };
  var publicToken = req.app.settings.public_token;
  res.render('integration_iframe', { products: [ productUrl ], publicToken: publicToken });
};


exports.purchaseConfirmCallback = function(req, res) {
  var apiURL = req.app.settings.api_url;  
  var purchaseId = req.body.purchase_id;
  var testMode = req.body.test_mode;
  var privateToken = req.app.settings.private_token;
  
  var callPath = '/v1.0/purchase_confirm?private_token=' + privateToken;

  request.post(apiURL + callPath, { form : { purchase_id: purchaseId, test_mode: testMode } }, function (error, response, body) {
    res.json(JSON.parse(body));
  });
};