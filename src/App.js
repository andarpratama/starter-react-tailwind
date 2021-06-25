import logo from './logo.svg';
import './App.css';

function App() {
  const CardStyle = {
     section: 'min-h-screen flex items-center justify-center px-4 bg-white',
     wrapper: 'max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col',
     h3: 'font-semibold text-lg tracking-wide',
     p: 'text-gray-500 my-1',
     buttonWrapper: 'md:px-2 mt-3 md:mt-0 items-center flex',
     button: 'bg-blue-500 text-white font-bold px-4 py-2 text-sm uppercase rounded tracking-wider focus:outline-none hover:bg-blue-600'
  }
   
  return (
     <>
        <section className={CardStyle.section}>
            <div className={CardStyle.wrapper}>
                  <div className="flex-1">
                     <h3 className={CardStyle.h3}>Here is link for your payment.</h3>
                     <p className={CardStyle.p}>
                        The link will be available for 24 hours. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Nesciunt, sequi!
                     </p>
                  </div>
                  <div className="">
                     <button className={CardStyle.button}> Something</button>
                  </div>
            </div>
         </section>
     </>
  );
}

export default App;
