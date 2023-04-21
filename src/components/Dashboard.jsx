import { logo } from '../assets';

const Dashboard = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="logo" className='w-28 object-contain' />

            <button
            className="black_btn"
            type='button'
            onClick={() => window.open("https://github.com/shreyaspathak11")}>
            GitHub
            </button>
        </nav>
        <h1 className="head_text">Welcome! Summarise Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OPEN AI GPT-4</span>
        </h1>
        <h2 className="desc">Summarise articles with the help of Open AI GPT-4. <br className='max-md:hidden'/>
        <span className='orange_gradient'>No Sign Up Required</span>
        </h2>
    </header>
  )
}

export default Dashboard