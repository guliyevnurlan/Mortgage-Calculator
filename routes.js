
/* routes.js */

import { Router } from 'https://deno.land/x/oak@v6.5.1/mod.ts'
import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts'
// import { upload } from 'https://cdn.deno.land/oak_upload_middleware/versions/v2/raw/mod.ts'
// import { parse } from 'https://deno.land/std/flags/mod.ts'

import { login, register } from './modules/accounts.js';
import { saveOptions , getMortgageOptions , getFinancialData, deleteOption , addFinancialData } from './modules/calculator.js';

const handle = new Handlebars({ defaultLayout: '' })

const router = new Router()

// the routes defined here
router.get('/', async context => {
	const authorised = context.cookies.get('authorised')
	
    const listofOptions = await getMortgageOptions(authorised);
  
    const data = { authorised,
                 Options : listofOptions}
	const body = await handle.renderView('home', data)
	context.response.body = body
});

router.get('/fincialData', async context => {
	const authorised = context.cookies.get('authorised')
	
  const listofOptions = await getFinancialData(authorised);
    
    const data = { authorised,
                 Options : listofOptions};
    console.log(data)
	const body = await handle.renderView('FinancialData', data)
	context.response.body = body

   
});


router.get('/contactus', async context => {
	const authorised = context.cookies.get('authorised')
	
    const data = { authorised}
    
	const body = await handle.renderView('contact', data)
	context.response.body = body
});

router.get('/aboutus', async context => {
	const authorised = context.cookies.get('authorised')
	
    const data = { authorised}
    
	const body = await handle.renderView('about', data)
	context.response.body = body
});

router.get('/login', async context => {
	const body = await handle.renderView('login')
	context.response.body = body
})

router.get('/deleteOption', async context => {
	const body = await handle.renderView('removeOption')
	context.response.body = body
})

router.get('/register', async context => {
	const body = await handle.renderView('register')
	context.response.body = body
})

router.get('/addm', async context => {
  const authorised = context.cookies.get('authorised')
	
  const listofOptions = await getMortgageOptions(authorised);
    console.log(listofOptions)
    const data = { authorised,
                 Options : listofOptions}
	const body = await handle.renderView('addm', data)
	context.response.body = body
  
    
})

router.post('/register', async context => {
	console.log('POST /register')
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	console.log(obj)
	await register(obj)
	context.response.redirect('/login')
})

router.get('/logout', context => {
  // context.cookies.set('authorised', null) // this does the same
  context.cookies.delete('authorised')
  context.response.redirect('/')
})

router.post('/login', async context => {
	console.log('POST /login')
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	console.log(obj)
	try {
		const username = await login(obj)
		context.cookies.set('authorised', username)
		context.response.redirect('/')
	} catch(err) {
		console.log(err)
		context.response.redirect('/login')
	}
})
// saving the option
router.post('/addOption', async context => {
	const authorised = context.cookies.get('authorised');
    console.log(authorised)
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	
    
    await saveOptions(
        {...obj,
        addedBy: authorised
        })
context.response.redirect('/')
})



router.post('/FinancialData', async context => {
	const authorised = context.cookies.get('authorised');
    
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	
    await addFinancialData(
        {...obj,
        authorised
        })
context.response.redirect('/')
})
// delete the option
router.post('/deleteOption', async context => {
       
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	console.log(obj);
    console.log("--------------")
    await deleteOption(obj)
context.response.redirect('/')
})
router.get('/foo', async context => {
	const authorised = context.cookies.get('authorised')
	if(authorised === undefined) context.response.redirect('/')
	const data = { authorised }
	const body = await handle.renderView('foo', data)
	context.response.body = body
})

export default router
