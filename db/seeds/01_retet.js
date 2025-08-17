exports.seed = async function (knex) {
  // Limpa tabelas e reseta IDs (ordem certa para não quebrar FK)
  await knex.raw('TRUNCATE TABLE casos RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE agentes RESTART IDENTITY CASCADE');
};
