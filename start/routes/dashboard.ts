import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

// file deepcode ignore NoRateLimitingForExpensiveWebOperation: <Already applied>

Route.get('/dashboard', async ({ view, request }) => {
  const data = await Database.from('users').where('uid', request.cookiesList().uid)
  return view.render('dashboard', {
    data: data,
  })
})
