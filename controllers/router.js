// Map routes to controller functions
module.exports = function(router) {

  router.get('/notify', function(req, res) {
    var message = req.headers['message'];
    var messageType = req.headers['type'];
    throw new Error('['+new Date()+'] ['+messageType+'] : '+message);
  });

};
