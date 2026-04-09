migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const seeds = [
      {
        name: 'João Silva',
        email: 'joao.silva@exemplo.com',
        phone: '(11) 99999-1111',
        company: 'Logística Silva',
        fleetSize: '11-50',
        message: 'Gostaria de uma demonstração da plataforma.',
      },
      {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@frota.com',
        phone: '(21) 98888-2222',
        company: 'Frota Rápida',
        fleetSize: '51-100',
        message: 'Temos interesse nos serviços de gestão inteligente.',
      },
    ]

    for (const data of seeds) {
      try {
        app.findFirstRecordByData('leads', 'email', data.email)
      } catch (_) {
        const record = new Record(col)
        record.set('name', data.name)
        record.set('email', data.email)
        record.set('phone', data.phone)
        record.set('company', data.company)
        record.set('fleetSize', data.fleetSize)
        record.set('message', data.message)
        app.save(record)
      }
    }
  },
  (app) => {
    const emails = ['joao.silva@exemplo.com', 'maria.oliveira@frota.com']
    for (const email of emails) {
      try {
        const record = app.findFirstRecordByData('leads', 'email', email)
        app.delete(record)
      } catch (_) {}
    }
  },
)
