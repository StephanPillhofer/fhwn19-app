let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Simple Node Website', () => {
  //Test the /GET route
  describe('/GET ', () => {
      it('it should GET the website', (done) => {
        chai.request('https://fhwn19-node-app-12.azurewebsites.net')
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });
});