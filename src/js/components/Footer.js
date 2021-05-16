import React from 'react';



const Footer = () => {

    return (

        <footer className="footer" >
            <div className="container">
                <hr className="footer-top-seperator" />
                <div className="footer-copyright">
                    Created with by <a href={"https://github.com/heh81"} rel="noreferrer" target={"_blank"}>EwaBrzuszczak</a>
                </div>
                <div className="footer-github">
                    If you spot any bug or have feedback, please open an isssue on <a href={"https://github.com/heh81/my-app"} rel="noreferrer" target={"_blank"}>GitHub</a>
                </div>
                <div className="footer-linkedin">
                    <a href="https://www.linkedin.com/in/ewa-brzuszczak/" rel="noreferrer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;