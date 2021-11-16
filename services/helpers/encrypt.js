const { JWK, JWE } = require('node-jose');
const fs = require('fs');
const path = require('path');

const encrypt = async (body) => {
  const publicKey = await JWK.asKey(fs.readFileSync(path.join(__dirname, '../../ssl', 'pb-jwe-public.pem')), 'pem');
  const payload = Buffer.from(JSON.stringify({
    iss: 'project-bubblewrap-api',
    aud: 'project-bubblewrap-api',
    iat: new Date().valueOf(),
    exp: new Date().valueOf() + (60000 * 5),
    ...body
  }));
  return JWE
    .createEncrypt({ format: 'compact', contentAlg: 'A256GCM', fields: { alg: 'RSA-OAEP' }}, publicKey)
    .update(payload)
    .final();
};

const decrypt = async (jwe) => {
  const privateKey = await JWK.asKey(fs.readFileSync(path.join(__dirname, '../../ssl', 'pb-jwe-private.pem')), 'pem');
  return JWE
    .createDecrypt(privateKey)
    .decrypt(jwe)
    .then(decrypted => JSON.parse(decrypted.payload.toString()))
}



module.exports = { encrypt, decrypt };