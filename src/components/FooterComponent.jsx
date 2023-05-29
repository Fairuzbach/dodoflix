import { Footer } from 'flowbite-react'
const position = {
    position: 'relative',
    marginTop: '88px'
}
const FooterComponent = () => {
    return (
        <div style={position}>
            <Footer container>
                <Footer.Copyright
                    by="DodoFlix™"
                    href="#"
                    year={2023}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    )
}
export default FooterComponent