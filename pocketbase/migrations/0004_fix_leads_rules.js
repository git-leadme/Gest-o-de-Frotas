migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('leads')
    collection.listRule = "@request.auth.id != ''"
    collection.viewRule = "@request.auth.id != ''"
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('leads')
    collection.listRule = 'id = @request.auth.id'
    collection.viewRule = 'id = @request.auth.id'
    app.save(collection)
  },
)
