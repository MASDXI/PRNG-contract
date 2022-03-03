const LENGTH_ZERO = 0;
const LENGTH_ONE = 1;
const LENGTH_HUNDRED = 100;
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const SIGNATURE =
  "0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c";
const HASH_MESSAGE =
  "0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655";
const INVALID_ENTROPY = [ZERO_ADDRESS, HASH_MESSAGE, SIGNATURE];

const S1 =
  "0x0743b73f64cfce664953f9dab559bbfb87382aef6f0be2de52148f72f65f64410000000000000000000000000000000000000000000000000000000062206b9d4f0f64dc1b43e330a39358cc05a39156072ad4e04bb7427e59f43c1ca83397a2180bd0aeb476e6291c6feed4cf6a260e24fd5fd6eb4471effec7f1e23235fccc";
const S2 =
  "0x0743b73f64cfce664953f9dab559bbfb87382aef6f0be2de52148f72f65f64410000000000000000000000000000000000000000000000000000000062206b9d20697f3357b350ec4f08417c7337df07e6b46892a084e265c0c5cfdb9c0c4ea070a8e3fcfb13d99caba4e2c5528ac4c583ac6ba31e1bb4bdb06106eb98e96d45";
const RESULT = "68";
const INVALID_RESULT = "86";

module.exports = {
  LENGTH_ZERO,
  LENGTH_ONE,
  LENGTH_HUNDRED,
  ZERO_ADDRESS,
  INVALID_ENTROPY,
  S1,
  S2,
  RESULT,
  INVALID_RESULT,
};