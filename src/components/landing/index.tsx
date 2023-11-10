import Page from "../templates/Page"
import Header from "./header"
import Highlight from "./highlight"
import Benefits from "./benefits"
import Testimonials from "./testimonials"
import Footer from "./footer"

export default function Landing() {
    return (
        <Page>
            <Header />
            <Highlight />
            <Benefits />
            <Testimonials />
            <Footer />
        </Page>
    )
}