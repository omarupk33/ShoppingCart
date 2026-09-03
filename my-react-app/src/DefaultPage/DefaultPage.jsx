import './defaultPage.css'
import { Link } from 'react-router' 
function DefaultPage(){
    return (
        <main>
            <div className='intro'>
            <h2>
                Welcome to Doctorina
            </h2>
            <p>
                We are the number 1 trusted company when it comes to 
                healthy replacements of your favorite less healthy food! 
            </p>
            <p>
                We are here, so you don't have to worry wether your eggs, veggies, and even
                insects are offered while they are in their BEST before they are picked for consumption.
            </p>
            </div>
            <div>
                <h2>
                    What Do We Offer?
                </h2>
                <p>
                    Well, we basically offer everything edibale that is famous for not founding it
                    frech and healthy. A lot of people eat eggs for example, and the quality of the 
                    eggs vary based on the way it's been stored, managed through cleaning and packaging. 

                </p>
            </div>
            <div>
                <h2>
                    Check it out yourself!
                </h2>
                <Link to={'shop'}>Shop now</Link>
            </div>
        </main>             
   
    )
}


export default DefaultPage