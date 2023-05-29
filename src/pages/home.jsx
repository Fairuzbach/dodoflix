import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent";

const Home = () => {
    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '77vh'
    }

    const buttonClicked = () => {
        setValue("dipencet")
        return alert("Button Clicked")
    };
    const [value, setValue] = useState("Show More 2");


    return (
        <div className="App">
            <NavbarComponent />
            <div className="p-12" style={center}>
                <article className="prose lg:prose-xl">
                    <h1>DodoFlix!</h1>
                    <p className="text-center">
                        Dear Movie Enthusiast,
                    </p>
                    <p>
                        DodoFlix is not just another streaming website; it is a carefully curated platform designed to bring the magic of movies right to your fingertips. As passionate movie lovers ourselves, we understand the joy and thrill that comes from immersing oneself in captivating storytelling and breathtaking visuals. That's why we've made it our mission to create a haven for film enthusiasts like you.
                    </p>
                    <p>
                        As a subscriber to DodoFlix, you can also look forward to exclusive content, including behind-the-scenes documentaries, director interviews, and bonus features that offer a deeper dive into the world of cinema. We believe that movies have the power to inspire, provoke, and unite, and we aim to foster an environment where you can truly appreciate the artistry and craftsmanship behind every film.
                    </p>
                    <p>
                        To celebrate our launch, we are offering a limited-time trial period, giving you the opportunity to explore DodoFlix and experience the joy of unlimited movie streaming without any commitments. Join us on this exciting cinematic adventure, and discover a new way to enjoy the magic of movies.
                    </p>
                    <p>
                        Thank you for choosing DodoFlix as your go-to movie streaming website. We are honored to have you as part of our growing community, and we can't wait to share the wonders of cinema with you.

                        Lights, camera, action!

                        The DodoFlix Team
                    </p>
                    <div className="w-full">
                        <ButtonComponent buttonClicked={buttonClicked} btnName="Show More 1" /><br />
                        <ButtonComponent buttonClicked={buttonClicked} btnName={value} />
                    </div>
                </article>
            </div>
            <marquee className='font-bold'>DodoFlix! DodoFlix! DodoFlix! DodoFlix!</marquee>
            <FooterComponent />
        </div >
    )
}
export default Home