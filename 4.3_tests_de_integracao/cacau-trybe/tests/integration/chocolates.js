// tests/integration/chocolates.test.js

const chai = require('chai');

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
        response = await minhaRequisicao();
        expect(response.status).to.be.equal(200);
    });
});