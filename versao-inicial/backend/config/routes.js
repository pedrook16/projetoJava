module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)


    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    
    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)
    //Cuidado na Ordem! Antes da route /categories/:id
    app.route('/categories/tree')
        .get(app.api.category.getTree)
        

    app.route('/categories/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.category.remove)
}
