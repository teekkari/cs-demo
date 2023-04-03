
function Layout(props) {
    return <div className='w-[80%] max-w-[1200px] m-auto mt-10'>
        <main className=''>
            {props.children}
        </main>
    </div>
}

export default Layout;