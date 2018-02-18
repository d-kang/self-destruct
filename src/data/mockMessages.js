const data = [
  {
    username: 'David',
    message: 'This Message will self Destruct in 5 seconds',
    selfDestruct: true,
    destructAt: 5000 + Date.now(),
    totalMs: 5000,
    hasExpired: false,
    messageId: 7093,
  },
  {
    username: 'Lisa',
    message: 'This Message will self Destruct in 10 seconds.',
    selfDestruct: true,
    destructAt: 10000 + Date.now(),
    totalMs: 10000,
    hasExpired: false,
    messageId: 9816,
  },
  {
    username: 'Francis',
    message: 'This Message will self Destruct in 20 seconds.',
    selfDestruct: true,
    destructAt: 20000 + Date.now(),
    totalMs: 20000,
    hasExpired: false,
    messageId: 6534,
  },
  {
    username: 'Sonrisa',
    message: 'This Message will self Destruct in 30 seconds.',
    selfDestruct: true,
    destructAt: 30000 + Date.now(),
    totalMs: 30000,
    hasExpired: false,
    messageId: 6279,
  },
  {
    username: 'David',
    message: 'This Message will not self destruct',
    selfDestruct: false,
    destructAt: -1,
    totalMs: -1,
    hasExpired: false,
    messageId: 4141,
  },
  {
    username: 'Lisa',
    message: 'This Message will self Destruct in 1 minute.',
    selfDestruct: true,
    destructAt: 60000 + Date.now(),
    totalMs: 60000,
    hasExpired: false,
    messageId: 9452,
  },
  {
    username: 'Francis',
    message: 'This message will not self destruct.',
    selfDestruct: false,
    destructAt: -1,
    totalMs: -1,
    hasExpired: false,
    messageId: 8911,
  },
  {
    username: 'Sonrisa',
    message: 'This Message will self Destruct in 2 minutes.',
    selfDestruct: true,
    destructAt: 120000 + Date.now(),
    totalMs: 120000,
    hasExpired: false,
    messageId: 1386,
  },
];

export default data;