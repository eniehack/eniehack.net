import Layout from "./layout.html.jsx";
import { Matrix, Go, Django, Xmpp, Liberapay, Nginx, Linux, Twitter, Github, Keybase, Gatsby, NuxtDotJs, Cplusplus, Debian, Archlinux, Arduino } from "@icons-pack/react-simple-icons";

const Avatar = () => {
    return (
        <div className="column is-one-third-desktop is-one-third-touch">
            <figure title="avatar" className="image is-square">
                <img src="avatar.svg" alt="avatar"/>
            </figure>
        </div>
    )
}

const Introduction = () => {
    return (
        <section id="introduction" className="column is-full section">
            <h1 className="title is-size-1-desktop">
                Nakaya
            </h1>
            <h2 className="subtitle is-size-3-desktop">
                Web developer
            </h2>
        </section>
    )
}

const IconComponents = (props) => {
    const descriptionList = props.descriptions.map((link, index) => 
        <span key={index}>{link}</span>
    );
    return (
        <div className="column has-text-centered">
            <span className="icon is-large">
                {props.icon}
            </span>
            {descriptionList}
        </div>
    )
}

const LikeCardConponents = (props) => {
    const linkList = props.links.map((link, index) => 
        <div className="column" key={index}>
            {link}
        </div>
    );
    return (
        <section className="column is-one-third-desktop">
            <h3 className="subtitle">
                {props.title}
            </h3>
            <div>
                <div className="content">
                    {props.description}
                </div>
                <div className="columns is-mobile is-inline-flex">
                    {linkList}
                </div>
            </div>
        </section>
    )
}

