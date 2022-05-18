import Head from 'next/Head'

function HeadApp(props){
    return (
        <Head >
            <title>{props.title} | TiketKita</title>
        </Head>
    )
}

export default HeadApp;