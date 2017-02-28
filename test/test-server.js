var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('user profile actions', function(){
    it('should post new user', function(done){
        chai.request(app)
            .post('/users')
            .send({'username': 'Rakesh'})
            .end()
                should.equal(err, null);
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('username');
                res.body.should.have.property('comments');
                res.body.name.should.be.a('string');
                done();
    });

    it('should get user details', function(done){
        chai.request(app)
            .get('/users/test')
            .end(function(err, res){
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('username');
                res.body.should.have.property('comments');
                res.body.name.should.be.a('string');
                done();
            })
    });
});