module.exports = app => {
    
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)


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

    app.route('/articles')        
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id')        
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)

    app.route('/articles/:id/articles')        
        .get(app.api.article.getByCategory)
        
        
}
