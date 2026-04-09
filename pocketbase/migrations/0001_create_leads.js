migrate(
  (app) => {
    const collection = new Collection({
      name: 'leads',
      type: 'base',
      createRule: '',
      listRule: 'id = @request.auth.id',
      viewRule: 'id = @request.auth.id',
      updateRule: 'id = @request.auth.id',
      deleteRule: 'id = @request.auth.id',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' },
        { name: 'message', type: 'text' },
        { name: 'company', type: 'text' },
        { name: 'fleetSize', type: 'text' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_leads_email ON leads (email)',
        'CREATE INDEX idx_leads_created ON leads (created)',
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('leads')
    app.delete(collection)
  },
)
