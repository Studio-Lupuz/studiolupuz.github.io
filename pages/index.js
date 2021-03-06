import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import VnCharacters from "../components/VnCharacters";
import Team from "../components/Team";
import Footer from "../components/Footer";
import CalendarAndWidgets from "../components/CalendarAndWidgets";
import {websiteName} from "../components/variables";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{websiteName}</title>
                <meta name="description"
                      content="Um projeto voltado a gerar conteúdo para a comunidade furry! Um incrível universo de histórias que irá incorporar visual-novels, comics e muito mais. Venha fazer parte!"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header/>
            <About/>
            <VnCharacters/>
            <CalendarAndWidgets/>
            <Team/>
            <Footer/>
        </div>
    );
}
