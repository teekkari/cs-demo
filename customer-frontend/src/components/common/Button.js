function Button({ primary, className, onClick, children }) {

    let classList = [className, 'p-2 rounded-lg relative transition-all top-0 hover:-top-1 cursor-pointer'];
    if (primary) 
        classList.push('bg-primary text-dark')
    else
        classList.push('border-primary border-2 text-primary')

    return <button onClick={onClick} className={classList.join(' ')}>
        {children}
    </button>;
}

export default Button;