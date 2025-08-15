exports.seed = async function (knex) {
  // Limpar dados existentes
  await knex('casos').del();
  await knex('agentes').del();

  // Inserir agentes
  const [a1, a2] = await knex('agentes')
    .insert([
      { nome: 'João Silva', dataDeIncorporacao: '2020-01-10', cargo: 'Delegado' },
      { nome: 'Maria Souza', dataDeIncorporacao: '2018-05-23', cargo: 'Investigadora' }
    ])
    .returning(['id']);

  // Inserir casos
  await knex('casos').insert([
    { titulo: 'Roubo no Centro', descricao: 'Roubo a joalheria', status: 'aberto', agente_id: a1.id },
    { titulo: 'Sequestro na Zona Sul', descricao: 'Vítima libertada', status: 'solucionado', agente_id: a2.id }
  ]);
};