const Works = () => {
    return (
        <section id="works" className="column is-full section">
            <h2 className="title">Works</h2>
            <div className="columns is-multiline">
                <LikeCardConponents
                    title="matrix-jp.net"
                    description="matrix-jp.netはチャットのオープン規格の1つであるMatrix.orgのホームサーバの1つで、Matrixを日本に啓蒙しようと立てられました。私は運営をしています。"
                    links={[
                        <div className="column">
                            <a href="https://matrix-jp.net" rel="noopener me" target="_blank" className="button is-rounded is-primary">
                                <span>visit</span>
                            </a>
                        </div>,
                        <div className="column">
                            <a href="https://matrix.org" rel="noopener me" target="_blank" className="button is-rounded is-info">
                                matrix.org
                            </a>
                        </div>
                    ]}
                />
                <LikeCardConponents
                    title="w3w-encounter(仮) [W.I.P.]"
                    description="ElmとWhat3Words API、Bulma、Geolocation APIを用いて作られた待ち合わせ支援ツールです。"
                    links={[
                        <div className="column">
                            <a href="https://github.com/eniehack/w3w-encounter" rel="noopener me" target="_blank" title="w3w-encounter's github page" className="button is-rounded">
                                <span className="icon">
                                    <Github />
                                </span>
                                <span>GitHub</span>
                            </a>
                        </div>
                    ]}
                />
                <LikeCardConponents
                    title="persona [W.I.P.]"
                    description="Mastodonなどが参加するネットワーク、ActivityPubに対応予定のSNSです。"
                    links={[
                        <div className="column">
                            <a href="https://github.com/Persona-dev/Persona-Server" rel="noopener me" target="_blank" title="github" className="button is-rounded">
                                <span className="icon">
                                    <Github />
                                </span>
                                <span>GitHub</span>
                            </a>
                        </div>
                    ]}
                />
                <LikeCardConponents
                    title="Amaterrace [W.I.P.]"
                    description="オープンソースな光目覚まし時計です。スマートフォンでBluetoothを介しデバイスに関するあらゆる設定ができるようになる予定です。日本神話における太陽神、天照大神(あまてらすおおみかみ)と日光浴のイメージのある、terraceをとって命名しました。"
                    links={[
                        <div className="column">
                            <a href="https://github.com/eniehack/amaterrace" rel="noopener me" target="_blank" title="amaterrace git repogitory" className="button is-rounded">
                                <span className="icon">
                                    <Github />
                                </span>
                                <span>GitHub</span>
                            </a>
                        </div>
                    ]}
                />
            </div>
        </section>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="column is-full section">
            <h2 className="title is-size-3-desktop">Skills</h2>
            <div className="columns is-inline-flex is-multiline">
                <section className="section column">
                    <h3 className="subtitle">Web Backend</h3>
                    <div className="columns is-mobile is-inline-flex">
                        <IconComponents
                            icon={<Django />}
                            descriptions={[<p>Django</p>]}
                        />
                        <IconComponents
                            icon={<Go />}
                            descriptions={[<p>Golang</p>]}
                        />
                    </div>
                </section>
                <section className="section column">
                    <h3 className="subtitle">Web Frontend</h3>
                    <div className="columns is-mobile">
                        <IconComponents
                            icon={<Gatsby />}
                            descriptions={[<p>GatsbyJS</p>]}
                        />
                        <IconComponents
                            icon={<NuxtDotJs />}
                            descriptions={[<p>Nuxt.js</p>]}
                        />
                        <IconComponents
                            icon={<img src="elm.svg" alt="Elm icon"></img>}
                            descriptions={[<p>Elm</p>]}
                        />
                    </div>
                </section>
                <section className="section column">
                    <h3 className="subtitle">Embbeded System</h3>
                    <div className="columns is-mobile">
                        <IconComponents
                            icon={<Arduino />}
                            descriptions={[<p>Arduino</p>]}
                        />
                        <IconComponents
                            icon={<i className="fa fa-microchip fa-2x" aria-hidden="true"></i>}
                            descriptions={[<p>ESP32</p>]}
                        />
                        <IconComponents
                            icon={<Cplusplus />}
                            descriptions={[<p>C++</p>]}
                        />
                    </div>
                </section>
                <section className="section column">
                    <h3 className="subtitle">Infrastructure</h3>
                    <div className="columns is-mobile">
                        <IconComponents
                            icon={<Debian />}
                            descriptions={[<p>Debian</p>]}
                        />
                        <IconComponents
                            icon={<Archlinux />}
                            descriptions={[<p>Archlinux</p>]}
                        />
                        <IconComponents
                            icon={<Nginx />}
                            descriptions={[<p>nginx</p>]}
                        />
                        <IconComponents
                            icon={<Linux />}
                            descriptions={[<p>Linux</p>]}
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}

const LinkComponent = (props) => {
    return (
        <span className="column">
            <a href={props.href} rel="noopener me" target="_blank" title={props.title}>
                <span className="icon is-large">
                    {props.icon}
                </span>
            </a>
        </span>
    )
}

const Links = () => {
    return (
        <section id="links" className="column is-full section">
            <h2 className="title">Links</h2>
            <div className="columns is-mobile is-multiline is-inline-flex">
                <LinkComponent
                    icon={<i aria-hidden="true" className="fa fa-pleroma fa-2x"></i>}
                    href="https://pleroma.eniehack.net/eniehack"
                    title="Pleroma"
                />
                <LinkComponent
                    icon={<Liberapay />}
                    href="https://liberapay.com/eniehack"
                    title="Liberapay"
                />
                <LinkComponent
                    href="https://twitter.com/eniehack"
                    title="twitter"
                    icon={<Twitter />}
                />
                <LinkComponent
                    href="https://github.com/eniehack"
                    title="github"
                    icon={<Github />}
                />
                <LinkComponent
                    href="https://keybase.io/eniehack"
                    title="keybase"
                    icon={<Keybase />}
                />
                <LinkComponent
                    href="https://matrix.to/#/@eniehack:matrix-jp.net"
                    title="Matrix"
                    icon={<Matrix />}
                />
                <LinkComponent
                    href="xmpp:eniehack@jabber.at"
                    title="XMPP"
                    icon={<Xmpp />}
                />
            </div>
        </section>
    )
}

export default () => {
    return (
        <Layout title="eniehack.net">
            <Avatar />
            <Introduction />
            <Works />
            <Skills />
            <Links />
        </Layout>
    )
}