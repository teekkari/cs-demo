import Header from './Header';

function Layout(props) {
    return <div className='w-[90%] max-w-[1200px] m-auto'>
        <main className=''>
            {props.children}
        </main>
    </div>
}

export default Layout;