
function Footer() {
    return (
        <footer className='footer p-10 bg-gray-700 text-primary-content footer-center text-gray-500'>
            <i className="fa-solid fa-code fa-2xl "></i>
            Copyright &copy; {new Date().getFullYear()}
        </footer>
    )
}

export default Footer